---
sidebar_position: 1
sidebar_label: "🟦 平行計算 Parallel Computing"
---

# 平行計算

:::tip 核心概念
在設計演算法時，將不相干的計算分得越開越好。這麼一來，若有多個運算單元可以同時運作，便能有效利用所有計算資源。
:::


### 兩個評估平行演算法效能的指標

在設計平行演算法的時候，我們必須要試圖將資料和運算邏輯切得越乾淨越好。有別於傳統的循序演算法，為了達到比較好的平行化，反而會因此讓演算法需要的總工作量增加。因此評估平行演算法效能的時候，通常會用下面這兩個指標來描述。

* **總工作量 (Work)**：基本上就是把所有處理器的工作量加起來，跑完整個演算法要花多久時間的一項指標。
* **深度/跨度 (Depth/Span)**：基本上就是考慮擁有無窮多個處理器，只考慮計算相依性的情況下，跑完演算法要花費多少時間的一項指標。

從設計演算法的角度而言，平行程式設計通常會著重於將循序演算法平行化的過程。至於最終選擇部署哪一個演算法，則是取決於實際的執行環境，並且在跨度與總工作量之間取得平衡。


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

## 關於平行計算的更多

### 平行計算模型

* 在最常見的隨機存取模型中，加入平行的元素時，我們會對於一塊記憶體能否同時被多個執行緒讀或寫，來對計算模型進行歸類：
  - 最寬鬆的可同時讀寫模型 CRCW
  - 寫入的時候必須有排它性 CREW
  - 讀與寫都必須有獨佔性 EREW

### 平行 Parallelism vs. 並行計算 Concurrency

* 平行計算強調的是「同時間進行操作」，而並行計算強調的是「同時間對多項工作有所進展」。後者不一定要在同一時刻做不只一件事情，但是整體而言可以同時推進多項工作。可以參考[這篇文章](https://medium.com/@itIsMadhavan/concurrency-vs-parallelism-a-brief-review-b337c8dac350)。
