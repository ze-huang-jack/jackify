# Jackify 🚀

一个基于 **Vite + React + TypeScript** 构建的高性能个人作品集与技术博客项目。
本项目采用了现代化的前端架构，结合 **Tailwind CSS** 实现响应式设计，旨在展示个人项目、技术栈以及提供极速的用户体验。

## ✨ 技术栈 (Tech Stack)

| 类别 | 技术 | 说明 |
| :--- | :--- | :--- |
| **Core** | [React 18](https://react.dev/) | 用于构建用户界面的 JavaScript 库 |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | 强类型 JavaScript，提供卓越的开发体验和代码安全性 |
| **Build Tool** | [Vite](https://vitejs.dev/) | 下一代前端构建工具，极速冷启动和热更新 |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | 实用优先的 CSS 框架，快速构建现代界面 |
| **Icons** | [Lucide React](https://lucide.dev/) | 美观、一致的图标库 |
| **Linting** | ESLint | 代码规范检查 |

## 📂 项目目录结构

项目遵循清晰的 **Separation of Concerns (关注点分离)** 原则：

```text
jackify/
├── public/                 # 静态资源 (不经过打包处理)
├── src/
│   ├── assets/             # 静态资源 (图片、全局样式、字体)
│   ├── components/         # 通用 UI 组件 (Button, Navbar, Hero 等)
│   ├── data/               # 静态数据文件 (metadata.json, config)
│   ├── hooks/              # 自定义 React Hooks (useTheme, etc.)
│   ├── pages/              # 页面级组件 (路由页面: Home, About, Projects)
│   ├── types/              # TypeScript 类型定义与接口
│   ├── utils/              # 工具函数 (纯逻辑，无副作用)
│   ├── App.tsx             # 根组件 (布局与路由配置)
│   └── main.tsx            # 应用入口文件 (挂载 React DOM)
├── index.html              # HTML 模板 (Vite 入口)
├── package.json            # 项目依赖与脚本
├── tsconfig.json           # TypeScript 配置
└── vite.config.ts          # Vite 打包配置