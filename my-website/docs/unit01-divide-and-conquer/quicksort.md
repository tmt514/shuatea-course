---
sidebar_position: 11
---

# 排序問題與快速排序法 Quicksort

:::note 排序問題
給定一個長度為 $n$ 的整數陣列 $A[0..n-1]$，請將陣列內容由小至大排序後輸出。
:::

## 解題思考

如果我們選定其中一個數字當作衛兵(pivot)，我們可以掃描過一次陣列，並且將較小的資料放到左邊、較大的資料放到右邊。接下來，只要分別對左邊與右邊分別遞迴下去排序即可。

## 實作細節

我們可以把「掃過一次陣列」的部分拉出來，做成一個 `partition` 函式：這個函式會選定一個衛兵、並且將資料分段，並且回傳衛兵最終的位置。至於 `partition` 要怎麼實作，基本上是百家爭鳴，有非常多的版本。筆者這邊舉的例子，是採用「從左邊刷過去的策略」，也就是說，讓目前的 pivot 跟下一個人比較：如果下一個人比較小，就把它趕到 pivot 左邊（交換位置）、如果下一個人比較大，就把它丟到最末端（與邊界交換並縮小邊界）。

## 參考程式碼(C++)

```cpp
int partition(int A[], int pivot_idx, int right_bound) {
  while (pivot_idx < right_bound) {
    if (A[pivot_idx] > A[pivot_idx + 1]) {
      swap(A[pivot_idx], A[pivot_idx + 1]);
      ++pivot_idx;
    } else {
      swap(A[pivot_idx + 1], A[right_bound]);
      --right_bound;
    }
  }
  return pivot_idx;
}

void quicksort_impl(int A[], int l, int r) {
  if (l >= r) return;
  int mid = partition(A, l, r);
  quicksort_impl(A, l, mid - 1);
  quicksort_impl(A, mid + 1, r);
}

void quicksort(int A[], int n) {
  quicksort_impl(A, 0, n - 1);
}
```

## 分而治之的點是？

我們成功地把一個排序問題，拆成兩個比較小的排序問題。有趣的事情是，拆完之後，由於兩邊的資料已經被 pivot 隔開了，因此不需要額外處理就能保證資料已經是排好序的狀態了。

## 延伸思考

上述程式碼在某些情況下，其最差時間複雜度會達到 $\Theta(n^2)$（比方說資料早已排序、或是陣列中有大量重複資料等情形）。有沒有辦法稍微修改程式碼，使得最差情況下**期望的**時間複雜度仍能達到理想的 $O(n\log n)$ 呢？
