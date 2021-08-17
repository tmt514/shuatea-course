---
sidebar_position: 14
sidebar_label: "🟨 逆序數對 Inversions"
---

# 逆序數對 Inversions

:::note 逆序數對問題 Inversions
給定一個長度為 $n$ 的整數陣列 $A[0..n-1]$，請計算有多少個註標配對 $(i, j)$ 使得 $i < j$ 但是 $A[i] > A[j]$。
:::

## 解題思考

直接枚舉所有可能的數對，並且計數，需要 $O(n^2)$ 的時間。分而治之的想法有時候就像是一個模板，套下去試試看，說不定有機會得到有趣的觀察。這題也是如此，如果我們硬生生地像合併排序法一樣，將資料分成左邊 $A[0..n/2-1]$ 和右邊 $A[n/2..n-1]$ 兩堆：那麼我們可以發現逆序數對總數，恰好等於左邊那堆逆序數對總數、加上右邊那堆逆序數對總數、加上「左邊挑一個、右邊挑一個而且左邊比右邊大」的配對數。

要怎麼解決這個「左右各挑一個並滿足條件」的計數問題呢？這時候我們便能夠發現，如果左邊和右邊都各自排好順序了，那麼考慮每個左邊的數字 $A[\ell]$，只要能夠找出右邊第一個比 $A[\ell]$ 小的數字，再依據該數字的位置就能夠算出有多少形如 $(\ell, ?)$ 的配對了。

## 參考程式碼(C++)

```cpp {7,14}
int combine(int A[], int l, int mid, int r) {
  int *tmp = new int[r - l + 1];
  int i = l, j = mid, k = 0, count_total = 0;
  while (i < mid || j <= r) {
    if (j > r || (i < mid && A[i] <= A[j])) {
      tmp[k++] = A[i++];
      count_total += j - mid;
    } else {
      tmp[k++] = A[j++];
    }
  }
  for (int i = l; i <= r; i++) A[i] = tmp[i - l];
  delete[] tmp;
  return count_total;
}

int count_inversions_impl(int A[], int l, int r) {
  if (l >= r) return 0;
  int mid = (l + r)/2;
  int count_left = count_inversions_impl(A, l, mid);
  int count_right = count_inversions_impl(A, mid+1, r);
  int count_mid = combine(A, l, mid+1, r);
  return count_left + count_right + count_mid;
}

int count_inversions(int A[], int n) {
  return count_inversions_impl(A, 0, n - 1);
}
```

這個寫法跟合併排序只相差了一點點，可以視為合併排序法的一個有趣應用。