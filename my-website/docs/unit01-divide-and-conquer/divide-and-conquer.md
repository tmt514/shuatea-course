---
sidebar_position: 1
sidebar_label: "🟦 分而治之 Divide and Conquer"
---


# 分而治之 Divide and Conquer

:::tip 核心觀念
把大問題拆成很多類似的子問題，分頭解決以後再組合出原本問題的答案。
:::

把一道複雜的問題拆解成許多規模相對小的子問題，再優先解決這些規模較小的問題，是通則。至於要如何拆解、拆解後要如何利用已解決的子問題計算出原本問題的答案，則是學習分而治之法的關鍵。對於學習分而治之法來說，最適合的例子或許就是排序演算法當中的合併排序法與快速排序法了吧！

## 經典範例

* 1.1 [排序問題與快速排序法 Quicksort](quicksort.md)
* 1.2 [尋找第 $k$ 小的數 Selection](quickselect.md)
* 1.3 [合併排序法 Merge Sort](mergesort.md)
* 1.4 [逆序數對 Inversions](inversions.md)

## 實戰練習

★☆☆ [Leetcode 4. Median of Two Sorted Arrays](lc4.md) [原題連結](https://leetcode.com/problems/median-of-two-sorted-arrays/)  
★☆☆ [Leetcode 493. Reverse Pairs](lc493.md) [原題連結](https://leetcode.com/problems/reverse-pairs/)  
★★☆ Leetcode 218. The Skyline Problem [原題連結](https://leetcode.com/problems/the-skyline-problem/)  
★★☆ Leetcode 1643. Kth Smallest Instructions [原題連結](https://leetcode.com/problems/kth-smallest-instructions/)  
★★★ Leetcode 1649. Create Sorted Array through Instructions [原題連結](https://leetcode.com/problems/create-sorted-array-through-instructions/)  
★★★ Leetcode 1569. Number of Ways to Reorder Array to Get Same BST [原題連結](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/)


## 進階習題

* 序列問題
  - 第 $k$ 小的連續和 ($k$-th Smallest Consecutive Sum)
  - 重組後連續區間的數量 (Consecutive Intervals)
* 樹的走訪
  - 前序中序轉後序 (Preorder + Inorder gives Postorder)
* 幾何問題
  - 凸包問題 (Convex Hull)
  - 最接近點對問題 (Closest Pair)
  - 支配點對問題 (Dominant Pair)
* 圖論問題
  - 競賽圖的漢米爾頓路徑 (Hamiltonian Path in Tournament Graphs)
* 趣味問題
  - 細菌分裂問題 (Bacteria Split)