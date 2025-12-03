<template>
  <div class="app-container">
    <!-- 标题栏 -->
    <header class="app-header">
      <div class="header-content">
        <h1 class="app-title">
          <span class="icon">🧪</span>
          分子3D可视化系统
        </h1>
        <p class="app-subtitle">VSEPR理论交互式学习平台</p>
      </div>
    </header>

    <!-- 主内容区 -->
    <div class="main-content">
      <!-- 左侧控制面板 -->
      <aside class="left-panel">
        <MoleculeControls
          @reset-view="handleResetView"
          @toggle-auto-rotate="handleAutoRotate"
        />
      </aside>

      <!-- 中间3D视图 -->
      <main class="viewer-area">
        <Molecule3DViewer ref="viewerRef" />
        <AtomLegend />
      </main>

      <!-- 右侧信息面板 -->
      <aside class="right-panel">
        <MoleculeInfoPanel />
      </aside>
    </div>

    <!-- 移动端提示 -->
    <div class="mobile-hint">
      <el-alert
        title="提示"
        type="info"
        description="为获得最佳体验，建议使用桌面浏览器访问"
        :closable="true"
        show-icon
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Molecule3DViewer from './components/Molecule3DViewer.vue'
import MoleculeControls from './components/MoleculeControls.vue'
import MoleculeInfoPanel from './components/MoleculeInfoPanel.vue'
import AtomLegend from './components/AtomLegend.vue'

const viewerRef = ref<InstanceType<typeof Molecule3DViewer> | null>(null)

// 重置视角
const handleResetView = () => {
  viewerRef.value?.resetView()
}

// 自动旋转
const handleAutoRotate = (enabled: boolean) => {
  // 这个功能可以后续实现
  console.log('Auto rotate:', enabled)
}
</script>

<style scoped>
.app-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
}

.app-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 16px 24px;
  z-index: 100;
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
}

.app-title {
  margin: 0;
  font-size: 28px;
  color: #303133;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
}

.icon {
  font-size: 32px;
}

.app-subtitle {
  margin: 4px 0 0 44px;
  font-size: 14px;
  color: #909399;
  font-weight: 400;
}

.main-content {
  flex: 1;
  display: flex;
  gap: 20px;
  padding: 20px;
  overflow: hidden;
  max-width: 1800px;
  margin: 0 auto;
  width: 100%;
}

.left-panel,
.right-panel {
  flex-shrink: 0;
}

.viewer-area {
  flex: 1;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  background: white;
}

.mobile-hint {
  display: none;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .main-content {
    flex-direction: column;
    gap: 12px;
    padding: 12px;
  }

  .left-panel,
  .right-panel {
    width: 100%;
    max-height: none;
  }

  .viewer-area {
    height: 400px;
    order: -1;
  }

  .mobile-hint {
    display: block;
    padding: 12px;
  }

  .app-title {
    font-size: 20px;
  }

  .icon {
    font-size: 24px;
  }

  .app-subtitle {
    font-size: 12px;
    margin-left: 36px;
  }
}

@media (max-width: 768px) {
  .app-header {
    padding: 12px 16px;
  }

  .app-title {
    font-size: 18px;
  }

  .icon {
    font-size: 20px;
  }

  .app-subtitle {
    margin-left: 28px;
    font-size: 11px;
  }

  .viewer-area {
    height: 300px;
  }
}
</style>
