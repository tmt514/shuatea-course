---
sidebar_position: 14
sidebar_label: "🟨 Fenwick 樹"
---

# Fenwick 樹

Fenwick 樹是一種資料結構，它藉由位元計算的技巧，能夠幫助我們快速回答一些關於「前綴」的加總問題。

首先，讓我們來定義一下這個資料結構能做到的事情：

:::note 單點改值與前綴加總問題
對於一個固定長度的正整數 $n$，我們欲對一個長度為 $n$ 的序列 $x_1, x_2, \ldots, x_n$ 進行以下操作：

* `add(i, value)`: 將 $x_i$ 的值改變為 $x_i + {\tt{value}}$。
* `prefix_sum(r)`: 回答 $x_1+x_2+\cdots + x_r$ 的值。
:::

Fenwick Tree 的定義還滿單純的，它利用一個陣列就能夠在 $O(\log n)$ 的時間內完成上面兩項操作。