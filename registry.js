// ============================================================
// 工具注册表 —— 每天新增一个工具时，在此追加一条记录即可
// 格式: { id, name, file, category, desc, icon, date }
// index.html 会自动读取本文件渲染卡片，无需改动 index.html
// ============================================================
const TOOLS = [
  {
    id: "ball-screw",
    name: "滚珠丝杠选型计算",
    file: "tools/ball-screw.html",
    category: "传动选型",
    desc: "加速/匀速/减速三段工况轴向负载与平均负载 Fm、所需动额定负载 Ca=(60·Lh·Nm/10⁶)^⅓·Fm·fw、寿命反算、静载荷安全系数校核、欧拉压杆稳定、临界转速与 DmN 值限制（MISUMI/THK 选型指南）",
    icon: "🔩",
    date: "2026-09-23"
  },
  {
    id: "spring-calc",
    name: "弹簧计算（压缩/扭转）",
    file: "tools/spring-calc.html",
    category: "力学计算",
    desc: "压缩弹簧：刚度 k=Gd⁴/(8D³n)、Wahl 曲度系数切应力校核、旋绕比推荐、高径比屈曲稳定性、压并高度与压并载荷余量；扭转弹簧：刚度 kT=Ed⁴/(64Dn)、转角、曲度系数弯曲应力校核（GB/T 23935-2009）",
    icon: "🌀",
    date: "2026-09-22"
  },
  {
    id: "weld-check",
    name: "焊缝强度计算（角焊缝/对接焊缝）",
    file: "tools/weld-check.html",
    category: "力学计算",
    desc: "角焊缝轴向载荷校核（he=0.7hf、lw=L−2hf、正面焊缝 βf=1.22）、牛腿角焊缝受弯+剪合成校核（两条竖焊缝/四面围焊）、对接焊缝拉弯剪与折算应力校核，设计值按 GB/T 50017-2017 母材-焊条匹配",
    icon: "🔥",
    date: "2026-09-16"
  },
  {
    id: "bolt-preload",
    name: "螺栓组预紧与夹紧力计算",
    file: "tools/bolt-preload.html",
    category: "力学计算",
    desc: "横向载荷防滑预紧 F0=Ks·F/(m·f·n)、夹紧力与拧紧力矩换算；轴向载荷残余预紧、总拉力与螺栓强度校核（GB/T 3098.1 性能等级、按规格查螺纹小径）",
    icon: "🔩",
    date: "2026-09-15"
  },
  {
    id: "key-pin-check",
    name: "键/销剪切与挤压校核",
    file: "tools/key-pin-check.html",
    category: "力学计算",
    desc: "普通平键（A/B/C型）静联接挤压与剪切强度校核，按轴径自动推荐 GB/T 1096 键尺寸；圆柱销传扭双剪校核与安全销剪断设计参考",
    icon: "🔑",
    date: "2026-09-13"
  },
  {
    id: "shaft-check",
    name: "轴扭转与弯扭合成校核",
    file: "tools/shaft-check.html",
    category: "力学计算",
    desc: "实心/空心轴的扭转切应力、弯曲应力与当量弯矩法合成校核（第三强度理论），扭转角校核、键槽削弱折减与按 P·n 初估最小轴径",
    icon: "⚙️",
    date: "2026-09-12"
  },
  {
    id: "beam-multi",
    name: "梁多载荷叠加校核",
    file: "tools/beam-multi.html",
    category: "力学计算",
    desc: "简支/外伸/悬臂/两端固支梁在集中力+均布段+集中力偶任意组合下的支反力、剪力、弯矩图、挠度曲线与强度/刚度校核",
    icon: "🏗️",
    date: "2026-09-12"
  },
  {
    id: "section-props",
    name: "截面属性计算",
    file: "tools/section-props.html",
    category: "力学计算",
    desc: "实心圆/圆管/矩形/方管/工字钢/H型钢(国标选型)/自定义截面：面积、双轴惯性矩、截面模量、回转半径、抗扭模量与每米质量",
    icon: "📐",
    date: "2026-09-12"
  },
  {
    id: "beam-calc",
    name: "梁受力计算",
    file: "tools/beam-calc.html",
    category: "力学计算",
    desc: "简支/外伸/悬臂/两端固支 4 种支承 × 集中与均布载荷的支反力、最大弯矩、弯曲应力与挠度计算及校核（截面：圆/圆管/矩形/方管/自定义）",
    icon: "🏗️",
    date: "2026-09-12"
  },
];
