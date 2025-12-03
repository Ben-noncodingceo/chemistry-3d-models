import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Molecule } from '../types/molecule'
import { presetMolecules } from '../data/presetMolecules'

export const useMoleculeStore = defineStore('molecule', () => {
  // State
  const currentMolecule = ref<Molecule | null>(presetMolecules[0])
  const molecules = ref<Molecule[]>(presetMolecules)
  const showLonePairs = ref(true)
  const showBondAngles = ref(false)
  const renderMode = ref<'ball-and-stick' | 'space-filling' | 'wireframe'>('ball-and-stick')

  // Getters
  const currentMoleculeId = computed(() => currentMolecule.value?.id ?? null)
  const currentMoleculeName = computed(() => currentMolecule.value?.name ?? '')
  const hasLonePairs = computed(() => (currentMolecule.value?.vsepr.lonePairs ?? 0) > 0)

  // Actions
  const setCurrentMolecule = (moleculeId: number) => {
    const molecule = molecules.value.find(m => m.id === moleculeId)
    if (molecule) {
      currentMolecule.value = molecule
    }
  }

  const toggleLonePairs = () => {
    showLonePairs.value = !showLonePairs.value
  }

  const toggleBondAngles = () => {
    showBondAngles.value = !showBondAngles.value
  }

  const setRenderMode = (mode: 'ball-and-stick' | 'space-filling' | 'wireframe') => {
    renderMode.value = mode
  }

  return {
    // State
    currentMolecule,
    molecules,
    showLonePairs,
    showBondAngles,
    renderMode,
    // Getters
    currentMoleculeId,
    currentMoleculeName,
    hasLonePairs,
    // Actions
    setCurrentMolecule,
    toggleLonePairs,
    toggleBondAngles,
    setRenderMode,
  }
})
