// ============================================================
//  在这里修改你的个人信息 —— 改完保存即可，无需改动其他文件
// ============================================================

export const links = {
  github: 'https://github.com/Y1bo-Zhao',
  scholar: 'https://scholar.google.com/citations?user=h5ZSJHAAAAAJ&hl=zh-CN',
  zhihu: 'https://www.zhihu.com/people/zhao-yi-bo-32-3',
}

export const profile = {
  name: 'ZHAO Yibo',
  nameCn: '赵一博',
  title: '无人机规划与控制 · PhD Researcher @ PolyU',
  tagline: '让机器人更自主地感知、决策与行动。',
  intro:
    '你好，我是赵一博（ZHAO Yibo）。本科毕业于哈尔滨工业大学（深圳），目前在香港理工大学（PolyU）攻读博士学位，专注于无人机（UAV）的规划与控制算法，同时对各类机器人系统抱有浓厚兴趣。我热衷于把优雅的算法落到真实的硬件上，让机器人在复杂环境中自主飞行与运动。',
  location: '中国香港 · Hong Kong',
  email: '23039432r@connect.polyu.hk',
  phone: '(+86) 150 1673 6658',
  avatar: '', // 留空则显示首字母；也可填图片 URL，例如 '/avatar.jpg'
}

export const stats = [
  { label: '当前身份', value: 'PhD', suffix: '' },
  { label: '研究方向', value: 'UAV', suffix: '' },
  { label: '发表论文', value: '6', suffix: '' },
  { label: '论文引用', value: '567', suffix: '' },
]

export const skills = [
  { group: '规划与控制 · Planning & Control', items: ['轨迹优化', 'MPC', '运动规划', '最优控制', 'SLAM'] },
  { group: '编程与框架 · Programming', items: ['C++', 'Python', 'ROS / ROS2', 'MATLAB', 'PyTorch'] },
  { group: '工具与平台 · Tools', items: ['PX4', 'Gazebo', 'Linux', 'Git', 'CMake'] },
]

// ---- 论文（数据来自 Google Scholar，如有更新请自行调整）----
export const publications = [
  {
    title: 'Unmanned aerial vehicles for search and rescue: A survey',
    authors: 'Y Zhao, M Lyu, C Huang, H Huang',
    venue: 'Remote Sensing 15(13), 3266',
    year: '2023',
    citations: 546,
    link: '',
    highlight: true,
  },
  {
    title: 'Bidirectional Thrust Control for Quadrotor Safety',
    authors: 'Y Zhao, M Lyu, C Li, H Huang',
    venue: 'IEEE Robotics and Automation Letters (RA-L) 11(3), 2650-2657',
    year: '2026',
    citations: 0,
    link: '',
    highlight: true,
  },
  {
    title: 'A Novel Anti-Disturbance Control Framework for Bidirectional Quadrotors',
    authors: 'Y Zhao, M Lyu, H Huang',
    venue: 'IEEE Int. Conf. on Control & Automation (ICCA)',
    year: '2025',
    citations: 0,
    link: '',
  },
  {
    title: 'Quadrotor Ego-Noise-Based Passive Acoustic Sensing for Obstacle Detection',
    authors: 'Y Zhao, M Lyu, C Huang',
    venue: 'IEEE Int. Conf. on Control & Automation (ICCA)',
    year: '2025',
    citations: 0,
    link: '',
  },
  {
    title: 'IMU dead-reckoning localization with RNN-IEKF algorithm',
    authors: 'Y Zhao, H Zhou, X Xiong, Y Lou, S Kamal',
    venue: 'IEEE/RSJ Int. Conf. on Intelligent Robots and Systems (IROS)',
    year: '2022',
    citations: 20,
    link: '',
  },
  {
    title: 'Range-based reactive deployment of a flying robot for target coverage',
    authors: 'Y Zhao, M Lyu, H Huang',
    venue: 'Aerospace 9(11), 731',
    year: '2022',
    citations: 1,
    link: '',
  },
]

export const projects = [
  {
    name: 'Bidirectional Quadrotor',
    desc: '双向推力四旋翼的安全控制与抗扰框架，对应 RA-L 2026 与 ICCA 2025 论文的研究与实现。',
    tags: ['Control', 'Quadrotor', 'MATLAB'],
    link: '',
    repo: 'https://github.com/Y1bo-Zhao/Bidirectional',
    accent: 'cyan',
  },
  {
    name: 'CARIC',
    desc: '协作空中机器人巡检挑战赛（CARIC）相关代码与实验。（项目描述可自行补充）',
    tags: ['C++', 'ROS', 'UAV'],
    link: '',
    repo: 'https://github.com/Y1bo-Zhao/Caric_test',
    accent: 'violet',
  },
  {
    name: '更多项目 · More on GitHub',
    desc: '在 GitHub 上查看我的全部开源项目与代码。',
    tags: ['GitHub'],
    link: '',
    repo: 'https://github.com/Y1bo-Zhao',
    accent: 'emerald',
  },
]

// ---- 知乎写作：把下面换成你真实的文章标题和链接 ----
export const posts = [
  {
    title: '（示例）从零理解无人机轨迹优化',
    date: '2026-06-20',
    summary: '把这三条换成你在知乎发表的真实文章标题、摘要和链接即可。',
    link: links.zhihu,
    tag: '算法笔记',
  },
  {
    title: '（示例）MPC 在四旋翼控制中的应用笔记',
    date: '2026-05-08',
    summary: '从模型预测控制的原理，到落地到四旋翼平台的工程实践。',
    link: links.zhihu,
    tag: '控制',
  },
  {
    title: '（示例）读博第一年：我踩过的坑与收获',
    date: '2026-04-15',
    summary: '关于科研节奏、工具选择与心态调整的一些真实体会。',
    link: links.zhihu,
    tag: '科研随笔',
  },
]

export const socials = [
  { name: 'GitHub', link: links.github, icon: 'github' },
  { name: 'Google Scholar', link: links.scholar, icon: 'scholar' },
  { name: '知乎 · Zhihu', link: links.zhihu, icon: 'zhihu' },
  { name: 'Email', link: 'mailto:23039432r@connect.polyu.hk', icon: 'mail' },
]
