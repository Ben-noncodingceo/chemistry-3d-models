import type { ElementColor } from '../types/molecule'

// CPK (Corey-Pauling-Koltun) color scheme
export const CPK_COLORS: ElementColor = {
  H: '#FFFFFF',  // 白色 - 氢
  C: '#909090',  // 灰色 - 碳
  N: '#3050F8',  // 蓝色 - 氮
  O: '#FF0D0D',  // 红色 - 氧
  F: '#90E050',  // 浅绿色 - 氟
  Cl: '#1FF01F', // 绿色 - 氯
  Br: '#A62929', // 深红色 - 溴
  S: '#FFFF30',  // 黄色 - 硫
  P: '#FF8000',  // 橙色 - 磷
  I: '#940094',  // 紫色 - 碘
  He: '#D9FFFF', // 青色 - 氦
  Ne: '#D9FFFF', // 青色 - 氖
  Ar: '#80D1E3', // 浅蓝色 - 氩
  B: '#FFB5B5',  // 粉色 - 硼
  Si: '#F0C8A0', // 土黄色 - 硅
}

// 原子半径 (埃米)
export const ATOMIC_RADII: Record<string, number> = {
  H: 0.31,
  C: 0.70,
  N: 0.65,
  O: 0.60,
  F: 0.50,
  Cl: 1.02,
  Br: 1.20,
  S: 1.00,
  P: 1.00,
  I: 1.39,
  He: 0.28,
  Ne: 0.38,
  Ar: 0.71,
  B: 0.84,
  Si: 1.11,
}

// 获取原子颜色
export const getAtomColor = (element: string): string => {
  return CPK_COLORS[element] || '#FF1493' // 默认粉红色
}

// 获取原子半径
export const getAtomRadius = (element: string): number => {
  return ATOMIC_RADII[element] || 0.5
}
