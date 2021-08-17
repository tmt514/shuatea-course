# 平行計算思維

:::tip 核心概念
在設計演算法時，將不相干的計算分得越開越好。這麼一來，若有多個運算單元可以同時運作，便能有效利用所有計算資源。
:::


### 兩個評估平行演算法效能的指標

在設計平行演算法的時候，我們必須要試圖將資料和運算邏輯切得越乾淨越好。有別於傳統的循序演算法，為了達到比較好的平行化，反而會因此讓演算法需要的總工作量增加。因此評估平行演算法效能的時候，通常會用下面這兩個指標來描述。

* **總工作量 (Work)**
* **深度/跨度 (Depth/Span)**

## 經典範例

* 4.1 前綴和問題 Prefix Sum
* 4.2 八皇后問題 8-Queens
* 4.3 雙調排序法 Bitonic Sort

## 實戰練習

★☆☆ Leetcode 37. Sudoku Solver [原題連結](https://leetcode.com/problems/sudoku-solver/)  
★★☆ Leetcode 239. Sliding Window Maximum [原題連結](https://leetcode.com/problems/sliding-window-maximum/)  
★★☆ Leetcode 42. Trapping Rain Water [原題連結](https://leetcode.com/problems/trapping-rain-water/)  

## 進階習題

* 找出深先搜索順序 Find DFS Order