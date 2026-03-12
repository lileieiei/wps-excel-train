# WPS表格培训教程

基于Reveal.js的WPS表格培训PPT，包含完整的公式讲解、数组应用、快捷键和实战练习。

## 在线演示

访问 [GitHub Pages链接] 查看在线演示（部署后更新）

## 项目特点

- ✅ 完全离线运行，无需网络
- ✅ 所有资源已本地化（字体、CSS、JS）
- ✅ 白色简洁主题，专业美观
- ✅ 动画演示效果，生动形象
- ✅ 8个实战练习，从基础到高级
- ✅ 响应式设计，支持多种分辨率
- ✅ 左右分栏布局，内容清晰易读

## 目录结构

```
wps-excel-training/
├── index.html              # 主入口文件
├── README.md              # 项目说明
├── css/
│   └── custom.css        # 自定义样式
├── lib/                   # 第三方库（全部本地化）
│   ├── reveal.js/        # Reveal.js核心
│   ├── highlight.js/     # 代码高亮
│   └── fonts/            # 本地字体（Inter + JetBrains Mono）
│       ├── fonts.css     # 字体样式
│       ├── inter-*.ttf   # Inter字体文件
│       └── jetbrains-*.ttf # JetBrains Mono字体文件
├── exercises/            # 练习文件
│   ├── basic/           # 基础练习（4个）
│   │   ├── exercise-01-salary/      # 员工工资核算
│   │   ├── exercise-02-sales/       # 销售数据统计
│   │   ├── exercise-03-inventory/   # 库存管理表
│   │   └── exercise-04-finance/     # 个人理财记账
│   └── advanced/        # 高级练习（4个）
│       ├── exercise-05-dashboard/   # 动态销售仪表板
│       ├── exercise-06-analysis/    # 财务多维度分析
│       ├── exercise-07-automation/  # 自动化报表生成
│       └── exercise-08-hr/          # 人力资源数据分析
└── js/
    └── animations/       # 动画脚本
```

## 使用说明

### 1. 本地查看

直接用浏览器打开 `index.html` 文件即可查看培训PPT。

**操作方式：**
- 方向键 ← → 或 PageUp/PageDown：切换幻灯片
- 方向键 ↑ ↓：在同一章节内切换（垂直导航）
- ESC：查看幻灯片缩略图
- F：全屏模式
- S：演讲者模式

### 2. 练习文件

所有练习文件位于 `exercises/` 目录下：

- 每个练习包含数据文件（.csv）和操作指南（.md）
- 在PPT第5章可以直接点击下载按钮
- 建议使用WPS表格或Excel打开练习文件

### 3. 离线使用

本项目所有资源均已完全本地化，可以在无网络环境下正常使用：
- ✅ Reveal.js 核心文件
- ✅ Highlight.js 代码高亮
- ✅ Inter 和 JetBrains Mono 字体（已下载到本地）
- ✅ 所有CSS样式
- ✅ 所有练习数据

**无需网络连接，直接打开 `index.html` 即可使用！**

## 培训内容大纲

### 第1章：常用公式讲解（15-18页）
- **基础函数**：SUM、AVERAGE、MAX、MIN
- **逻辑函数**：IF函数及嵌套应用
- **查找函数**：VLOOKUP垂直查找
- **文本函数**：LEFT、RIGHT、MID、CONCAT
- **日期函数**：TODAY、DATEDIF
- **新增函数**：IFS、SUMIFS、COUNTIFS

**布局特点**：左右分栏，左侧函数说明，右侧动画演示

### 第2章：数组应用（4-5页）
- **数组公式概念**：与普通公式的区别
- **SUMPRODUCT**：数组乘积求和
- **TRANSPOSE**：行列转置

**新增说明**：详细的功能说明 + 实际示例 + 应用场景

### 第3章：常用快捷键（8-10页）
- **导航与选择**：Ctrl+Home、方向键、全选
- **编辑操作**：F2、F4、填充
- **基础操作**：保存、撤销、查找替换、冻结首行等
- **格式设置**：单元格格式、数字格式、自动调整

**新增说明**：每个快捷键都有详细的使用技巧和场景说明

### 第4章：进阶技巧（5-6页）
- 数据透视表
- 条件格式
- 数据验证
- 名称管理器
- 数据分列（新增）
- 导入外部数据（新增）

### 第5章：实战练习（10页）⭐更新
- **基础练习**（4个，每个15-20分钟）
  - 员工工资核算、销售数据统计、库存管理、个人理财
- **高级练习**（3个，每个25-30分钟）
  - 动态仪表板、财务分析、自动报表
- **人力资源综合实战**（新增，45-60分钟）
  - 基于140名真实员工数据的综合应用
  - 日期函数、身份证提取、多条件统计、透视表分析

## 技术栈

- **Reveal.js** 4.5.0 - 幻灯片框架
- **Highlight.js** 11.8.0 - 代码高亮
- **CSS3** - 样式和动画
- **Vanilla JavaScript** - 交互逻辑

## 浏览器兼容性

- Chrome 80+
- Firefox 75+
- Edge 80+
- Safari 13+

## 自定义修改

### 修改主题颜色

编辑 `css/custom.css` 文件中的CSS变量：

```css
:root {
  --primary-color: #1E88E5;    /* 主色调 */
  --accent-color: #FF6B35;     /* 强调色 */
  --bg-color: #FFFFFF;         /* 背景色 */
  --text-color: #333333;       /* 文字色 */
}
```

### 添加新的幻灯片

在 `index.html` 中的 `<div class="slides">` 内添加新的 `<section>`：

```html
<section>
    <h2>新章节标题</h2>
    <p>内容...</p>
</section>
```

### 添加新的练习

1. 在 `exercises/` 目录下创建新的练习文件夹
2. 添加数据文件（.csv）和操作指南（.md）
3. 在 `index.html` 第5章添加下载链接

## 本地化资源说明

本项目使用以下本地化资源：

| 资源 | 路径 | 说明 |
|------|------|------|
| Reveal.js | `lib/reveal.js/` | 幻灯片框架（v4.5.0）|
| Highlight.js | `lib/highlight.js/` | 代码高亮（v11.8.0）|
| Inter 字体 | `lib/fonts/inter-*.ttf` | 正文显示字体 |
| JetBrains Mono | `lib/fonts/jetbrains-*.ttf` | 代码等宽字体 |

**所有资源均已下载到本地，无需网络连接即可完整使用！**

## 许可协议

本项目仅供学习和培训使用。

## 更新日志

### v1.1.0 (2026-03-12)
- ✅ 完全本地化：下载并本地化所有字体资源（Inter + JetBrains Mono）
- 将第6章人力资源数据分析整合进第5章实战练习
- 新增练习8：HR综合数据分析（140人真实数据）
- 更新课程导航和结束页统计

### v1.0.0 (2024-02-24)
- 初始版本发布
- 完成5章培训内容
- 添加7个实战练习
- 实现完全离线运行
- 优化为左右分栏布局
- 增加详细的使用说明

---

**祝培训顺利！**

如有问题或建议，欢迎提交Issue或Pull Request。
