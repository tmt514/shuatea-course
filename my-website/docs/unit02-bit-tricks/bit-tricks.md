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

## 常見的位元運算指令

這些指令通常是 CPU 支援的。關於指令集的資料可以在[維基百科](https://zh.wikipedia.org/wiki/%E6%8C%87%E4%BB%A4%E9%9B%86%E6%9E%B6%E6%A7%8B)找到。在這邊我們考慮的是以下常見的位元運算與算數運算指令：

* 位元且 (Bitwise AND)
* 位元或 (Bitwise OR)
* 位元異或 (Bitwise XOR)
* 位元反轉 (invert)
* 位元右移/左移 (Shift right/Shift left)
* 加減計算

乘法與除法比較特殊，在計算由於比較花時間，是否在一個演算法中被使用到，通常會被分開提及。一般來說，如果去查看 CPU 的資料表（比方說[這裡](https://www.agner.org/optimize/instruction_tables.pdf)），上面也都會標註進行該指令所需要的延遲時間（單位是 cycle）。

## 經典範例

* 2.1 [找出 LSB 最低有效位元](./lsb)
* 2.2 [枚舉所有子集合](./enumerate-all-subsets)
* 2.3 [計算有效位元的數量](./number-of-1-bits) [Leetcode 191 題目連結](https://leetcode.com/problems/number-of-1-bits/)
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

## 參考資料

* 更多的位元計算技巧 [The Aggregate Magic Algorithms](http://aggregate.org/MAGIC/)
* 《Hacker's Delight》這本書，作者是 Henry S. Warren Jr。