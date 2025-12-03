export interface Atom {
  element: string
  x: number
  y: number
  z: number
}

export interface Bond {
  from: number
  to: number
  type: 'single' | 'double' | 'triple'
}

export interface VSEPRInfo {
  electronPairs: number
  bondingPairs: number
  lonePairs: number
  geometry: string
  bondAngle: number
  hybridization: string
  description: string
}

export interface MoleculeProperties {
  bondLengths: Record<string, number>
  pointGroup?: string
  dipoleMoment?: number
}

export interface Molecule {
  id: number
  name: string
  nameEn: string
  formula: string
  vsepr: VSEPRInfo
  atoms: Atom[]
  bonds: Bond[]
  properties: MoleculeProperties
}

export type ElementColor = Record<string, string>
