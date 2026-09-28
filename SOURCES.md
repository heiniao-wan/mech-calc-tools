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
| THK 官方 BNK 系列样本（BNK16/20/25 规格表） | 公称外径、导程、沟槽谷径(根径)、基本动额定载荷 Ca、静额定 C0a（单位 kN，取 GT 预紧级）、DN 值 | https://www.thk.com/us/en/products/ball_screw/finished_shaft_end/bnk20/ 与 /bnk25/ |
| HIWIN / TBI SFU 系列滚制丝杠样本 | 公称直径、导程、动额定载荷 Ca、静额定 C0a（kgf，换算 N）、钢球直径 | https://www.deliyalinearmotion.com/ball-screw/sfu-ball-screw.html ；TBI: https://tflbearing.com/product/linear-bearing/tbi-high-precision-universal-ball-screw-sfa-sfni-sfyr-sfnu2005 |
| 丝杠型号库数据来源说明（2026-09-23 入库） | 工具内置 THK/ HIWIN/ TBI 三品牌规格：THK 取官方真实根径；HIWIN/TBI 根径按 d1≈0.80·d0+0.075·Pb 估算（仅供压杆/临界转速参考） | 见工具 ④ 面板，最终以各厂商样本为准 |

## 三·B 梯形丝杠（滑动螺旋传动，2026-09-26 搜索整理）
| 来源 | 覆盖内容 | 链接 |
|------|---------|------|
| Mechtool 滑动螺旋传动计算 | 螺纹升角 λ=arctan(S/(π·d2))、当量摩擦角 ρ'=arctan(f/cos(α/2))（梯形 α=30°、锯齿 33°）、自锁 λ≤ρ'、摩擦力矩 Mt1=½·d2·F·tan(λ+ρ')、当量应力 σca=√[(4F/πd3²)²+3(Mq/0.2d3³)²]、耐磨性 p=F/(π·d2·H1·n)（H1=0.5P、H=ψ·d2、n=H/P）、稳定性 Fc/F（垂直≥2.5 水平≥4）、临界转速 nc=12×10⁶·μ1²·d3/lc²、效率 η=K·tanλ/tan(λ+ρ') | https://www.mechtool.cn/calculation/calculation_screwdrive.html |
| 凡一商城：梯形丝杠选型参数计算工具（公式来源·米思米 MISUMI） | 轴径-螺距-有效直径 d2-升角 规格表（16 条）、接触面压力 P=(Fs/Fo)·α、滑动速度 V、效率 η=(1−μ·tanλ)/(1+μ/tanλ)、负载扭矩 T=Fs·R/(2π·η)；螺母材质摩擦系数：黄铜 μ=0.21、树脂 μ=0.13 | https://www.forrun.cn/tools/lead_screw.html |
| Power Screw Calculator（MechSimulator，机械设计教材式） | 矩形/ACME/梯形(30°) 螺纹；T_raise=(W·dm/2)·[(μ·π·dm+L·cosθ)/(π·dm·cosθ−μ·L)]+支承面、效率 η=W·L/(2π·T)、自锁条件 μ≥L·cosθ/(π·dm)；dm=d−p/2、L=n·p | https://mechsimulator.com/tools/power-screw/ |
| ISO 2904 / DIN 103 梯形螺纹基本尺寸 | 中径 d2=d−0.5P、牙高 H1=0.5P、外螺纹小径 d3=d−P−2ac（ac 牙顶间隙）；常用规格 Tr10×2~Tr50×8 | ISO/DIN 标准原文，中文摘要见 industrialmonitordirect.com 梯形丝杠设计指南 |

## 四、伺服/步进电机选型
| 来源 | 覆盖内容 | 链接 |
|------|---------|------|
| 凡一商城：滚珠丝杠选伺服电机计算工具 | 完整公式链：Fc/Tc/Ta/RMS 转矩/惯量比表/效率表/摩擦系数表 | https://m.forrun.cn/tools/ball_screw_servo.html |
| 非标机械设计选型计算讲透 | TL=F·P/(2πη)、Ta=Jα、惯量比建议值（精密≤5，一般≤20） | http://www.zhenhuaedu.com/feibiao/5398.html |
| CSDN：伺服与步进电机选型指南 | 峰值/额定转矩校核、功率曲线、矩频特性 | https://blog.csdn.net/weixin_34357928/article/details/91559534 |
| 松下 MINAS A6 选型样本（200V 级 MSMF/MHMF 低/中惯量） | 额定/峰值转矩、额定转速 3000rpm、转子惯量（×10⁻⁴kg·m²）、惯量比建议≤20~30 倍 | https://industry.panasonic.eu/storage/custom-upload/Factory%20%26%20Automation/Industrial%20Motors/Documents/ca_minas_a6_4247_en.pdf ；单型号 MSMF082L1U1 https://industry.panasonic.com/ap/en/products/motor/fa-motor/ac-servo/number/msmf082l1u1 |
| 安川 Σ-7 SGM7A 选型样本（200V） | 50W~1.5kW 额定/瞬时最大转矩、转子惯量（×10⁻⁴kg·m²）、惯量比建议（标准30倍/带外置再生20倍） | https://invertersuk.com/wp-content/uploads/SGM7A_200.pdf ；过渡指南 https://www.dmcsolution.com.my/wp-content/uploads/2018/01/Sigma-5-to-Sigma-7-Transition-Guide-watermark.pdf |
| 丝杠驱动惯量折算通用式（2026-09-23 入库） | 折算到电机轴 Jref=m·(Pb/2π·i)²+Js/i²、电机转速 N=60·i·V/Pb、加速转矩 Ta=(Jm+Jref)·α、RMS=√[Σ(Tk²·tk)/T]、功率 P=T·N/9550 | 见 tools/servo-motor.html 公式依据区；厂商样本以 Panasonic/ Yaskawa 为准 |

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

## 七、弹簧（2026-09-22 搜索整理）
| 来源 | 覆盖内容 | 链接 |
|------|---------|------|
| GB/T 23935-2009《圆柱螺旋弹簧设计计算》 | 压缩/拉伸刚度 k=G·d⁴/(8·D³·n)、扭转刚度 M=E·d⁴·φ/(64·D·n)（≈3670 系数 N·mm/°）、Wahl 曲度系数 K=(4C−1)/(4C−4)+0.615/C、τ=K·8FD/(πd³)、扭转曲度系数 K1=(4C−1)/(4C−4)（张开旋向） | 权威期刊引用（隔震支座论文全文） https://pubs.cstam.org.cn/em/article/Y2024/I10/212 |
| MachiningCalc 弹簧计算器 | C=4~12 推荐（最优 6~9）、屈曲 Haringx 判据（两端铰支 H0/D>5.26）、GB/T 2089 应用例 | https://machiningcalc.com/zh/spring-calculator |
| 弹簧计算公式汇总（bodocs） | G 取值：碳钢 78500、琴钢丝 80000、不锈钢 71500 MPa；E：碳素钢丝 206000、不锈钢 188000 MPa；扭转 K1 顺旋向取 1 | http://www.bodocs.net/doc/2d8004685.html |
| 亨特五金弹簧技术文章 | 有效圈数 3~10、支承圈 1.5~2.5 并紧磨平、反算圈数 n=G·d⁴/(8·D³·k) | https://www.tanhuang1.com/yashuotanhuang/page/88 |

## 八、轴承（2026-09-27 搜索整理）
| 来源 | 覆盖内容 | 链接 |
|------|---------|------|
| GB/T 6391《滚动轴承 额定动载荷和额定寿命》 | 基本额定动载荷 C、基本额定寿命 L10=(C/P)^p（球 p=3、滚子 p=10/3）、寿命修正系数 a₁（90%→1、95%→0.62、96%→0.53、97%→0.44、98%→0.33、99%→0.21） | 标准原文；条款摘要见 Koyo 轴承技术手册 https://koyo.jtekt.co.jp/en/support/bearing-knowledge/5-7000.html |
| 嘉立创 FA 机械设计手册：径向当量载荷 X、Y 系数表 | 深沟球轴承按 f₀·Fa/C₀r 查 e/X/Y（索引 0.172~6.89 → e 0.19~0.44、Y 2.30~1.00，Fa/Fr>e 时 X=0.56）；当量静载荷 P₀r=0.6Fr+0.5Fa（<Fr 取 Fr） | https://www.jlc-jdgf.com/mcbook/new07274.htm |
| 嘉立创 FA 机械设计手册：单列角接触球轴承当量载荷计算 | 15°(7000C)：Fa/Fr≤e 取 Fr，>e 取 0.44Fr+YFa；25°(7000AC)：e=0.68，>e 取 0.41Fr+0.87Fa；40°(7000B)：e=1.14，>e 取 0.35Fr+0.57Fa；静载荷 P₀r=0.5Fr+(0.46/0.38/0.26)Fa；成组安装 C=i^0.7·Cr、C₀=i·C₀r、极限转速取 60%~80% | https://www.jlc-jdgf.com/mcbook/7-2-58.htm |
| SKF 角接触球轴承（7000 ACD/P4A）技术参数 | 接触角 α=25°、e=0.68、单列 X2=0.41 / Y2=0.87、背对背 Y2=1.4（与国标表一致，交叉验证） | https://www.skf.com/group/products/super-precision-bearings/angular-contact-ball-bearings/productid-7000%20ACDGC%2FP4A |
| FAG / SKF 深沟球轴承系数 f₀ 表（按内径代码 × 系列） | 60/62/63 系列各内径代码的 f₀（6000=14.0、6200=12.4、6300=12.1 … 6308=13.0），用于计算 f₀·Fa/C₀r 索引 | http://tbs-bearing.com/product/detail?id=14737787&sccjc=FAG&xl=6205-H-2RSR |
| NSK 深沟球轴承 6000/6200/6300 系列规格表 | d/D/B/r、基本额定动载荷 Cr、基本额定静载荷 C₀r（单位 N，6000~6309 共 30 型号） | http://www.buynsk.com/doc_23836533.html |
| 62 / 63 系列极限转速（脂 / 油润滑，r/min） | 6200~6209 脂 19000→7000、油 26000→9000 | https://sddentebearing.en.made-in-china.com/product/qwIGldTvMZre/China-6000-6200-6300-Series-Deep-Groove-Ball-Bearing-for-Machine.html |
| 单列角接触球轴承 70C / 72C 系列规格（15°） | d/D/B/r、Cr/C₀r、脂/油极限转速（7000C~7009C、7200C~7203C 共 14 型号） | 东胜轴承 http://www.ds-zc.com/product/Catalog/3/213 ；哈通 http://m.htqbearing.com/hatongzhoucheng/wap_pro/10561134.html |

## 九、同步带传动（2026-09-28 搜索整理）
| 来源 | 覆盖内容 | 链接 |
|------|---------|------|
| GB/T 11362-2008《同步带传动 梯形齿同步带额定功率和传动中心距的计算》 | d₁=P_b·Z₁/π、d₂=P_b·Z₂/π、带速 v=πd₁n₁/60000、节线长 L_p=2a₀cosφ+π(d₂+d₁)/2+πφ(d₂−d₁)/180、中心距 a≈M+√(M²−[P_b(Z₂−Z₁)/π]²/8) 与精确式（M=P_b(2Z_b−Z₁−Z₂)/8）、带的节线长必须为节距整数倍 L=p·z_b | 标准原文 PDF http://www.gaigibelt.com/ggdown/biaozhun/GBT%2011362-2008.pdf |
| GB/T 11361《同步带传动 梯形齿带轮》 | 带轮节径圆整表、带轮齿数系列与最小许用齿数 | 标准原文（同站资料库） |
| 擎川：同步带选型计算 | 完整算例：Pd=KA·Pm、按 Pd-n₁ 查带型、啮合齿数 Zm=z₁/2−P_b·z₁(z₂−z₁)/(2π²a)（≥6）、啮合系数 Kz=1（Zm≥6）/1−0.2(6−Zm)、带宽 bs≥bs₀(Pd/(K_L·Kz·P₀))^(1/1.14) | https://www.everla.com/m/zhishi/14800.html |
| IMCAD 同步带传动计算（工况系数表） | 工况系数 KA 按工作机×原动机×运转时间三向取值（复印机 1.0~1.4 … 陶土机械 1.8~2.4）、张紧轮附加量（≤200r/min 加 0.3）、增速传动附加量（增速比≥3.5 加 0.4） | http://dev.inkcad.com/WebCalculate/ZhuanYeJiSuan/TongBuDai_ZhouJie.aspx |
| Gates Mectrol《Timing Belt Theory》白皮书 | 节距定义、带轮节径 d=p·z_p/π、节径差 u、带长与中心距关系 L=2C+πd（等径）、包角 θ₁=2arccos((d₂−d₁)/2C) | https://gates.com/content/dam/documents-library/whitepapers/timing-belt-theory-white-paper.pdf |
| 凯奥动力：同步带精准选型指南 | 带型系列划分（梯形齿 MXL/XL/L/H/XH、圆弧齿 3M/5M/8M/14M/20M 与 S 系列）、工况系数推荐（平稳 1.0~1.4、中等冲击 1.4~1.8、重冲击/频繁启停 ≥2.0）、带宽经验式 | http://www.aorrow.cn/sys-nd/240.html |
| 米思米 / 通用样本：同步带最小许用齿数与标准带宽 | 各带型最小许用齿数（XL 10、L 12、H 14、XH 18；3M 10、5M 14、8M 22、14M 28）、标准带宽系列（5M: 9/15/25，8M: 20/30/50 …） | 各厂商样本汇总 |

## 待补充方向
- [ ] THK 滚珠丝杠/直线导轨选型手册（thk.com 技术资料）
- [ ] 米思米 MISUMI 选型计算资料（fa.misumi-vona.cn）
- [ ] 亚德客 AirTAC 气缸选型样本
- [ ] GB/T 3480 齿轮强度计算
- [ ] 气爪（SMC MHZ/MHS 系列）夹持力计算表
- [ ] SKF/NSK 轴承当量载荷 αISO 修正与润滑寿命（进阶）
