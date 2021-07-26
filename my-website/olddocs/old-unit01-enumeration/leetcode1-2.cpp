class Solution {
 public:
  vector<int> twoSum(vector<int>& nums, int target) {
    // 先幫輸入的資料建立註標。
    vector<pair<int, int>> nums_with_index(nums.size());
    for (int i = 0; i < nums.size(); i++)
      nums_with_index[i] = {nums[i], i};

    // 帶有註標的排序。
    sort(nums_with_index.begin(), nums_with_index.end());
    
    // 從目前可能答案範圍的「右上角」逐步排除答案。
    int i = 0, j = nums_with_index.size() - 1;
    while (i < j) {
      int sum = nums_with_index[i].first + nums_with_index[j].first;
      if (sum == target)
        return {nums_with_index[i].second, nums_with_index[j].second};
      else if (sum < target)
        i++;
      else // sum > target
        j--;
    }
    return {-1, -1};
  }
};