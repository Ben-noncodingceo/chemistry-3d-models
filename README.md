# 🧪 分子3D可视化系统

基于 Vue 3 + Three.js 的分子3D可视化和VSEPR理论交互式学习平台

## ✨ 功能特性

- 🔬 **3D分子可视化**: 使用 Three.js 渲染逼真的分子模型
- 🎨 **CPK配色方案**: 标准的原子颜色显示
- 📐 **VSEPR理论可视化**: 显示孤对电子、键角、分子几何构型
- 🎮 **交互式操作**: 支持旋转、缩放、重置视角
- 📱 **响应式设计**: 支持桌面和移动端访问
- 🧬 **预设分子**: 包含 CH₄、NH₃、H₂O、CO₂ 等常见分子

## 🚀 技术栈

- **前端框架**: Vue 3 + Composition API + TypeScript
- **3D渲染**: Three.js + OrbitControls
- **UI组件**: Element Plus
- **状态管理**: Pinia
- **构建工具**: Vite
- **部署**: GitHub Pages

## 📦 安装与运行

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 🌐 在线演示

访问 GitHub Pages 部署的在线版本：
[https://ben-noncodingceo.github.io/chemistry-3d-models/](https://ben-noncodingceo.github.io/chemistry-3d-models/)

## 📁 项目结构

```
molecule-3d-viewer/
├── src/
│   ├── components/          # Vue组件
│   │   ├── Molecule3DViewer.vue    # 3D渲染主组件
│   │   ├── MoleculeControls.vue    # 控制面板
│   │   ├── MoleculeInfoPanel.vue   # 分子信息面板
│   │   └── AtomLegend.vue          # 原子图例
│   ├── stores/              # Pinia状态管理
│   │   └── moleculeStore.ts
│   ├── utils/               # 工具函数
│   │   └── threeHelpers.ts         # Three.js辅助函数
│   ├── data/                # 数据文件
│   │   ├── presetMolecules.ts      # 预设分子数据
│   │   └── colorSchemes.ts         # CPK颜色方案
│   ├── types/               # TypeScript类型定义
│   │   └── molecule.ts
│   ├── App.vue             # 主应用组件
│   └── main.ts             # 应用入口
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions自动部署
└── vite.config.ts          # Vite配置
```

## 🎯 VSEPR理论支持

系统支持完整的VSEPR理论可视化：

- ✅ 电子对几何构型
- ✅ 分子几何构型
- ✅ 孤对电子可视化
- ✅ 键角显示
- ✅ 杂化类型
- ✅ 分子对称性（点群）

## 🔮 预设分子列表

1. **甲烷 (CH₄)** - 正四面体, sp³杂化
2. **氨 (NH₃)** - 三角锥, sp³杂化, 1对孤对电子
3. **水 (H₂O)** - V形, sp³杂化, 2对孤对电子
4. **二氧化碳 (CO₂)** - 直线形, sp杂化

## 🎨 原子颜色 (CPK配色)

- H (氢) - 白色
- C (碳) - 灰色
- N (氮) - 蓝色
- O (氧) - 红色
- F (氟) - 浅绿色
- Cl (氯) - 绿色
- S (硫) - 黄色
- P (磷) - 橙色

## 🛠️ 开发说明

### 添加新分子

在 `src/data/presetMolecules.ts` 中添加新的分子数据：

```typescript
{
  id: 5,
  name: '分子名称',
  nameEn: 'Molecule Name',
  formula: 'Formula',
  vsepr: {
    electronPairs: 4,
    bondingPairs: 4,
    lonePairs: 0,
    geometry: '几何构型',
    bondAngle: 109.5,
    hybridization: 'sp³',
    description: '描述信息'
  },
  atoms: [
    { element: 'C', x: 0, y: 0, z: 0 },
    // ... 更多原子
  ],
  bonds: [
    { from: 0, to: 1, type: 'single' },
    // ... 更多键
  ],
  properties: {
    bondLengths: { 'C-H': 1.09 },
    pointGroup: 'Td'
  }
}
```

## 📝 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

如有问题或建议，请通过 GitHub Issues 联系。
