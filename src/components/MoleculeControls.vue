<template>
  <el-card class="controls-panel" shadow="hover">
    <template #header>
      <h3>控制面板</h3>
    </template>

    <div class="controls-content">
      <!-- 分子选择 -->
      <div class="control-section">
        <label class="section-label">选择分子</label>
        <el-select
          v-model="currentMoleculeId"
          placeholder="请选择分子"
          @change="handleMoleculeChange"
          class="molecule-select"
        >
          <el-option
            v-for="mol in moleculeStore.molecules"
            :key="mol.id"
            :label="`${mol.name} (${mol.formula})`"
            :value="mol.id"
          >
            <span class="option-label">{{ mol.name }}</span>
            <span class="option-formula">{{ mol.formula }}</span>
          </el-option>
        </el-select>
      </div>

      <el-divider />

      <!-- 显示选项 -->
      <div class="control-section">
        <label class="section-label">显示选项</label>

        <div class="switch-group">
          <el-switch
            v-model="showLonePairs"
            :disabled="!moleculeStore.hasLonePairs"
            @change="moleculeStore.toggleLonePairs"
            active-text="显示孤对电子"
            class="control-switch"
          />

          <el-switch
            v-model="showBondAngles"
            @change="moleculeStore.toggleBondAngles"
            active-text="显示键角"
            class="control-switch"
          />
        </div>
      </div>

      <el-divider />

      <!-- 渲染模式 -->
      <div class="control-section">
        <label class="section-label">渲染模式</label>
        <el-radio-group v-model="renderMode" @change="handleRenderModeChange">
          <el-radio value="ball-and-stick">球棍模型</el-radio>
          <el-radio value="space-filling">空间填充</el-radio>
          <el-radio value="wireframe">线框模型</el-radio>
        </el-radio-group>
      </div>

      <el-divider />

      <!-- 操作按钮 -->
      <div class="control-section">
        <label class="section-label">视图操作</label>
        <div class="button-group">
          <el-button type="primary" @click="handleResetView" class="control-button">
            重置视角
          </el-button>
          <el-button @click="handleAutoRotate" class="control-button">
            {{ autoRotate ? '停止旋转' : '自动旋转' }}
          </el-button>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMoleculeStore } from '../stores/moleculeStore'

const moleculeStore = useMoleculeStore()

// 状态
const currentMoleculeId = ref(moleculeStore.currentMoleculeId)
const showLonePairs = ref(moleculeStore.showLonePairs)
const showBondAngles = ref(moleculeStore.showBondAngles)
const renderMode = ref(moleculeStore.renderMode)
const autoRotate = ref(false)

// 定义 emits
const emit = defineEmits<{
  resetView: []
  toggleAutoRotate: [value: boolean]
}>()

// 处理分子变化
const handleMoleculeChange = (id: number) => {
  moleculeStore.setCurrentMolecule(id)
  currentMoleculeId.value = id
}

// 处理渲染模式变化
const handleRenderModeChange = (mode: 'ball-and-stick' | 'space-filling' | 'wireframe') => {
  moleculeStore.setRenderMode(mode)
}

// 重置视角
const handleResetView = () => {
  emit('resetView')
}

// 自动旋转
const handleAutoRotate = () => {
  autoRotate.value = !autoRotate.value
  emit('toggleAutoRotate', autoRotate.value)
}
</script>

<style scoped>
.controls-panel {
  width: 300px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.controls-panel h3 {
  margin: 0;
  font-size: 18px;
  color: #ffffff;
}

.controls-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.control-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.section-label {
  font-weight: 600;
  color: #b0b0b0;
  font-size: 14px;
  margin-bottom: 4px;
}

.molecule-select {
  width: 100%;
}

.option-label {
  font-weight: 500;
  margin-right: 8px;
}

.option-formula {
  color: #909399;
  font-size: 13px;
}

.switch-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.control-switch {
  width: 100%;
}

:deep(.el-switch__label) {
  color: #b0b0b0;
  font-weight: 500;
}

:deep(.el-radio) {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

:deep(.el-radio__label) {
  color: #e0e0e0;
}

:deep(.el-radio__input.is-checked .el-radio__inner) {
  background-color: #409eff;
  border-color: #409eff;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.control-button {
  width: 100%;
}

:deep(.el-card__header) {
  padding: 16px 20px;
  border-bottom: 2px solid #409eff;
  background: rgba(30, 30, 30, 0.8);
}

:deep(.el-card__body) {
  background: rgba(20, 20, 20, 0.6);
  color: #e0e0e0;
}

:deep(.el-divider) {
  margin: 16px 0;
  border-top-color: rgba(255, 255, 255, 0.1);
}

:deep(.el-select) {
  --el-select-input-color: #e0e0e0;
  --el-select-input-focus-border-color: #409eff;
  --el-fill-color-blank: rgba(40, 40, 40, 0.9);
}

:deep(.el-input__wrapper) {
  background-color: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: none;
}

:deep(.el-input__inner) {
  color: #e0e0e0;
}

:deep(.el-button) {
  border-color: rgba(255, 255, 255, 0.2);
}

:deep(.el-button--default) {
  background-color: rgba(60, 60, 60, 0.8);
  color: #e0e0e0;
}

:deep(.el-button--default:hover) {
  background-color: rgba(80, 80, 80, 0.9);
  border-color: rgba(255, 255, 255, 0.3);
}
</style>
