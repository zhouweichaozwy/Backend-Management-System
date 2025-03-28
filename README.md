# 后台管理系统（Backend-Management-System）
该项目是基于 Vue3 的 B/S 架构后台管理系统，包含商品管理、分类管理、用户权限控制等功能模块。项目采用模块化开发模式，通过封装网络请求、全局状态管理、动态路由配置等技术方案，实现前后端分离开发。系统支持用户登录鉴权、页面权限动态校验、数据可视化操作等功能，提升后台管理效率。
## ⚙️ 项目技术栈
- 前端框架： Vue3
- 路由管理：Vue Router4
- 状态管理： Pinia 
- UI组件库：Element Plus 
- HTTP请求： Axios    
- CSS预处理器： Sass
- 构建工具：vite
## 🚀 安装与运行
### 📋 环境要求
- Node.js (推荐v14.0.0以上)
- npm 或 yarn
### 📥 安装步骤
#### 克隆项目
```
git clone https://github.com/zhouweichaozwy/Backend-Management-System.git
```
#### 进入文件夹目录
```
cd Backend-Management-System
```
#### 安装依赖：

```
yarn
```

#### 启动服务

```
yarn dev
```
### 📦 构建生产版本
```
yarn build
 或
npm run build
```
## ✨ 项目功能
### 🔍 主要功能
####用户登录认证
- 表单验证（用户名3~12字符，密码6~24字符）
- Token 管理（登录成功后存储 token，未登录自动跳转至登录页）
- 基于路由守卫的权限控制（白名单机制）
#### 后台管理模块
- 分类管理：商品分类的浏览与管理（对应 /category 路由）
- 商品管理：商品信息的查看与维护（对应 /goods 路由）
- 个人中心：用户设置与信息管理（对应 /setting 路由）
#### 页面布局与导航
- 响应式布局（Header、Aside 组件支持多设备适配）
- 侧边栏导航与路由跳转（通过 Vue Router 实现多级路由嵌套）
#### 全局状态管理
- 使用 Pinia 管理用户登录状态（Token 持久化存储到 localStorage）
- 统一的网络请求封装（自动携带 Token，全局加载状态提示）
### 🌟 特色功能
#### 请求拦截与响应处理
- 自动添加 JWT 请求头
- 全局加载动画（ElLoading）与错误通知（ElNotification）
- 接口错误自动跳转登录（如 Token 失效时跳转 /login）
#### 数据持久化
- 使用 pinia-plugin-persist 实现 Token 的本地存储
- 页面刷新后自动恢复登录状态
#### Element Plus 深度集成

- 表单验证、消息通知、加载状态等组件化交互
- 中文语言包适配（通过 el-config-provider 配置）
#### 样式与布局优化
- 使用 Sass 编写样式（支持变量、嵌套等高级特性）
- 登录页背景图全屏适配与表单居中布局
#### 工程化实践
- 环境配置分离（config.js 管理 API 基础路径）
- 模块化代码组织（路由、API、组件、工具函数分层清晰）
## 📁 项目结构
├── public/                          // 公共资源目录
├── src/                             // 源代码目录
│   ├── api/                         // API 接口相关
│   ├── assets/                      // 静态资源目录
│   │    └── images/                 // 图片资源
│   ├── components/                  // 公共组件
│   ├── pages/                       // 页面组件
│   ├── router/                      // 路由配置
│   ├── stores/                      // 状态管理（Pinia）
│   ├── utils/                       // 工具函数目录
│   │    ├── notification.js         // 消息通知封装
│   │    └── request.js              // Axios 请求封装
│   ├── App.vue                      // 根组件
│   ├── config.js                    // 项目配置文件
│   ├── main.js                      // 入口文件
│   └── style.css                    // 全局样式文件
├── .gitignore                       // Git 忽略文件
├── index.html                       // 主 HTML 文件
├── package.json                     // 项目配置文件
├── package-lock.json                // 锁定依赖文件（npm）
├── README.md                        // 项目说明文档
├── vite.config.js                   // Vite 配置文件
├── yarn                             // Yarn 执行文件
└── yarn.lock                        // 锁定依赖文件（yarn）
