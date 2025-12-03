<template>
  <el-card class="info-panel" shadow="hover">
    <template #header>
      <div class="card-header">
        <h3>{{ molecule?.name }} {{ molecule?.formula }}</h3>
        <span class="name-en">{{ molecule?.nameEn }}</span>
      </div>
    </template>

    <div class="info-content">
      <el-divider content-position="left">VSEPR理论分析</el-divider>

      <div class="info-item">
        <label>分子几何构型：</label>
        <span class="value">{{ molecule?.vsepr.geometry }}</span>
      </div>

      <div class="info-item">
        <label>杂化类型：</label>
        <span class="value">{{ molecule?.vsepr.hybridization }}</span>
      </div>

      <div class="info-item">
        <label>键角：</label>
        <span class="value">{{ molecule?.vsepr.bondAngle }}°</span>
      </div>

      <div class="info-item">
        <label>电子对总数：</label>
        <span class="value">{{ molecule?.vsepr.electronPairs }}</span>
      </div>

      <div class="info-item">
        <label>成键电子对：</label>
        <span class="value">{{ molecule?.vsepr.bondingPairs }}</span>
      </div>

      <div class="info-item">
        <label>孤对电子：</label>
        <span class="value highlight" :class="{ 'has-lone-pairs': molecule?.vsepr.lonePairs > 0 }">
          {{ molecule?.vsepr.lonePairs }}
        </span>
      </div>

      <el-divider content-position="left">说明</el-divider>

      <p class="description">{{ molecule?.vsepr.description }}</p>

      <el-divider content-position="left">分子性质</el-divider>

      <div class="info-item">
        <label>点群：</label>
        <span class="value">{{ molecule?.properties.pointGroup || 'N/A' }}</span>
      </div>

      <div v-if="molecule?.properties.dipoleMoment !== undefined" class="info-item">
        <label>偶极矩：</label>
        <span class="value">{{ molecule.properties.dipoleMoment }} D</span>
      </div>

      <div class="info-item">
        <label>键长：</label>
        <div class="bond-lengths">
          <div v-for="(length, bond) in molecule?.properties.bondLengths" :key="bond" class="bond-item">
            <span class="bond-name">{{ bond }}:</span>
            <span class="bond-value">{{ length }} Å</span>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMoleculeStore } from '../stores/moleculeStore'

const moleculeStore = useMoleculeStore()
const molecule = computed(() => moleculeStore.currentMolecule)
</script>

<style scoped>
.info-panel {
  width: 350px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-header h3 {
  margin: 0;
  font-size: 20px;
  color: #303133;
}

.name-en {
  font-size: 14px;
  color: #909399;
  font-style: italic;
}

.info-content {
  font-size: 14px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  line-height: 1.6;
}

.info-item label {
  font-weight: 600;
  color: #606266;
  min-width: 100px;
  flex-shrink: 0;
}

.info-item .value {
  color: #303133;
  font-weight: 500;
}

.value.highlight {
  color: #409eff;
  font-weight: 600;
}

.value.highlight.has-lone-pairs {
  color: #f56c6c;
}

.description {
  color: #606266;
  line-height: 1.8;
  text-align: justify;
  margin: 0;
  padding: 8px 12px;
  background: #f4f4f5;
  border-radius: 4px;
  font-size: 13px;
}

.bond-lengths {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.bond-item {
  display: flex;
  gap: 8px;
}

.bond-name {
  font-weight: 500;
  color: #606266;
}

.bond-value {
  color: #303133;
}

:deep(.el-divider__text) {
  font-weight: 600;
  color: #409eff;
}

:deep(.el-card__header) {
  padding: 16px 20px;
  border-bottom: 2px solid #409eff;
}
</style>
