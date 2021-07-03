# 雙指標 Two Pointers

## 一個例子

:::note [Leetcode 829. Consecutive Numbers Sum](https://leetcode.com/problems/consecutive-numbers-sum/)
給定一個正整數 $n$ $(1\le n\le 10^9)$，請問有多少種方法可以將 $n$ 表示成連續的正整數和呢？
:::

既然是連續的正整數和，那麼我們可以把它寫成 $L+ (L+1) + \ldots +R$。因此，我們可以設計出一個演算法，枚舉所有可能的下界 $L$，並且利用逐步往上相加的方式嘗試找出所有的 $R$。於是得到了第一個演算法：

### 演算法 1：枚舉可能的下界與上界
```cpp
class Solution {
public:
  int consecutiveNumbersSum(int n) {
    int ways = 0;
    for (int L = 1; L <= n; L++) {
      int sum = 0;
      for (int R = L; sum + R <= n; R++)
        sum += R;
      if (sum == n)
        ways++;
    }
    return ways;
  }
};
```

這個方法顯然是非常沒有效率的！你看看，它用了兩個 for 迴圈啊！有興趣的朋友們可以嘗試證明看看，這個演算法的時間複雜度其實是 $\Theta(n\log n)$。當 $n \approx 10^9$ 的時候，執行的步驟數大概是 $n\log n\approx 2.9\times 10^{10}$，超大。


要怎麼加速呢？這時候我們可以來點小觀察。如果內圈的迴圈跑完以後，發現這個 $L$ 不是我們要的，那麼此時會有以下的情形發生：

$$
\begin{aligned}
sum := L+(L+1)+\ldots + (R-1) \ \ \ \ \ \ \ \ &< n\\
L+(L+1)+\ldots + (R-1) + R &> n
\end{aligned}
$$

那麼，下一次迴圈的執行（即 $L$ 變成 $L+1$ 之後），第一條式子增加的量恰好是 $R-L$。如果增加後，它仍然小於 $n$，那麼此時 $L+1$ 也不會是個可行的下界。因此**大可不必枚舉 $L+1$**。要怎麼跳可以跳到下一個可能的答案呢？於是我們可以推定，當這個 $L$ 檢查完畢後，$L$ 可以至少增加 $(R-L)$ 的若干倍，直到至少為 $n$ 為止！這個增加的量就是 $\lceil(n-sum)/(R-L)\rceil$。

### 演算法 2：跳過不可能的答案

```cpp
class Solution {
public:
  int consecutiveNumbersSum(int n) {
    int ways = 0;
    for (int L = 1; L <= n; L++) {
      int sum = 0, R = L;
      while (sum + R <= n) {
        sum += R;
        R++;
      }
      if (sum == n)
        ways++;
      else
        L += (n - sum - 1) / (R - L);
    }
    return ways;
  }
};
```
