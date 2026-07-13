// ============================================================
//  在这里修改你的个人信息 —— 改完保存即可，无需改动其他文件
// ============================================================

export const profile = {
  name: 'ZHAO Yibo',
  nameCn: '赵一博',
  title: '无人机规划与控制 · PhD Researcher @ PolyU',
  tagline: '让机器人更自主地感知、决策与行动。',
  intro:
    '你好，我是赵一博（ZHAO Yibo）。本科毕业于哈尔滨工业大学（深圳），目前在香港理工大学（PolyU）攻读博士学位，专注于无人机（UAV）的规划与控制算法，同时对各类机器人系统抱有浓厚兴趣。我热衷于把优雅的算法落到真实的硬件上，让机器人在复杂环境中自主飞行与运动。',
  location: '中国香港 · Hong Kong',
  email: 'hello@example.com', // TODO: 换成你的常用邮箱
  avatar: '', // 留空则显示首字母；也可填图片 URL，例如 '/avatar.jpg'
}

export const stats = [
  { label: '当前身份', value: 'PhD', suffix: '' },
  { label: '研究方向', value: 'UAV', suffix: '' },
  { label: '发表论文', value: '5', suffix: '+' },
  { label: '开源项目', value: '10', suffix: '+' },
]

export const skills = [
  { group: '规划与控制 · Planning & Control', items: ['轨迹优化', 'MPC', '运动规划', '最优控制', 'SLAM'] },
  { group: '编程与框架 · Programming', items: ['C++', 'Python', 'ROS / ROS2', 'MATLAB', 'PyTorch'] },
  { group: '工具与平台 · Tools', items: ['PX4', 'Gazebo', 'Linux', 'Git', 'CMake'] },
]

export const projects = [
  {
    name: '自主无人机导航 · Autonomous UAV',
    desc: '在未知复杂环境中的实时轨迹规划与避障，兼顾飞行安全性与效率。',
    tags: ['C++', 'ROS2', 'MPC'],
    link: 'https://example.com',
    repo: 'https://github.com',
    accent: 'cyan',
  },
  {
    name: '多机协同控制 · Swarm Control',
    desc: '面向无人机集群的分布式规划与协同控制框架，探索大规模编队飞行。',
    tags: ['Optimization', 'Multi-Agent', 'PX4'],
    link: 'https://example.com',
    repo: 'https://github.com',
    accent: 'violet',
  },
  {
    name: '敏捷飞行控制 · Agile Flight',
    desc: '面向高机动飞行的非线性控制与轨迹跟踪算法研究，逼近平台极限性能。',
    tags: ['Control', 'Python', 'Gazebo'],
    link: 'https://example.com',
    repo: 'https://github.com',
    accent: 'emerald',
  },
]

export const posts = [
  {
    title: '从零理解无人机轨迹优化',
    date: '2026-06-20',
    summary: '用最直观的方式讲清楚轨迹优化背后的建模、约束与求解思路。',
    link: 'https://example.com',
    tag: '算法笔记',
  },
  {
    title: 'MPC 在四旋翼控制中的应用笔记',
    date: '2026-05-08',
    summary: '从模型预测控制的原理，到落地到四旋翼平台的工程实践。',
    link: 'https://example.com',
    tag: '控制',
  },
  {
    title: '读博第一年：我踩过的坑与收获',
    date: '2026-04-15',
    summary: '关于科研节奏、工具选择与心态调整的一些真实体会。',
    link: 'https://example.com',
    tag: '科研随笔',
  },
]

export const socials = [
  { name: 'GitHub', link: 'https://github.com', icon: 'github' },
  { name: 'Email', link: 'mailto:hello@example.com', icon: 'mail' },
  { name: 'Google Scholar', link: 'https://scholar.google.com', icon: 'link' },
  { name: '博客 · Blog', link: 'https://example.com', icon: 'rss' },
]
