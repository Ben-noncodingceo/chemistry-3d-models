import type { Molecule } from '../types/molecule'

// 预设分子数据
export const presetMolecules: Molecule[] = [
  {
    id: 1,
    name: '甲烷',
    nameEn: 'Methane',
    formula: 'CH₄',
    vsepr: {
      electronPairs: 4,
      bondingPairs: 4,
      lonePairs: 0,
      geometry: '正四面体',
      bondAngle: 109.5,
      hybridization: 'sp³',
      description: '中心碳原子采用sp³杂化，4个C-H键指向正四面体的四个顶点'
    },
    atoms: [
      { element: 'C', x: 0, y: 0, z: 0 },
      { element: 'H', x: 0.629, y: 0.629, z: 0.629 },
      { element: 'H', x: -0.629, y: -0.629, z: 0.629 },
      { element: 'H', x: -0.629, y: 0.629, z: -0.629 },
      { element: 'H', x: 0.629, y: -0.629, z: -0.629 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'single' },
      { from: 0, to: 2, type: 'single' },
      { from: 0, to: 3, type: 'single' },
      { from: 0, to: 4, type: 'single' },
    ],
    properties: {
      bondLengths: { 'C-H': 1.09 },
      pointGroup: 'Td',
    }
  },
  {
    id: 2,
    name: '氨',
    nameEn: 'Ammonia',
    formula: 'NH₃',
    vsepr: {
      electronPairs: 4,
      bondingPairs: 3,
      lonePairs: 1,
      geometry: '三角锥',
      bondAngle: 107,
      hybridization: 'sp³',
      description: '中心氮原子采用sp³杂化，有1对孤对电子占据四面体的一个顶点，3个N-H键形成三角锥'
    },
    atoms: [
      { element: 'N', x: 0, y: 0, z: 0 },
      { element: 'H', x: 0.94, y: 0, z: 0.38 },
      { element: 'H', x: -0.47, y: 0.81, z: 0.38 },
      { element: 'H', x: -0.47, y: -0.81, z: 0.38 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'single' },
      { from: 0, to: 2, type: 'single' },
      { from: 0, to: 3, type: 'single' },
    ],
    properties: {
      bondLengths: { 'N-H': 1.01 },
      pointGroup: 'C3v',
      dipoleMoment: 1.47,
    }
  },
  {
    id: 3,
    name: '水',
    nameEn: 'Water',
    formula: 'H₂O',
    vsepr: {
      electronPairs: 4,
      bondingPairs: 2,
      lonePairs: 2,
      geometry: 'V形 (弯曲)',
      bondAngle: 104.5,
      hybridization: 'sp³',
      description: '中心氧原子采用sp³杂化，有2对孤对电子，2个O-H键形成V形结构'
    },
    atoms: [
      { element: 'O', x: 0, y: 0, z: 0 },
      { element: 'H', x: 0.76, y: 0.59, z: 0 },
      { element: 'H', x: -0.76, y: 0.59, z: 0 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'single' },
      { from: 0, to: 2, type: 'single' },
    ],
    properties: {
      bondLengths: { 'O-H': 0.96 },
      pointGroup: 'C2v',
      dipoleMoment: 1.85,
    }
  },
  {
    id: 4,
    name: '二氧化碳',
    nameEn: 'Carbon Dioxide',
    formula: 'CO₂',
    vsepr: {
      electronPairs: 2,
      bondingPairs: 2,
      lonePairs: 0,
      geometry: '直线形',
      bondAngle: 180,
      hybridization: 'sp',
      description: '中心碳原子采用sp杂化，2个C=O双键呈180°直线排列'
    },
    atoms: [
      { element: 'C', x: 0, y: 0, z: 0 },
      { element: 'O', x: 1.16, y: 0, z: 0 },
      { element: 'O', x: -1.16, y: 0, z: 0 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'double' },
      { from: 0, to: 2, type: 'double' },
    ],
    properties: {
      bondLengths: { 'C=O': 1.16 },
      pointGroup: 'D∞h',
      dipoleMoment: 0,
    }
  },
]
