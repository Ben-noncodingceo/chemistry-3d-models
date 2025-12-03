import * as THREE from 'three'
import type { Atom, Bond, Molecule } from '../types/molecule'
import { getAtomColor, getAtomRadius } from '../data/colorSchemes'

// 创建原子网格
export const createAtomMesh = (atom: Atom, scale: number = 1): THREE.Mesh => {
  const radius = getAtomRadius(atom.element) * scale
  const geometry = new THREE.SphereGeometry(radius, 32, 32)
  const material = new THREE.MeshPhongMaterial({
    color: getAtomColor(atom.element),
    shininess: 80,
    specular: 0x444444,
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(atom.x, atom.y, atom.z)

  // 存储原子信息
  mesh.userData = {
    type: 'atom',
    element: atom.element,
  }

  return mesh
}

// 创建化学键网格
export const createBondMesh = (
  atom1: Atom,
  atom2: Atom,
  bondType: 'single' | 'double' | 'triple'
): THREE.Group => {
  const group = new THREE.Group()

  const start = new THREE.Vector3(atom1.x, atom1.y, atom1.z)
  const end = new THREE.Vector3(atom2.x, atom2.y, atom2.z)
  const direction = new THREE.Vector3().subVectors(end, start)
  const length = direction.length()

  const bondRadius = 0.1

  // 根据键的类型创建不同数量的圆柱
  const bondCount = bondType === 'single' ? 1 : bondType === 'double' ? 2 : 3
  const offset = bondType === 'single' ? 0 : 0.15

  for (let i = 0; i < bondCount; i++) {
    const geometry = new THREE.CylinderGeometry(bondRadius, bondRadius, length, 16)
    const material = new THREE.MeshPhongMaterial({
      color: 0xcccccc,
      shininess: 30,
    })
    const cylinder = new THREE.Mesh(geometry, material)

    // 定位和旋转圆柱
    const midpoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
    cylinder.position.copy(midpoint)

    // 旋转圆柱使其指向正确的方向
    cylinder.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      direction.clone().normalize()
    )

    // 对于双键和三键，添加偏移
    if (bondCount > 1) {
      const perpendicular = new THREE.Vector3(1, 0, 0)
        .cross(direction)
        .normalize()
      const offsetVector = perpendicular.multiplyScalar((i - (bondCount - 1) / 2) * offset)
      cylinder.position.add(offsetVector)
    }

    cylinder.userData = {
      type: 'bond',
      bondType: bondType,
    }

    group.add(cylinder)
  }

  return group
}

// 创建孤对电子的可视化
export const createLonePairMesh = (
  centerAtom: Atom,
  direction: THREE.Vector3,
  distance: number = 1.2
): THREE.Mesh => {
  const geometry = new THREE.SphereGeometry(0.25, 16, 16)
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    transparent: true,
    opacity: 0.3,
    wireframe: true,
  })
  const mesh = new THREE.Mesh(geometry, material)

  const position = new THREE.Vector3(centerAtom.x, centerAtom.y, centerAtom.z)
  position.add(direction.normalize().multiplyScalar(distance))
  mesh.position.copy(position)

  mesh.userData = {
    type: 'lonePair',
  }

  return mesh
}

// 创建完整的分子模型
export const createMoleculeModel = (molecule: Molecule, scale: number = 1): THREE.Group => {
  const group = new THREE.Group()

  // 添加原子
  molecule.atoms.forEach(atom => {
    const atomMesh = createAtomMesh(atom, scale)
    group.add(atomMesh)
  })

  // 添加化学键
  molecule.bonds.forEach(bond => {
    const atom1 = molecule.atoms[bond.from]
    const atom2 = molecule.atoms[bond.to]
    const bondMesh = createBondMesh(atom1, atom2, bond.type)
    group.add(bondMesh)
  })

  return group
}

// 计算分子的包围盒
export const getMoleculeBoundingBox = (molecule: Molecule): THREE.Box3 => {
  const box = new THREE.Box3()
  molecule.atoms.forEach(atom => {
    box.expandByPoint(new THREE.Vector3(atom.x, atom.y, atom.z))
  })
  return box
}

// 计算合适的相机距离
export const calculateCameraDistance = (molecule: Molecule): number => {
  const box = getMoleculeBoundingBox(molecule)
  const size = box.getSize(new THREE.Vector3())
  const maxDim = Math.max(size.x, size.y, size.z)
  return maxDim * 3
}
