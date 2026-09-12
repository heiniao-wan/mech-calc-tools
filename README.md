# ⚙️ 机械非标自动化设计计算工具集

面向机械非标自动化工程师的在线设计计算工具集合，每天更新 1 个工具。

**在线使用**（GitHub Pages 部署后）：`https://heiniao-wan.github.io/mech-calc-tools/`

## 工具清单

| 工具 | 分类 | 说明 |
|------|------|------|
| [梁受力计算](tools/beam-calc.html) | 力学计算 | 简支/悬臂梁 · 集中/均布载荷 · 弯矩、应力、挠度校核 |

> 完整路线图见 [ROADMAP.md](ROADMAP.md)——覆盖电机选型、滚珠丝杠、梯形丝杠、轴承、气缸、气爪、同步带等 30+ 工具，分 4 个阶段推进。

## 公式来源

《机械设计手册》、SMC 官方选型技术资料、嘉立创FA机械设计手册、Mechtool、THK/米思米选型资料等，详见 [SOURCES.md](SOURCES.md)。

## 使用方式

无需安装，直接浏览器打开 `index.html` 即可；所有工具为纯 HTML/CSS/JS 单文件，可离线使用。

## 目录结构

```
mech-calc-tools/
├── index.html        # 总页面（入口）
├── registry.js       # 工具注册表（新增工具只需在此追加一条）
├── ROADMAP.md        # 开发路线图
├── SOURCES.md        # 公式资料来源
├── PLAN.md           # 每日开发流程
└── tools/            # 各计算工具（独立单文件）
```

## 许可与声明

计算结果仅供设计参考，关键场合请以厂商样本及规范校核为准。
