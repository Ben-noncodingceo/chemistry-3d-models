<template>
  <div class="legend-panel">
    <h4>原子颜色图例 (CPK配色)</h4>
    <div class="legend-items">
      <div v-for="element in commonElements" :key="element.symbol" class="legend-item">
        <div class="color-box" :style="{ backgroundColor: element.color }"></div>
        <span class="element-symbol">{{ element.symbol }}</span>
        <span class="element-name">{{ element.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CPK_COLORS } from '../data/colorSchemes'

interface LegendElement {
  symbol: string
  name: string
  color: string
}

// 常见元素
const commonElements: LegendElement[] = [
  { symbol: 'H', name: '氢', color: CPK_COLORS.H },
  { symbol: 'C', name: '碳', color: CPK_COLORS.C },
  { symbol: 'N', name: '氮', color: CPK_COLORS.N },
  { symbol: 'O', name: '氧', color: CPK_COLORS.O },
  { symbol: 'F', name: '氟', color: CPK_COLORS.F },
  { symbol: 'Cl', name: '氯', color: CPK_COLORS.Cl },
  { symbol: 'Br', name: '溴', color: CPK_COLORS.Br },
  { symbol: 'S', name: '硫', color: CPK_COLORS.S },
  { symbol: 'P', name: '磷', color: CPK_COLORS.P },
]
</script>

<style scoped>
.legend-panel {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(10px);
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 200px;
}

.legend-panel h4 {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #ffffff;
  font-weight: 600;
}

.legend-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.color-box {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
}

.element-symbol {
  font-weight: 600;
  font-size: 13px;
  color: #ffffff;
  min-width: 20px;
}

.element-name {
  font-size: 12px;
  color: #b0b0b0;
}

@media (max-width: 768px) {
  .legend-panel {
    bottom: 10px;
    right: 10px;
    left: 10px;
  }

  .legend-items {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
