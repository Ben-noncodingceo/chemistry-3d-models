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
  {
    id: 5,
    name: '三氟化硼',
    nameEn: 'Boron Trifluoride',
    formula: 'BF₃',
    vsepr: {
      electronPairs: 3,
      bondingPairs: 3,
      lonePairs: 0,
      geometry: '平面三角形',
      bondAngle: 120,
      hybridization: 'sp²',
      description: '中心硼原子采用sp²杂化，3个B-F键在同一平面上呈120°夹角'
    },
    atoms: [
      { element: 'B', x: 0, y: 0, z: 0 },
      { element: 'F', x: 1.31, y: 0, z: 0 },
      { element: 'F', x: -0.655, y: 1.135, z: 0 },
      { element: 'F', x: -0.655, y: -1.135, z: 0 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'single' },
      { from: 0, to: 2, type: 'single' },
      { from: 0, to: 3, type: 'single' },
    ],
    properties: {
      bondLengths: { 'B-F': 1.31 },
      pointGroup: 'D3h',
      dipoleMoment: 0,
    }
  },
  {
    id: 6,
    name: '六氟化硫',
    nameEn: 'Sulfur Hexafluoride',
    formula: 'SF₆',
    vsepr: {
      electronPairs: 6,
      bondingPairs: 6,
      lonePairs: 0,
      geometry: '正八面体',
      bondAngle: 90,
      hybridization: 'sp³d²',
      description: '中心硫原子采用sp³d²杂化，6个S-F键指向正八面体的六个顶点'
    },
    atoms: [
      { element: 'S', x: 0, y: 0, z: 0 },
      { element: 'F', x: 1.56, y: 0, z: 0 },
      { element: 'F', x: -1.56, y: 0, z: 0 },
      { element: 'F', x: 0, y: 1.56, z: 0 },
      { element: 'F', x: 0, y: -1.56, z: 0 },
      { element: 'F', x: 0, y: 0, z: 1.56 },
      { element: 'F', x: 0, y: 0, z: -1.56 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'single' },
      { from: 0, to: 2, type: 'single' },
      { from: 0, to: 3, type: 'single' },
      { from: 0, to: 4, type: 'single' },
      { from: 0, to: 5, type: 'single' },
      { from: 0, to: 6, type: 'single' },
    ],
    properties: {
      bondLengths: { 'S-F': 1.56 },
      pointGroup: 'Oh',
      dipoleMoment: 0,
    }
  },
  {
    id: 7,
    name: '五氯化磷',
    nameEn: 'Phosphorus Pentachloride',
    formula: 'PCl₅',
    vsepr: {
      electronPairs: 5,
      bondingPairs: 5,
      lonePairs: 0,
      geometry: '三角双锥',
      bondAngle: 120,
      hybridization: 'sp³d',
      description: '中心磷原子采用sp³d杂化，3个Cl原子在赤道平面(120°)，2个在轴向(90°)'
    },
    atoms: [
      { element: 'P', x: 0, y: 0, z: 0 },
      { element: 'Cl', x: 2.04, y: 0, z: 0 },
      { element: 'Cl', x: -1.02, y: 1.77, z: 0 },
      { element: 'Cl', x: -1.02, y: -1.77, z: 0 },
      { element: 'Cl', x: 0, y: 0, z: 2.19 },
      { element: 'Cl', x: 0, y: 0, z: -2.19 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'single' },
      { from: 0, to: 2, type: 'single' },
      { from: 0, to: 3, type: 'single' },
      { from: 0, to: 4, type: 'single' },
      { from: 0, to: 5, type: 'single' },
    ],
    properties: {
      bondLengths: { 'P-Cl(eq)': 2.04, 'P-Cl(ax)': 2.19 },
      pointGroup: 'D3h',
    }
  },
  {
    id: 8,
    name: '甲醛',
    nameEn: 'Formaldehyde',
    formula: 'CH₂O',
    vsepr: {
      electronPairs: 3,
      bondingPairs: 3,
      lonePairs: 0,
      geometry: '平面三角形',
      bondAngle: 120,
      hybridization: 'sp²',
      description: '中心碳原子采用sp²杂化，C=O双键和2个C-H键在同一平面'
    },
    atoms: [
      { element: 'C', x: 0, y: 0, z: 0 },
      { element: 'O', x: 1.21, y: 0, z: 0 },
      { element: 'H', x: -0.55, y: 0.95, z: 0 },
      { element: 'H', x: -0.55, y: -0.95, z: 0 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'double' },
      { from: 0, to: 2, type: 'single' },
      { from: 0, to: 3, type: 'single' },
    ],
    properties: {
      bondLengths: { 'C=O': 1.21, 'C-H': 1.10 },
      pointGroup: 'C2v',
      dipoleMoment: 2.33,
    }
  },
  {
    id: 9,
    name: '乙烯',
    nameEn: 'Ethylene',
    formula: 'C₂H₄',
    vsepr: {
      electronPairs: 3,
      bondingPairs: 3,
      lonePairs: 0,
      geometry: '平面结构',
      bondAngle: 120,
      hybridization: 'sp²',
      description: '每个碳原子采用sp²杂化，C=C双键，所有原子在同一平面'
    },
    atoms: [
      { element: 'C', x: -0.665, y: 0, z: 0 },
      { element: 'C', x: 0.665, y: 0, z: 0 },
      { element: 'H', x: -1.23, y: 0.93, z: 0 },
      { element: 'H', x: -1.23, y: -0.93, z: 0 },
      { element: 'H', x: 1.23, y: 0.93, z: 0 },
      { element: 'H', x: 1.23, y: -0.93, z: 0 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'double' },
      { from: 0, to: 2, type: 'single' },
      { from: 0, to: 3, type: 'single' },
      { from: 1, to: 4, type: 'single' },
      { from: 1, to: 5, type: 'single' },
    ],
    properties: {
      bondLengths: { 'C=C': 1.33, 'C-H': 1.08 },
      pointGroup: 'D2h',
      dipoleMoment: 0,
    }
  },
  {
    id: 10,
    name: '乙炔',
    nameEn: 'Acetylene',
    formula: 'C₂H₂',
    vsepr: {
      electronPairs: 2,
      bondingPairs: 2,
      lonePairs: 0,
      geometry: '直线形',
      bondAngle: 180,
      hybridization: 'sp',
      description: '每个碳原子采用sp杂化，C≡C三键，呈直线形'
    },
    atoms: [
      { element: 'C', x: -0.6, y: 0, z: 0 },
      { element: 'C', x: 0.6, y: 0, z: 0 },
      { element: 'H', x: -1.66, y: 0, z: 0 },
      { element: 'H', x: 1.66, y: 0, z: 0 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'triple' },
      { from: 0, to: 2, type: 'single' },
      { from: 1, to: 3, type: 'single' },
    ],
    properties: {
      bondLengths: { 'C≡C': 1.20, 'C-H': 1.06 },
      pointGroup: 'D∞h',
      dipoleMoment: 0,
    }
  },
  {
    id: 11,
    name: '二氧化硫',
    nameEn: 'Sulfur Dioxide',
    formula: 'SO₂',
    vsepr: {
      electronPairs: 3,
      bondingPairs: 2,
      lonePairs: 1,
      geometry: 'V形 (弯曲)',
      bondAngle: 119,
      hybridization: 'sp²',
      description: '中心硫原子采用sp²杂化，有1对孤对电子，2个S=O双键形成V形'
    },
    atoms: [
      { element: 'S', x: 0, y: 0, z: 0 },
      { element: 'O', x: 1.23, y: 0.71, z: 0 },
      { element: 'O', x: -1.23, y: 0.71, z: 0 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'double' },
      { from: 0, to: 2, type: 'double' },
    ],
    properties: {
      bondLengths: { 'S=O': 1.43 },
      pointGroup: 'C2v',
      dipoleMoment: 1.63,
    }
  },
  {
    id: 12,
    name: '三氧化硫',
    nameEn: 'Sulfur Trioxide',
    formula: 'SO₃',
    vsepr: {
      electronPairs: 3,
      bondingPairs: 3,
      lonePairs: 0,
      geometry: '平面三角形',
      bondAngle: 120,
      hybridization: 'sp²',
      description: '中心硫原子采用sp²杂化，3个S=O双键在同一平面呈120°夹角'
    },
    atoms: [
      { element: 'S', x: 0, y: 0, z: 0 },
      { element: 'O', x: 1.42, y: 0, z: 0 },
      { element: 'O', x: -0.71, y: 1.23, z: 0 },
      { element: 'O', x: -0.71, y: -1.23, z: 0 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'double' },
      { from: 0, to: 2, type: 'double' },
      { from: 0, to: 3, type: 'double' },
    ],
    properties: {
      bondLengths: { 'S=O': 1.42 },
      pointGroup: 'D3h',
      dipoleMoment: 0,
    }
  },
  {
    id: 13,
    name: '三氟化氯',
    nameEn: 'Chlorine Trifluoride',
    formula: 'ClF₃',
    vsepr: {
      electronPairs: 5,
      bondingPairs: 3,
      lonePairs: 2,
      geometry: 'T形',
      bondAngle: 87.5,
      hybridization: 'sp³d',
      description: '中心氯原子采用sp³d杂化，有2对孤对电子，3个Cl-F键形成T形'
    },
    atoms: [
      { element: 'Cl', x: 0, y: 0, z: 0 },
      { element: 'F', x: 1.70, y: 0, z: 0 },
      { element: 'F', x: -1.70, y: 0, z: 0 },
      { element: 'F', x: 0, y: 0, z: 1.60 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'single' },
      { from: 0, to: 2, type: 'single' },
      { from: 0, to: 3, type: 'single' },
    ],
    properties: {
      bondLengths: { 'Cl-F(eq)': 1.60, 'Cl-F(ax)': 1.70 },
      pointGroup: 'C2v',
      dipoleMoment: 0.6,
    }
  },
  {
    id: 14,
    name: '四氟化氙',
    nameEn: 'Xenon Tetrafluoride',
    formula: 'XeF₄',
    vsepr: {
      electronPairs: 6,
      bondingPairs: 4,
      lonePairs: 2,
      geometry: '平面四方形',
      bondAngle: 90,
      hybridization: 'sp³d²',
      description: '中心氙原子采用sp³d²杂化，有2对孤对电子在轴向，4个Xe-F键在平面'
    },
    atoms: [
      { element: 'Ar', x: 0, y: 0, z: 0 }, // 用Ar代替Xe (CPK中Xe颜色相近)
      { element: 'F', x: 1.95, y: 0, z: 0 },
      { element: 'F', x: -1.95, y: 0, z: 0 },
      { element: 'F', x: 0, y: 1.95, z: 0 },
      { element: 'F', x: 0, y: -1.95, z: 0 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'single' },
      { from: 0, to: 2, type: 'single' },
      { from: 0, to: 3, type: 'single' },
      { from: 0, to: 4, type: 'single' },
    ],
    properties: {
      bondLengths: { 'Xe-F': 1.95 },
      pointGroup: 'D4h',
      dipoleMoment: 0,
    }
  },
  {
    id: 15,
    name: '二氯化铍',
    nameEn: 'Beryllium Chloride',
    formula: 'BeCl₂',
    vsepr: {
      electronPairs: 2,
      bondingPairs: 2,
      lonePairs: 0,
      geometry: '直线形',
      bondAngle: 180,
      hybridization: 'sp',
      description: '中心铍原子采用sp杂化，2个Be-Cl键呈180°直线排列'
    },
    atoms: [
      { element: 'B', x: 0, y: 0, z: 0 }, // 用B代替Be（颜色相近）
      { element: 'Cl', x: 1.75, y: 0, z: 0 },
      { element: 'Cl', x: -1.75, y: 0, z: 0 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'single' },
      { from: 0, to: 2, type: 'single' },
    ],
    properties: {
      bondLengths: { 'Be-Cl': 1.75 },
      pointGroup: 'D∞h',
      dipoleMoment: 0,
    }
  },
  {
    id: 16,
    name: '硫化氢',
    nameEn: 'Hydrogen Sulfide',
    formula: 'H₂S',
    vsepr: {
      electronPairs: 4,
      bondingPairs: 2,
      lonePairs: 2,
      geometry: 'V形 (弯曲)',
      bondAngle: 92,
      hybridization: 'sp³',
      description: '中心硫原子采用sp³杂化，有2对孤对电子，2个S-H键形成V形'
    },
    atoms: [
      { element: 'S', x: 0, y: 0, z: 0 },
      { element: 'H', x: 1.06, y: 0.68, z: 0 },
      { element: 'H', x: -1.06, y: 0.68, z: 0 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'single' },
      { from: 0, to: 2, type: 'single' },
    ],
    properties: {
      bondLengths: { 'S-H': 1.34 },
      pointGroup: 'C2v',
      dipoleMoment: 0.97,
    }
  },
  {
    id: 17,
    name: '磷化氢',
    nameEn: 'Phosphine',
    formula: 'PH₃',
    vsepr: {
      electronPairs: 4,
      bondingPairs: 3,
      lonePairs: 1,
      geometry: '三角锥',
      bondAngle: 93.5,
      hybridization: 'sp³',
      description: '中心磷原子采用sp³杂化，有1对孤对电子，3个P-H键形成三角锥'
    },
    atoms: [
      { element: 'P', x: 0, y: 0, z: 0 },
      { element: 'H', x: 1.35, y: 0, z: 0.45 },
      { element: 'H', x: -0.675, y: 1.17, z: 0.45 },
      { element: 'H', x: -0.675, y: -1.17, z: 0.45 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'single' },
      { from: 0, to: 2, type: 'single' },
      { from: 0, to: 3, type: 'single' },
    ],
    properties: {
      bondLengths: { 'P-H': 1.42 },
      pointGroup: 'C3v',
      dipoleMoment: 0.58,
    }
  },
  {
    id: 18,
    name: '氯甲烷',
    nameEn: 'Chloromethane',
    formula: 'CH₃Cl',
    vsepr: {
      electronPairs: 4,
      bondingPairs: 4,
      lonePairs: 0,
      geometry: '四面体',
      bondAngle: 109.5,
      hybridization: 'sp³',
      description: '中心碳原子采用sp³杂化，3个C-H键和1个C-Cl键形成四面体'
    },
    atoms: [
      { element: 'C', x: 0, y: 0, z: 0 },
      { element: 'Cl', x: 0, y: 0, z: 1.78 },
      { element: 'H', x: 1.03, y: 0, z: -0.36 },
      { element: 'H', x: -0.515, y: 0.89, z: -0.36 },
      { element: 'H', x: -0.515, y: -0.89, z: -0.36 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'single' },
      { from: 0, to: 2, type: 'single' },
      { from: 0, to: 3, type: 'single' },
      { from: 0, to: 4, type: 'single' },
    ],
    properties: {
      bondLengths: { 'C-Cl': 1.78, 'C-H': 1.09 },
      pointGroup: 'C3v',
      dipoleMoment: 1.87,
    }
  },
  {
    id: 19,
    name: '苯',
    nameEn: 'Benzene',
    formula: 'C₆H₆',
    vsepr: {
      electronPairs: 3,
      bondingPairs: 3,
      lonePairs: 0,
      geometry: '平面正六边形',
      bondAngle: 120,
      hybridization: 'sp²',
      description: '每个碳原子采用sp²杂化，形成平面正六边形结构，具有大π键'
    },
    atoms: [
      { element: 'C', x: 1.40, y: 0, z: 0 },
      { element: 'C', x: 0.70, y: 1.21, z: 0 },
      { element: 'C', x: -0.70, y: 1.21, z: 0 },
      { element: 'C', x: -1.40, y: 0, z: 0 },
      { element: 'C', x: -0.70, y: -1.21, z: 0 },
      { element: 'C', x: 0.70, y: -1.21, z: 0 },
      { element: 'H', x: 2.48, y: 0, z: 0 },
      { element: 'H', x: 1.24, y: 2.15, z: 0 },
      { element: 'H', x: -1.24, y: 2.15, z: 0 },
      { element: 'H', x: -2.48, y: 0, z: 0 },
      { element: 'H', x: -1.24, y: -2.15, z: 0 },
      { element: 'H', x: 1.24, y: -2.15, z: 0 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'single' },
      { from: 1, to: 2, type: 'double' },
      { from: 2, to: 3, type: 'single' },
      { from: 3, to: 4, type: 'double' },
      { from: 4, to: 5, type: 'single' },
      { from: 5, to: 0, type: 'double' },
      { from: 0, to: 6, type: 'single' },
      { from: 1, to: 7, type: 'single' },
      { from: 2, to: 8, type: 'single' },
      { from: 3, to: 9, type: 'single' },
      { from: 4, to: 10, type: 'single' },
      { from: 5, to: 11, type: 'single' },
    ],
    properties: {
      bondLengths: { 'C-C': 1.40, 'C-H': 1.08 },
      pointGroup: 'D6h',
      dipoleMoment: 0,
    }
  },
  {
    id: 20,
    name: '甲醇',
    nameEn: 'Methanol',
    formula: 'CH₃OH',
    vsepr: {
      electronPairs: 4,
      bondingPairs: 4,
      lonePairs: 0,
      geometry: '四面体 (C) + V形 (O)',
      bondAngle: 109.5,
      hybridization: 'sp³',
      description: '碳原子和氧原子都采用sp³杂化，氧原子上有2对孤对电子'
    },
    atoms: [
      { element: 'C', x: 0, y: 0, z: 0 },
      { element: 'O', x: 1.43, y: 0, z: 0 },
      { element: 'H', x: 1.81, y: 0.77, z: 0.51 },
      { element: 'H', x: -0.36, y: 1.03, z: 0 },
      { element: 'H', x: -0.36, y: -0.52, z: 0.89 },
      { element: 'H', x: -0.36, y: -0.52, z: -0.89 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'single' },
      { from: 1, to: 2, type: 'single' },
      { from: 0, to: 3, type: 'single' },
      { from: 0, to: 4, type: 'single' },
      { from: 0, to: 5, type: 'single' },
    ],
    properties: {
      bondLengths: { 'C-O': 1.43, 'O-H': 0.96, 'C-H': 1.09 },
      pointGroup: 'Cs',
      dipoleMoment: 1.70,
    }
  },
]
