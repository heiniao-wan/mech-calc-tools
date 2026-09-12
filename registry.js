// ============================================================
// 工具注册表 —— 每天新增一个工具时，在此追加一条记录即可
// 格式: { id, name, file, category, desc, icon, date }
// index.html 会自动读取本文件渲染卡片，无需改动 index.html
// ============================================================
const TOOLS = [
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
    desc: "简支梁/悬臂梁在集中载荷、均布载荷下的支反力、最大弯矩、弯曲应力与挠度计算及校核",
    icon: "🏗️",
    date: "2026-09-12"
  },
];
