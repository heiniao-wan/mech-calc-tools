# 计算公式资料来源（2026-09-12 全网搜索整理）

> 每个工具编写前，先对照本清单找到对应权威来源，公式与系数必须注明出处。

## 一、权威手册类
| 来源 | 覆盖内容 | 链接 |
|------|---------|------|
| 《机械设计手册》 | 梁内力/变位公式表、材料力学、传动件、标准件 | 纸质书（主线依据） |
| 嘉立创FA机械设计手册 | 受静载荷梁内力及变位计算公式（完整表格） | https://www.jlc-jdgf.com/mcbook/new01123.htm |
| Mechtool 在线机械计算 | 滚珠丝杠副设计计算、梁挠度与应力分析、两端固定梁等 | https://www.mechtool.cn/calculation/calculation_ballscrewdrive.html |

## 二、气动元件（SMC 官方）
| 来源 | 覆盖内容 | 链接 |
|------|---------|------|
| SMC 官方技术资料（英文PDF） | 缸径选定四步法、负载率表、缓冲吸能、耗气量 | https://www.smcworld.com/catalog/BEST-technical-data-en/pdf/6-2-1-m21-43-tech_en.pdf |
| SMC 气缸选型四步骤详解 | 缸径 F=η·A·P、动能校核 E=½mv²、负载率取值 | https://www.seeour.cn/a316f3ba.html |
| SMC 气缸技术参数选型步骤 | 缸径例题、行程、安装形式、缓冲 | http://www.omego.cn/?smc_article/10018.html |

## 三、滚珠丝杠
| 来源 | 覆盖内容 | 链接 |
|------|---------|------|
| 数控机床进给滚珠丝杠选择与计算（佳工机电网） | Cam 预期额定动载荷、欧拉压杆公式、极限转速 nc、Dn≤70000 | http://m.newmaker.com/art-detail-28663.html |
| 滚珠丝杆副设计计算（Mechtool） | 寿命 Lr=(Ca/(fw·Fm))³·10⁶、允许轴向载荷、临界转速公式 | https://www.mechtool.cn/calculation/calculation_ballscrewdrive.html |
| 滚珠丝杆介绍（百度百科） | 选型步骤全流程、轴向刚性串联公式、DN 值校核 | https://baike.baidu.com/item/滚珠丝杆介绍 |

## 四、伺服/步进电机选型
| 来源 | 覆盖内容 | 链接 |
|------|---------|------|
| 凡一商城：滚珠丝杠选伺服电机计算工具 | 完整公式链：Fc/Tc/Ta/RMS 转矩/惯量比表/效率表/摩擦系数表 | https://m.forrun.cn/tools/ball_screw_servo.html |
| 非标机械设计选型计算讲透 | TL=F·P/(2πη)、Ta=Jα、惯量比建议值（精密≤5，一般≤20） | http://www.zhenhuaedu.com/feibiao/5398.html |
| CSDN：伺服与步进电机选型指南 | 峰值/额定转矩校核、功率曲线、矩频特性 | https://blog.csdn.net/weixin_34357928/article/details/91559534 |

## 五、梁与结构
| 来源 | 覆盖内容 | 链接 |
|------|---------|------|
| Mechtool 梁挠度与应力分析 | 6 种典型支承/载荷的 δmax、θ、Mmax 公式表、容许挠度参考（L/250~L/1000） | https://www.mechtool.cn/formular/staticloadbeam_beamdeflectionandstressanalysissimulator.html |
| 铝型材承载强度校核（机械设计手册节选） | 悬臂/简支、集中/均布载荷反力弯矩挠度表 | 腾讯 ima 知识库 |

## 六、焊缝连接（2026-09-16 搜索整理）
| 来源 | 覆盖内容 | 链接 |
|------|---------|------|
| GB/T 50017-2017《钢结构设计标准》焊缝条款 | 角焊缝 he=0.7hf、lw=实长−2hf、正面焊缝 βf=1.22、综合应力 √((σf/βf)²+τf²)≤ffw；对接焊缝 σ=N/(lw·t)、剪 τ=V/(lw·t)、折算应力 √(σ²+3τ²)≤1.1ftw | 原文条款镜像（结构设计院教案） https://design.zafu.edu.cn/ 与 gf.cabr-fire.com/m/article-15083.htm |
| 焊接强度计算标准（TrueSight） | 角焊缝 τ=F/(0.7hL) 例题（E43 焊缝抗剪设计值≈150~160）、对接/角焊缝适用场景选择 | https://tsight.io/articles/9883378 |
| 钢结构设计类公式大全 | 角焊缝 σf=√((N/βf·he·lw)²+(V/he·lw)²)≤ffw、钢材 f/fv 设计值（Q235: 215/125，Q355: 305/175） | https://www.52bishe.com/yunpanweb/gjgformula.html |

## 待补充方向
- [ ] THK 滚珠丝杠/直线导轨选型手册（thk.com 技术资料）
- [ ] 米思米 MISUMI 选型计算资料（fa.misumi-vona.cn）
- [ ] 亚德客 AirTAC 气缸选型样本
- [ ] SKF/NSK 轴承寿命计算资料
- [ ] GB/T 3480 齿轮强度计算
- [ ] 气爪（SMC MHZ/MHS 系列）夹持力计算表
