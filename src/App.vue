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
  viewerRef.value?.setAutoRotate(enabled)
}
</script>

<style scoped>
.app-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #000000;
  overflow: hidden;
}

.app-header {
  background: rgba(20, 20, 20, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 12px rgba(255, 255, 255, 0.05);
  padding: 12px 20px;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
}

.app-title {
  margin: 0;
  font-size: 24px;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.icon {
  font-size: 28px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.app-subtitle {
  margin: 2px 0 0 38px;
  font-size: 13px;
  color: #aaaaaa;
  font-weight: 400;
}

.main-content {
  flex: 1;
  display: flex;
  gap: 16px;
  padding: 16px;
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
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.05);
  background: #0a0a0a;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-hint {
  display: none;
}

/* 平板优化 */
@media (max-width: 1200px) {
  .main-content {
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }

  .left-panel,
  .right-panel {
    width: 100%;
    max-height: none;
  }

  .viewer-area {
    height: 50vh;
    min-height: 350px;
    order: -1;
  }

  .app-header {
    padding: 10px 16px;
  }

  .app-title {
    font-size: 20px;
  }

  .icon {
    font-size: 24px;
  }

  .app-subtitle {
    font-size: 12px;
    margin-left: 34px;
  }
}

/* 手机优化 */
@media (max-width: 768px) {
  .app-header {
    padding: 8px 12px;
  }

  .app-title {
    font-size: 18px;
  }

  .icon {
    font-size: 22px;
  }

  .app-subtitle {
    margin-left: 30px;
    font-size: 11px;
  }

  .main-content {
    padding: 8px;
    gap: 8px;
  }

  .viewer-area {
    height: 45vh;
    min-height: 300px;
    border-radius: 6px;
  }

  .mobile-hint {
    display: none; /* 隐藏提示，因为已优化移动端 */
  }
}

/* 小屏手机优化 */
@media (max-width: 480px) {
  .app-header {
    padding: 6px 10px;
  }

  .app-title {
    font-size: 16px;
    gap: 8px;
  }

  .icon {
    font-size: 20px;
  }

  .app-subtitle {
    margin-left: 28px;
    font-size: 10px;
  }

  .main-content {
    padding: 6px;
    gap: 6px;
  }

  .viewer-area {
    height: 40vh;
    min-height: 250px;
  }
}
</style>
