---
order: 99
---

# 贡献指南

欢迎，非常感谢你一起建设 JXUT Wiki 💙🕊️，执行贡献操作之前请阅读此文档！

## 文档规范

- 命名规则：文档文件名均为英文小写，单词之间用连字符 `-` 连接，如 `hello-jxut-wiki`。
- 文件结构：文档文件存放在 `docs` 的子目录下，每个子目录都应具有根文档 `index.md` ，根文档的 `title` 属性将为该目录提供对应中文目录名。
- 标题：文档都应具有且只有一个一级标题，使用 `#` 标记，并在 frontmatter 使用 `title` 属性指定中文标题。

## 环境搭建

### 安装开发环境

在开始项目开发之前，需要确保本地开发环境的工具和依赖已正确安装。以下是基础环境搭建的步骤：

- **安装 Node.js 和 pnpm**：
  ::: details 查看详情
  Node.js 是一个 JavaScript 运行环境，pnpm 是一个高效的包管理工具，能够加快依赖安装速度并减少磁盘空间的占用。可以通过以下步骤安装：
  1. 访问 [Node.js 官网](https://nodejs.org/)，下载并安装最新的稳定版本。
  2. 安装完成后，通过命令行输入 `node -v` 和 `npm -v` 确保 Node.js 和 npm 已成功安装。
  3. 安装 pnpm，执行命令：`npm install -g pnpm`。
     :::

- **安装 Git**：
  ::: details 查看详情
  Git 是版本控制工具，用于管理源代码的更改历史。确保已安装 Git 并配置好用户信息：
  1. 访问 [Git 官网](https://git-scm.com/)，下载并安装适合您操作系统的 Git 版本。
  2. 安装完成后，在命令行中输入 `git --version` 检查 Git 是否已正确安装。
  3. 配置 Git 用户信息：执行 `git config --global user.name "Your Name"` 和 `git config --global user.email "your.email@example.com"`。
     :::

- **安装 Visual Studio Code**：
  ::: details 查看详情
  Visual Studio Code (VS Code) 是一款轻量级、功能强大的源代码编辑器，适合前端开发。可以通过以下步骤安装：
  1. 访问 [VS Code 官网](https://code.visualstudio.com/)，下载并安装最新版的 Visual Studio Code。
  2. 安装完毕后，建议安装一些常用插件，如 Vue (Official)、Lingma 和 git-commit-plugin，提升开发体验。
     :::

### 初始化项目

在环境搭建完成后，接下来是项目初始化过程，确保可以顺利开始开发工作。

#### 克隆项目文件

首先需要从远程仓库克隆项目文件到本地计算机。执行以下命令：

```shell
git clone https://github.com/Alaye-Dong/jxut-wiki.git
```

> [!WARNING] 建议
> 为了更好地进行开发和贡献，建议先在 GitHub 上 🔱 [Fork](https://github.com/Alaye-Dong/jxut-wiki/fork) 该项目到个人账户。可以在自己的仓库中完成开发和验证后，再向源仓库提交 Pull Request>>（[PR](https://github.com/Alaye-Dong/jxut-wiki/pulls)）进行贡献。

#### 安装项目依赖包

通过包管理器 `pnpm` 安装，打开项目所在目录，执行以下命令：

```shell
pnpm install
```

## 开发流程

### 快速开始

在项目文件夹打开终端，启动具有即时热更新的本地开发服务器。使用以下命令运行它：

```shell
pnpm run docs:dev
```

### 调试与测试

在开发过程中，还可以通过以下命令来构建和预览项目，进行调试和测试：

- 构建项目：生成静态文件。

```shell
pnpm run docs:build
```

- 预览构建文件：预览已构建的静态文件。

```shell
pnpm run docs:preview
```

## 注意

### TailWind CSS

> [vitepress-tailwind](https://github.com/dealenx/vitepress-tailwind/blob/main/README.md)

> [issues](https://github.com/vuejs/vitepress/issues/4904)

在 MD 文件中使用 TailWind CSS ，需要使用 `:::raw` 包裹起来，如：
```markdown
:::raw
<div class="bg-blue-500 text-white p-4 rounded-lg">
  This is a block styled with Tailwind CSS
</div>
:::
```
```markdown
<script setup>
import Sigma from './.vitepress/theme/components/Sigma.vue'
</script>

:::raw
<Sigma />
:::
```
:::raw
<div class="overflow-hidden">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
            <!-- Title -->
            <div class="text-center">
                <p class="text-xs font-semibold text-gray-500 uppercase mb-3">
                    Hello, Friend!
                </p>
                <h1 class="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight">
                    Your are looking at <span class="text-blue-500">Tailwind Content</span>
                </h1>
            </div>
        </div>
    </div>
</div>
:::
