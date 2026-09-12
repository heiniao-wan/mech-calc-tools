// ============================================================
// 工具注册表 —— 每天新增一个工具时，在此追加一条记录即可
// 格式: { id, name, file, category, desc, icon, date }
// index.html 会自动读取本文件渲染卡片，无需改动 index.html
// ============================================================
const TOOLS = [
  {
    id: "section-props",
    name: "截面属性计算",
    file: "tools/section-props.html",
    category: "力学计算",
    desc: "实心圆/圆管/矩形/方管/自定义截面的面积、惯性矩、截面模量、回转半径、抗扭模量与每米质量计算",
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
