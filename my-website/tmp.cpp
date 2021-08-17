class Solution {
 public:
  int count;

  void combine(vector<int>& nums, int l, int m, int r) {
    for (int i = l, j = m; i < m; i++) {
      while (j <= r && nums[i] > 2LL * nums[j]) ++j;
      count += j - m;
    }
    vector<int> tmp(r - l + 1);
    std::merge(nums.begin() + l, nums.begin() + m, nums.begin() + m,
               nums.begin() + r + 1, tmp.begin());
    std::copy(tmp.begin(), tmp.end(), nums.begin() + l);
  }

  void mergesort(vector<int>& nums, int l, int r) {
    if (l >= r) return;
    int m = (l + r) / 2;
    mergesort(nums, l, m);
    mergesort(nums, m + 1, r);
    combine(nums, l, m + 1, r);
  }

  int reversePairs(vector<int>& nums) {
    count = 0;
    mergesort(nums, 0, nums.size() - 1);
    return count;
  }
};