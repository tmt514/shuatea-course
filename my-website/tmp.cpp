class Solution {
 public:
  int selection(vector<int>& A, int al, int ar, vector<int>& B, int bl, int br,
                int k) {
    if (al > ar) return B[bl + k - 1];
    if (bl > br) return A[al + k - 1];
    int n = ar - al + br - bl + 2;
    int am = (al + ar) / 2;
    int bm = (bl + br) / 2;
    int smaller = (am - al + bm - bl + 1);
    int larger = (ar - am + br - bm + 1);
    if (A[am] > B[bm]) {
      if (k <= smaller)
        return selection(A, al, am - 1, B, bl, br, k);
      else
        return selection(A, al, ar, B, bm + 1, br, k - (bm - bl + 1));
    } else {
      if (k <= smaller)
        return selection(A, al, ar, B, bl, bm - 1, k);
      else
        return selection(A, am + 1, ar, B, bl, br, k - (am - al + 1));
    }
  }

  double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    int n = nums1.size() + nums2.size();
    if (n % 2 == 0) {
      int s1 = selection(nums1, 0, nums1.size() - 1, nums2, 0, nums2.size() - 1,
                         n / 2);
      int s2 = selection(nums1, 0, nums1.size() - 1, nums2, 0, nums2.size() - 1,
                         n / 2 + 1);
      return (s1 + s2) / 2.0;
    } else {
      int s = selection(nums1, 0, nums1.size() - 1, nums2, 0, nums2.size() - 1,
                        n / 2 + 1);
      return s;
    }
  }
};