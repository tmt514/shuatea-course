class Solution {
 public:
  vector<int> twoSum(vector<int>& nums, int target) {
    // 我們利用 idx 來儲存數值->註標的對應。
    unordered_map<int, int> idx;

    // 枚舉所有的 i，然後看看有沒有之前存過的 j 滿足要求。
    for (int i = 0; i < nums.size(); i++) {
      if (idx.find(target - nums[i]) != idx.end()) {
        return {i, idx[target - nums[i]]};
      }
      // 然後把自己存進去。
      idx[nums[i]] = i;
    }

    return {-1, -1};
  }
};