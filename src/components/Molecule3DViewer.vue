<template>
  <div ref="containerRef" class="viewer-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useMoleculeStore } from '../stores/moleculeStore'
import { createMoleculeModel, calculateCameraDistance, createLonePairMesh } from '../utils/threeHelpers'

const containerRef = ref<HTMLDivElement | null>(null)
const moleculeStore = useMoleculeStore()

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let controls: OrbitControls
let moleculeGroup: THREE.Group | null = null
let animationId: number
let autoRotateEnabled = ref(true) // 默认开启自动旋转

// 初始化Three.js场景
const initScene = () => {
  if (!containerRef.value) return

  // 创建场景
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000) // 纯黑色背景

  // 创建相机
  const width = containerRef.value.clientWidth
  const height = containerRef.value.clientHeight
  camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
  camera.position.z = 10

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)
  containerRef.value.appendChild(renderer.domElement)

  // 添加轨道控制器
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.screenSpacePanning = false
  controls.minDistance = 3
  controls.maxDistance = 50
  controls.enablePan = true
  controls.autoRotate = true // 启用自动旋转
  controls.autoRotateSpeed = 0.5 // 1分钟转一圈：360度/60秒 ≈ 6度/秒，OrbitControls的速度参数约为0.5

  // 添加光源
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)

  const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight1.position.set(5, 5, 5)
  scene.add(directionalLight1)

  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4)
  directionalLight2.position.set(-5, -5, -5)
  scene.add(directionalLight2)

  // 启动动画循环
  animate()
}

// 动画循环
const animate = () => {
  animationId = requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

// 加载分子模型
const loadMolecule = () => {
  if (!moleculeStore.currentMolecule) return

  // 移除旧的分子模型
  if (moleculeGroup) {
    scene.remove(moleculeGroup)
    disposeGroup(moleculeGroup)
  }

  // 创建新的分子模型
  moleculeGroup = createMoleculeModel(moleculeStore.currentMolecule, 1)
  scene.add(moleculeGroup)

  // 添加孤对电子可视化
  if (moleculeStore.showLonePairs && moleculeStore.currentMolecule.vsepr.lonePairs > 0) {
    addLonePairVisualization()
  }

  // 调整相机位置
  const distance = calculateCameraDistance(moleculeStore.currentMolecule)
  camera.position.set(distance, distance * 0.5, distance)
  camera.lookAt(0, 0, 0)
  controls.target.set(0, 0, 0)
  controls.update()
}

// 添加孤对电子可视化
const addLonePairVisualization = () => {
  if (!moleculeStore.currentMolecule || !moleculeGroup) return

  const centerAtom = moleculeStore.currentMolecule.atoms[0] // 假设中心原子是第一个
  const lonePairs = moleculeStore.currentMolecule.vsepr.lonePairs

  // 根据分子ID和几何结构确定孤对电子的位置
  const moleculeId = moleculeStore.currentMolecule.id

  if (moleculeId === 2) { // 氨 NH3 - 1对孤对电子
    const direction = new THREE.Vector3(0, -1, 0.5)
    const lonePair = createLonePairMesh(centerAtom, direction, 1.2)
    moleculeGroup.add(lonePair)
  } else if (moleculeId === 3) { // 水 H2O - 2对孤对电子
    const direction1 = new THREE.Vector3(-0.5, -1, 0)
    const direction2 = new THREE.Vector3(0.5, -1, 0)
    const lonePair1 = createLonePairMesh(centerAtom, direction1, 1.0)
    const lonePair2 = createLonePairMesh(centerAtom, direction2, 1.0)
    moleculeGroup.add(lonePair1)
    moleculeGroup.add(lonePair2)
  } else if (moleculeId === 11) { // SO2 - 1对孤对电子
    const direction = new THREE.Vector3(0, -1, 0)
    const lonePair = createLonePairMesh(centerAtom, direction, 1.3)
    moleculeGroup.add(lonePair)
  } else if (moleculeId === 13) { // ClF3 - 2对孤对电子
    const direction1 = new THREE.Vector3(0, 1, 0)
    const direction2 = new THREE.Vector3(0, -1, 0)
    const lonePair1 = createLonePairMesh(centerAtom, direction1, 1.4)
    const lonePair2 = createLonePairMesh(centerAtom, direction2, 1.4)
    moleculeGroup.add(lonePair1)
    moleculeGroup.add(lonePair2)
  } else if (moleculeId === 14) { // XeF4 - 2对孤对电子
    const direction1 = new THREE.Vector3(0, 0, 1)
    const direction2 = new THREE.Vector3(0, 0, -1)
    const lonePair1 = createLonePairMesh(centerAtom, direction1, 1.5)
    const lonePair2 = createLonePairMesh(centerAtom, direction2, 1.5)
    moleculeGroup.add(lonePair1)
    moleculeGroup.add(lonePair2)
  } else if (moleculeId === 16) { // H2S - 2对孤对电子
    const direction1 = new THREE.Vector3(-0.5, -1, 0)
    const direction2 = new THREE.Vector3(0.5, -1, 0)
    const lonePair1 = createLonePairMesh(centerAtom, direction1, 1.2)
    const lonePair2 = createLonePairMesh(centerAtom, direction2, 1.2)
    moleculeGroup.add(lonePair1)
    moleculeGroup.add(lonePair2)
  } else if (moleculeId === 17) { // PH3 - 1对孤对电子
    const direction = new THREE.Vector3(0, -1, 0.5)
    const lonePair = createLonePairMesh(centerAtom, direction, 1.3)
    moleculeGroup.add(lonePair)
  }
}

// 清理Three.js对象
const disposeGroup = (group: THREE.Group) => {
  group.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.geometry.dispose()
      if (object.material instanceof THREE.Material) {
        object.material.dispose()
      }
    }
  })
}

// 处理窗口大小变化
const handleResize = () => {
  if (!containerRef.value) return

  const width = containerRef.value.clientWidth
  const height = containerRef.value.clientHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()

  renderer.setSize(width, height)
}

// 组件挂载时初始化
onMounted(() => {
  initScene()
  loadMolecule()
  window.addEventListener('resize', handleResize)
})

// 组件卸载时清理
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  cancelAnimationFrame(animationId)
  if (moleculeGroup) {
    disposeGroup(moleculeGroup)
  }
  renderer.dispose()
  controls.dispose()
})

// 监听分子变化
watch(
  () => moleculeStore.currentMolecule,
  () => {
    loadMolecule()
  },
  { deep: true }
)

// 监听孤对电子显示开关
watch(
  () => moleculeStore.showLonePairs,
  () => {
    loadMolecule()
  }
)

// 设置自动旋转
const setAutoRotate = (enabled: boolean) => {
  autoRotateEnabled.value = enabled
  if (controls) {
    controls.autoRotate = enabled
  }
}

// 暴露方法
defineExpose({
  resetView: () => {
    if (moleculeStore.currentMolecule) {
      const distance = calculateCameraDistance(moleculeStore.currentMolecule)
      camera.position.set(distance, distance * 0.5, distance)
      camera.lookAt(0, 0, 0)
      controls.target.set(0, 0, 0)
      controls.update()
    }
  },
  setAutoRotate
})
</script>

<style scoped>
.viewer-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>
