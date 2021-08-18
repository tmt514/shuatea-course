---
sidebar_position: 1
sidebar_label: "🟦 位元運算 Bitwise Operators"
---

# 位元運算 Bitwise Operators

:::tip 核心觀念
1. 利用單位時間能對位元組進行操作的特性，加速某些計算。
2. 「狀態壓縮」：利用位元組來表達資料集合的概念。
:::

CPU 內部的計算單元，往往是以字組（Word）為單位。目前常見的計算機結構中，可能是 32-位元、或是 64-位元的電腦。而這也就意味著每一個單位時間，CPU 可以運送、或是針對若干 64-位元 的字組進行計算。如果我們想要計算的東西不足 64-位元的時候，透過常見的位元運算技巧，我們可以爭取更多的計算資源。

## 經典範例

* 2.1 [找出 LSB 最低有效位元](lsb.md)
* 2.2 枚舉所有子集合
* 2.3 計算 1-位元的數量 [Leetcode 191 題目連結](https://leetcode.com/problems/number-of-1-bits/)
* 2.4 Fenwick 樹（Binary Indexed Tree, BIT）
* 2.5 X-Fast 樹


## 實戰練習

☆☆☆ Leetcode 190. Reverse Bits [原題連結](https://leetcode.com/problems/reverse-bits/)  
★☆☆ Leetcode 41. First Missing Positive [原題連結](https://leetcode.com/problems/first-missing-positive/)  
★☆☆ Leetcode 982. Triples with Bitwise AND Equal to Zero [原題連結](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/)  
★☆☆ Leetcode 996. Number of Squareful Arrays [原題連結](https://leetcode.com/problems/number-of-squareful-arrays/)  


## 進階習題

* 除法計算其實超慢
  - Binary GCD
  - 避免除法的 Montegomery 技巧
* 動態規劃的加速技巧
  - 最長共同部分子序列 Longest Common Subsequence
* 轉置一個位元矩陣
* 找出 MSB 最高 1-位元
* 浮點數的黑魔法
