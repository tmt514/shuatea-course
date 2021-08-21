typedef vector<vector<int>> Skyline;

class Solution {
 public:
  vector<Skyline> convertToSkylines(vector<vector<int>>& buildings) {
    vector<Skyline> skylines;
    for (auto& b : buildings) {
      skylines.push_back({{b[0], b[2]}, {b[1], 0}});
    }
    return skylines;
  }

  Skyline merge(Skyline& l, Skyline& r) {
    Skyline result;
    int i = 0, j = 0;
    int prevLeftHeight = 0, prevRightHeight = 0;
    auto add = [&](int x, int y) {
      if (result.empty() || result.back()[1] != y) {
        result.push_back({x, y});
      }
    };
    while (i < l.size() && j < r.size()) {
      if (l[i][0] == r[j][0]) {
        add(l[i][0], max(l[i][1], r[j][1]));
        prevLeftHeight = l[i++][1];
        prevRightHeight = r[j++][1];
      } else if (l[i][0] < r[j][0]) {
        add(l[i][0], max(l[i][1], prevRightHeight));
        prevLeftHeight = l[i++][1];
      } else {
        add(r[j][0], max(prevLeftHeight, r[j][1]));
        prevRightHeight = r[j++][1];
      }
    }
    while (i < l.size()) {
      add(l[i][0], l[i][1]);
      i++;
    }
    while (j < r.size()) {
      add(r[j][0], r[j][1]);
      j++;
    }
    return result;
  }

  Skyline mergeSkylines(vector<Skyline>& skylines) {
    if (skylines.size() == 1) return skylines[0];
    int m = skylines.size() / 2;
    vector<Skyline> left(skylines.begin(), skylines.begin() + m);
    vector<Skyline> right(skylines.begin() + m, skylines.end());
    auto l = mergeSkylines(left);
    auto r = mergeSkylines(right);
    return merge(l, r);
  }

  vector<vector<int>> getSkyline(vector<vector<int>>& buildings) {
    vector<Skyline> skylines = convertToSkylines(buildings);
    Skyline skyline = mergeSkylines(skylines);
    return skyline;
  }
};