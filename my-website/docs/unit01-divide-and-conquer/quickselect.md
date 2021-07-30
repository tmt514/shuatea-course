---
sidebar_position: 12
---

# 尋找第 k 小的數 Selection

:::note 順序統計量問題 Order Statistics
給定一個長度為 $n$ 的整數陣列 $A[0..n-1]$，以及一個整數 $k$ ($1\le k\le n$)。請找出整個陣列中第 $k$ 小的資料。
:::

## 解題思考

我們可以利用快速排序法的想法：把資料依據選定的衛兵分成較小與較大的兩邊，接著，根據輸入的 $k$ 值判斷答案出現在哪一邊，並且遞迴處理。

## 參考程式碼(C++)

```cpp
// 這個函式實作與 quicksort 內的實作相同。
int partition(int A[], int pivot_idx, int right_bound);

int kth_smallest_impl(int A[], int l, int r, int k) {
  if (l >= r) return A[l];
  int mid = partition(A, l, r);
  if (A[l + k - 1] == A[mid]) return A[mid];
  if (l + k - 1 < mid) {
    return kth_smallest_impl(A, l, mid - 1, k);
  } else {
    return kth_smallest_impl(A, mid + 1, r, k - (mid - l));
  }
}

int kth_smallest(int A[], int n, int k) {
  kth_smallest_impl(A, 0, n - 1, k);
}
```