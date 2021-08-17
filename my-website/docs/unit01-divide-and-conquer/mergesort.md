---
sidebar_position: 13
sidebar_label: "🟨 合併排序法 Mergesort"
---

# 合併排序法 Mergesort

讓我們快速回憶排序問題：

:::note 排序問題
給定一個長度為 $n$ 的整數陣列 $A[0..n-1]$，請將陣列內容由小至大排序後輸出。
:::


## 解題思考

我們可以不分青紅皂白地將資料平均分成兩堆，然後分別遞迴下去將它們排好順序。接下來只要想辦法將兩個已經排好順序的兩堆資料「合併起來」就可以了！

## 參考程式碼(C++)

```cpp
void combine(int A[], int l, int mid, int r) {
  int *tmp = new int[r - l + 1];
  int i = l, j = mid, k = 0;
  while (i < mid || j <= r) {
    if (j > r || (i < mid && A[i] <= A[j])) {
      tmp[k++] = A[i++];
    } else {
      tmp[k++] = A[j++];
    }
  }
  for (int i = l; i <= r; i++) A[i] = tmp[i - l];
  delete[] tmp;
}

void mergesort_impl(int A[], int l, int r) {
  if (l >= r) return;
  int mid = (l + r) / 2;
  mergesort_impl(A, l, mid);
  mergesort_impl(A, mid + 1, r);
  combine(A, l, mid, r);
}

void mergesort(int A[], int n) {
  mergesort_impl(A, 0, n - 1);
}
```