学习过程中很多帖子帮了很大的忙，这里记录一下自己的学习思路，供后来者参考，如有问题欢迎讨论。

## 白手起家第一步 —— 文献阅读

### 1. 先看 Vijay Kumar 的无人机网课（免费）

在开始读文献之前，先去看宾夕法尼亚大学 Vijay Kumar 的无人机网课（free）。把基础的动力学、planning 和必要的数学知识（如李群李代数、常见的规划问题等）掌握之后，做一做课程提供的 Matlab 仿真。（课程里的中文字幕是社区里华人自己翻译的，有几节没有中文字幕，但老师发音准确，不耽误学习。）

> 🔗 [2-D Quadrotor Control – Planning and Control | Coursera](https://www.coursera.org/lecture/robotics-flight/2-d-quadrotor-control-kakc6)

### 2. 精读 Minimum Snap（三五天吃透）

之后去看 Kumar 久负盛名的文章 *Minimum Snap Trajectory Generation and Control for Quadrotors*。文章结构如下：

**I. Introduction** — 起步阶段为了积累知识、开拓视野，可以多看看 introduction。

**II. Model** — 动力学模型（默认掌握）。

**III. Differential Flatness** 🌟 — 四旋翼无人机的微分平坦特性，是后续读文献时常出现的名词，建议尽量把推导看懂，看不懂的过段时间回头再看。简单来讲，只用四旋翼的位置 $(x, y, z)$ 和偏航角 $\psi$ 就可以表示无人机的状态 $\vec{x}$ 和输入，这意味着无人机可以跟随任何平滑的参考路径。

**IV. Control** — 写得有点简略，特别是几个误差项的推导，且式 (8) 中输入的表示感觉少了点东西。这里补上 $\mathbf{F}_{des}$ 的推导：

由

$$
\mathbf{F} - mg\,\mathbf{z}_W = m\ddot{\mathbf{r}}_T,
$$

定义位置误差 $\mathbf{e}_p = \mathbf{r} - \mathbf{r}_T$，令闭环误差满足

$$
\ddot{\mathbf{e}}_p + K_v \dot{\mathbf{e}}_p + K_p \mathbf{e}_p = 0,
$$

代入 $\ddot{\mathbf{e}}_p = \ddot{\mathbf{r}} - \ddot{\mathbf{r}}_T$ 可得

$$
\mathbf{F} = mg\,\mathbf{z}_W + m(\ddot{\mathbf{e}}_p + \ddot{\mathbf{r}}_T)
= mg\,\mathbf{z}_W + m\ddot{\mathbf{r}}_T - K_v \dot{\mathbf{e}}_p - K_p \mathbf{e}_p,
$$

即

$$
\mathbf{F}_{des} = -K_p \mathbf{e}_p - K_v \mathbf{e}_v + mg\,\mathbf{z}_W + m\ddot{\mathbf{r}}_T,
$$

其中 $K_p,\ K_v$ 为正定增益矩阵。

控制器部分可以对照同年的文章 *Geometric Tracking Control of a Quadrotor UAV on SE(3)*，直观理解误差的定义（多少沾点 creative mind），看到输入输出的表示即可，后面性质的证明看不懂也不影响使用。

**V. Trajectory Generation** 🌟 — 先回答为什么是 minimum snap 而不是 minimum jerk / acceleration：snap 是位置的四阶导，由四旋翼的微分平坦特性，角加速度与 snap 挂钩，即力矩（电机转速）与 snap 挂钩，最小化 snap 可以获得理论上最节能的路径。jerk、acceleration 也可作为优化目标，只是「最优」的意义不同。

主体部分的推导，网上 CSDN 的系列博客讲得很清楚。这里针对论文中的三个改进谈点看法：

- **A.** 把代价函数的基本组成部分单独拿出来并做了无量纲化。基于无量纲的优化问题，可以根据实验要求分别在时间、空间上对生成的轨迹进行放缩，拓展了算法的适用性。
- **B.** 引入新的约束 corridor，把无人机限制在以两路径点为端点的线段附近、半径为 $d$ 的圆柱空间内。
- **C.** 式 (10) 是在「必须在某个时间点到达某个路径点」的前提下生成的轨迹，但很多时候并没有这个要求。可以在总时间不变的情况下重新分配每段路径的时间，使路径更合理（通过迭代，用梯度下降不断微调每段时间分配，使代价函数收敛到局部/全局最小），算是解决了 minimum snap 的时间分配问题。

![四路径点轨迹：无 corridor 约束（左）与 corridor 约束（右）](essays/minimum-snap/waypoints.png)

![时间重分配的迭代收敛过程：轨迹逐步优化（左），代价函数 f(T) 随迭代下降（右）](essays/minimum-snap/iterations.png)

**VI. Experiments** — 略。

### 3. Polynomial Trajectory Planning（进阶）

接着去看 *Polynomial Trajectory Planning for Aggressive Quadrotor Flight in Dense Indoor Environment*，是对前两篇的综合；更进一步的是 waypoint 的选择是自动的（没记错的话基于 Dijkstra 算法），相当实用。

### 4. 对照代码

对照 GitHub 上的项目，慢慢啃代码即可。

### 5. 小结

毕竟是 2011 年提出的方法，存在一些问题，比较明显的是时间分配：通常是均匀分配或梯形分配，会出现 unfeasible 或「打结」的路径，且无人机执行器性能未被完全利用（飞得慢）。
