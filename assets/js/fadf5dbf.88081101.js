(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[441],{3905:function(a,e,t){"use strict";t.d(e,{Zo:function(){return o},kt:function(){return k}});var n=t(7294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var i=n.createContext({}),l=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,s=a.originalType,i=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),N=l(t),k=m,h=N["".concat(i,".").concat(k)]||N[k]||c[k]||s;return t?n.createElement(h,r(r({ref:e},o),{},{components:t})):n.createElement(h,r({ref:e},o))}));function k(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var s=t.length,r=new Array(s);r[0]=N;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p.mdxType="string"==typeof a?a:m,r[1]=p;for(var l=2;l<s;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},3984:function(a,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return o},default:function(){return N}});var n=t(2122),m=t(9756),s=(t(7294),t(3905)),r=["components"],p={sidebar_position:102,sidebar_label:"\ud83d\udfe7 Leetcode 493. Reverse Pairs"},i="Leetcode 493. Reverse Pairs",l={unversionedId:"unit01-divide-and-conquer/lc493",id:"unit01-divide-and-conquer/lc493",isDocsHomePage:!1,title:"Leetcode 493. Reverse Pairs",description:"\ud83d\udd17 \u984c\u76ee\u9023\u7d50",source:"@site/docs/unit01-divide-and-conquer/lc493.md",sourceDirName:"unit01-divide-and-conquer",slug:"/unit01-divide-and-conquer/lc493",permalink:"/shuatea-course/docs/unit01-divide-and-conquer/lc493",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/unit01-divide-and-conquer/lc493.md",version:"current",sidebarPosition:102,frontMatter:{sidebar_position:102,sidebar_label:"\ud83d\udfe7 Leetcode 493. Reverse Pairs"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe7 Leetcode 4. Median of Two Arrays",permalink:"/shuatea-course/docs/unit01-divide-and-conquer/lc4"},next:{title:"\ud83d\udfe7 Leetcode 218. The Skyline Problem",permalink:"/shuatea-course/docs/unit01-divide-and-conquer/lc218"}},o=[{value:"\u89e3\u984c\u601d\u8003",id:"\u89e3\u984c\u601d\u8003",children:[]},{value:"\u5be6\u4f5c\u7d30\u7bc0",id:"\u5be6\u4f5c\u7d30\u7bc0",children:[]},{value:"\u53c3\u8003\u7a0b\u5f0f\u78bc(C++)",id:"\u53c3\u8003\u7a0b\u5f0f\u78bcc",children:[]},{value:"\u8907\u96dc\u5ea6\u5206\u6790",id:"\u8907\u96dc\u5ea6\u5206\u6790",children:[]},{value:"\u5099\u8a3b/\u884d\u4f38\u601d\u8003",id:"\u5099\u8a3b\u884d\u4f38\u601d\u8003",children:[]}],c={toc:o};function N(a){var e=a.components,t=(0,m.Z)(a,r);return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"leetcode-493-reverse-pairs"},"Leetcode 493. Reverse Pairs"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/reverse-pairs/"},"\ud83d\udd17 \u984c\u76ee\u9023\u7d50")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u984c\u76ee\u6558\u8ff0")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u7d66\u5b9a\u4e00\u500b\u9663\u5217 ",(0,s.kt)("inlineCode",{parentName:"p"},"nums"),"\uff0c\u627e\u51fa ",(0,s.kt)("strong",{parentName:"p"},"reverse pairs")," \u7684\u6578\u91cf\u3002\u4e00\u500b reverse pair \u7684\u5b9a\u7fa9\uff0c\u70ba\u4e00\u500b\u8a3b\u6a19\u914d\u5c0d ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(i, j)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u5176\u4e2d ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow"},"<"),(0,s.kt)("mi",{parentName:"mrow"},"j")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i < j")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69862em",verticalAlign:"-0.0391em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.85396em",verticalAlign:"-0.19444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j")))))," \u4e26\u4e14 ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mrow",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"monospace"},"n"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"monospace"},"u"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"monospace"},"m"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"monospace"},"s")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},">"),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("mrow",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"monospace"},"n"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"monospace"},"u"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"monospace"},"m"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"monospace"},"s")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{\\tt{nums}}[i] > 2\\times {\\tt{nums}}[j]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathtt"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathtt"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathtt"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathtt"},"s")))),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},">"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.72777em",verticalAlign:"-0.08333em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathtt"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathtt"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathtt"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathtt"},"s")))),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"))))),"\u3002"),(0,s.kt)("p",{parentName:"div"},"\u6bd4\u65b9\u8aaa\u8f38\u5165\u70ba ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[1, 3, 2, 3, 1]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," \u7684\u6642\u5019\uff0c\u8f38\u51fa\u70ba ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"))))),"\u3002"))),(0,s.kt)("h2",{id:"\u89e3\u984c\u601d\u8003"},"\u89e3\u984c\u601d\u8003"),(0,s.kt)("p",null,"\u9019\u984c\u8ddf\u9006\u5e8f\u6578\u5c0d\u975e\u5e38\u76f8\u4f3c\uff01\u552f\u4e00\u8207\u9006\u5e8f\u6578\u5c0d\u4e0d\u540c\u7684\u5730\u65b9\uff0c\u662f\u8981\u6c42\u5728\u8a08\u6578\u7684\u6642\u5019\uff0c\u5de6\u908a\u7684\u6578\u503c\u8d85\u904e\u53f3\u908a\u7684\u5169\u500d\u3002"),(0,s.kt)("h2",{id:"\u5be6\u4f5c\u7d30\u7bc0"},"\u5be6\u4f5c\u7d30\u7bc0"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u6211\u5011\u53ef\u4ee5\u628a\u300c\u8a08\u6578\u300d\u7684\u90e8\u5206\u8207\u300c\u5408\u4f75\u6392\u5e8f\u300d\u7684\u90e8\u5206\u5206\u958b\u5be6\u4f5c\uff0c\u9019\u6a23\u6bd4\u8f03\u4e7e\u6de8\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5229\u7528 STL \u88e1\u9762\u7684\u5408\u4f75\u6392\u5e8f\u51fd\u5f0f\uff0c\u53ef\u4ee5\u8f15\u9b06\u907f\u514d\u6389\u9ebb\u7169\u7684\u90e8\u5206\u3002")),(0,s.kt)("h2",{id:"\u53c3\u8003\u7a0b\u5f0f\u78bcc"},"\u53c3\u8003\u7a0b\u5f0f\u78bc(C++)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\n public:\n  int count;\n\n  void combine(vector<int>& nums, int l, int m, int r) {\n    // \u8a08\u6578\u7684\u90e8\u5206\u3002\n    for (int i = l, j = m; i < m; i++) {\n      while (j <= r && nums[i] > 2LL * nums[j]) ++j;\n      count += j - m;\n    }\n    // \u5408\u4f75\u6392\u5e8f\u7684\u90e8\u5206\u3002\n    vector<int> tmp(r - l + 1);\n    std::merge(nums.begin() + l, nums.begin() + m, nums.begin() + m,\n               nums.begin() + r + 1, tmp.begin());\n    std::copy(tmp.begin(), tmp.end(), nums.begin() + l);\n  }\n\n  void mergesort(vector<int>& nums, int l, int r) {\n    if (l >= r) return;\n    int m = (l + r) / 2;\n    mergesort(nums, l, m);\n    mergesort(nums, m + 1, r);\n    combine(nums, l, m + 1, r);\n  }\n\n  int reversePairs(vector<int>& nums) {\n    count = 0;\n    mergesort(nums, 0, nums.size() - 1);\n    return count;\n  }\n};\n")),(0,s.kt)("h2",{id:"\u8907\u96dc\u5ea6\u5206\u6790"},"\u8907\u96dc\u5ea6\u5206\u6790"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"combine()")," \u7684\u57f7\u884c\u6642\u9593\u662f\u7dda\u6027\u7684 ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(r-l+1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.77777em",verticalAlign:"-0.08333em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u56e0\u6b64\u6574\u9ad4\u6642\u9593\u8907\u96dc\u5ea6\u8207\u5408\u4f75\u6392\u5e8f\u6cd5\u76f8\u540c\uff0c\u7686\u70ba ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"log"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n\\log n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},"lo",(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\u3002"),(0,s.kt)("h2",{id:"\u5099\u8a3b\u884d\u4f38\u601d\u8003"},"\u5099\u8a3b/\u884d\u4f38\u601d\u8003"),(0,s.kt)("p",null,"\u9019\u500b\u984c\u76ee\u7576\u7136\u4e5f\u6709\u5176\u4ed6\u89e3\u6cd5\uff0c\u5beb\u8d77\u4f86\u4e5f\u76f8\u7576\u5bb9\u6613\u3002\u6bd4\u65b9\u8aaa\uff0c\u76f4\u63a5\u4f7f\u7528\u5e73\u8861\u4e8c\u5143\u6a39\u9032\u884c\u52d5\u614b\u7684\u63d2\u5165\u6216\u67e5\u627e\uff1b\u53c8\u6216\u8005\u662f\u5728\u96e2\u6563\u5316\uff08\u53d6\u5f97\u6bcf\u4e00\u500b\u6578\u503c\u76f8\u5c0d\u61c9\u7684\u79e9\uff09\u4e4b\u5f8c\u4f7f\u7528 Binary Index Tree\u3002\u4e0d\u904e\u7531\u65bc\u672c\u7ae0\u7bc0\u6211\u5011\u60f3\u8981\u6ce8\u91cd\u7684\u662f\u5206\u800c\u6cbb\u4e4b\u6cd5\u7684\u6982\u5ff5\uff0c\u56e0\u6b64\u6211\u5011\u5c31\u66ab\u6642\u4e0d\u63d0\u5176\u4ed6\u5e7e\u7a2e\u89e3\u6cd5\u56c9\u3002"))}N.isMDXComponent=!0}}]);