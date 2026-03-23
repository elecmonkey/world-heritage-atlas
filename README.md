# 世界文化遗产可视化系统

基于 `React + TypeScript + Vite + TailwindCSS` 的交互式前端原型，用于展示世界文化遗产的地图分布、时间趋势、类别结构和国家对比。

## 技术栈

- React 19
- TypeScript
- Vite
- TailwindCSS 4
- Zustand
- Leaflet / React Leaflet
- ECharts
- Radix UI

## 当前功能

- 世界地图点位展示
- 点位聚合与缩放展开
- 按年份、类别、区域、国家、关键词筛选
- 时间趋势图
- 类别占比图
- 国家排行图
- 区域结构图
- 点击国家排行参与联动筛选
- 点击遗产点位打开详情抽屉

## 数据

运行时从 `public/data/sites.json` 加载世界文化遗产数据。

相关文件：

- `public/data/sites.json`
- `public/data/country-stats.json`
- `public/data/region-stats.json`

## 开发

安装依赖：

```bash
pnpm install
```

启动开发环境：

```bash
pnpm dev
```

生产构建：

```bash
pnpm build
```

类型检查：

```bash
pnpm type-check
```

代码检查：

```bash
pnpm lint
```

## 目录

```text
src/
  app/store
  features/dashboard
  lib
  index.css
  App.tsx
  main.tsx

public/
  data/
```
