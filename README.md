# 🀄 中国象棋小程序

一款基于 Taro 框架开发的微信小程序象棋游戏，支持多种难度AI、残局模式和战绩系统。

## ✨ 功能特性

### 🎮 核心玩法
- **标准棋盘**：9×10 中国象棋棋盘，包含楚河汉界
- **完整规则**：支持将、士、象、马、车、炮、兵所有棋子的走法规则
- **胜负判定**：将帅被吃或将帅对面判定胜负

### 🤖 AI 难度
| 难度 | 描述 |
|------|------|
| **简单** | 随机选择合法走法 |
| **困难** | 2层深度搜索 + 棋子价值评估 |
| **噩梦** | 3-4层 Minimax 算法 + Alpha-Beta 剪枝 |

### 📚 残局模式
- 马擒单士
- 车兵胜士  
- 炮碾丹砂

### 📊 战绩系统
- 自动保存对局记录
- 总对局数统计
- 胜率计算
- 历史对局列表

## 🛠️ 技术栈

- **框架**：Taro 3.x
- **语言**：TypeScript
- **样式**：SCSS
- **数据库**：微信云开发数据库
- **云函数**：Node.js

## 📁 项目结构

```
minigame-1/
├── src/
│   ├── pages/
│   │   ├── index/          # 游戏主页面
│   │   ├── records/        # 战绩页面
│   │   └── mine/           # 我的页面
│   ├── styles/             # 全局样式
│   ├── app.tsx             # 应用入口
│   └── app.config.ts       # 应用配置
├── cloudfunctions/          # 云函数
│   ├── getOpenId/          # 获取用户标识
│   ├── saveGameRecord/     # 保存游戏记录
│   ├── getGameRecords/     # 获取历史记录
│   └── deleteGameRecords/  # 删除记录
├── config/                  # 构建配置
└── package.json             # 依赖配置
```

## 🚀 快速开始

### 环境要求
- Node.js >= 14.0.0
- 微信开发者工具

### 安装依赖
```bash
npm install
```

### 构建开发
```bash
# 微信小程序
npm run dev:weapp

# H5
npm run dev:h5
```

### 构建生产
```bash
# 微信小程序
npm run build:weapp

# H5
npm run build:h5
```

## ☁️ 云开发配置

1. 在微信开发者工具中开通云开发
2. 创建数据库集合 `game_records`
3. 上传云函数（右键云函数目录 → 上传并部署）
4. 设置集合权限为"仅创建者可读写"

## 📝 数据库结构

### game_records 集合
| 字段 | 类型 | 说明 |
|------|------|------|
| openid | string | 用户标识 |
| difficulty | string | 难度（easy/hard/nightmare） |
| result | string | 结果（红胜/黑胜） |
| totalSteps | number | 总步数 |
| createTime | timestamp | 创建时间 |

## 📱 截图预览

### 游戏界面
![游戏界面](https://via.placeholder.com/300x600?text=Chess+Game)

### 战绩页面
![战绩页面](https://via.placeholder.com/300x600?text=Records)

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

🎯 享受象棋的乐趣！