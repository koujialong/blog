import{_ as s,c as n,o as a,a as l}from"./app.6ccb36cf.js";const p="/blog/img/124.png",_=JSON.parse('{"title":"\u4E8C\u53C9\u6811\u4E2D\u7684\u6700\u5927\u8DEF\u5F84\u548C LC124","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9898\u76EE","slug":"\u9898\u76EE","link":"#\u9898\u76EE","children":[]},{"level":2,"title":"\u9898\u89E3","slug":"\u9898\u89E3","link":"#\u9898\u89E3","children":[]}],"relativePath":"algorithm/tree/\u4E8C\u53C9\u6811\u4E2D\u7684\u6700\u5927\u8DEF\u5F84\u548C.md"}'),o={name:"algorithm/tree/\u4E8C\u53C9\u6811\u4E2D\u7684\u6700\u5927\u8DEF\u5F84\u548C.md"},e=l('<h1 id="\u4E8C\u53C9\u6811\u4E2D\u7684\u6700\u5927\u8DEF\u5F84\u548C-lc124" tabindex="-1">\u4E8C\u53C9\u6811\u4E2D\u7684\u6700\u5927\u8DEF\u5F84\u548C LC124 <a class="header-anchor" href="#\u4E8C\u53C9\u6811\u4E2D\u7684\u6700\u5927\u8DEF\u5F84\u548C-lc124" aria-hidden="true">#</a></h1><h2 id="\u9898\u76EE" tabindex="-1">\u9898\u76EE <a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a></h2><p>\u4E8C\u53C9\u6811\u4E2D\u7684 \u8DEF\u5F84 \u88AB\u5B9A\u4E49\u4E3A\u4E00\u6761\u8282\u70B9\u5E8F\u5217\uFF0C\u5E8F\u5217\u4E2D\u6BCF\u5BF9\u76F8\u90BB\u8282\u70B9\u4E4B\u95F4\u90FD\u5B58\u5728\u4E00\u6761\u8FB9\u3002\u540C\u4E00\u4E2A\u8282\u70B9\u5728\u4E00\u6761\u8DEF\u5F84\u5E8F\u5217\u4E2D \u81F3\u591A\u51FA\u73B0\u4E00\u6B21 \u3002\u8BE5\u8DEF\u5F84 \u81F3\u5C11\u5305\u542B\u4E00\u4E2A \u8282\u70B9\uFF0C\u4E14\u4E0D\u4E00\u5B9A\u7ECF\u8FC7\u6839\u8282\u70B9\u3002</p><p>\u8DEF\u5F84\u548C \u662F\u8DEF\u5F84\u4E2D\u5404\u8282\u70B9\u503C\u7684\u603B\u548C\u3002</p><p>\u7ED9\u4F60\u4E00\u4E2A\u4E8C\u53C9\u6811\u7684\u6839\u8282\u70B9 root \uFF0C\u8FD4\u56DE\u5176 \u6700\u5927\u8DEF\u5F84\u548C \u3002</p><hr><p><img src="'+p+`" alt="img"></p><ul><li>\u8F93\u5165\uFF1Aroot = [-10,9,20,null,null,15,7]</li><li>\u8F93\u51FA\uFF1A42</li><li>\u89E3\u91CA\uFF1A\u6700\u4F18\u8DEF\u5F84\u662F 15 -&gt; 20 -&gt; 7 \uFF0C\u8DEF\u5F84\u548C\u4E3A 15 + 20 + 7 = 42</li></ul><h2 id="\u9898\u89E3" tabindex="-1">\u9898\u89E3 <a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a></h2><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">root</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> maxPathSum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-Infinity;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u626B\u63CF\u6811</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">scanTree</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5DE6\u8FB9\u8D21\u732E\u503C,\u5927\u4E8E0\u624D\u6709\u4EF7\u503C</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">scanTree</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u53F3\u8FB9\u8D21\u732E\u503C,\u5927\u4E8E0\u624D\u6709\u4EF7\u503C</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">scanTree</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5F53\u524D\u8282\u70B9\u5411\u4E0B\u6700\u5927\u503C\u548Cres\u5224\u65AD\u5927\u5C0F</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">l</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5F53\u524D\u8282\u70B9\u5411\u4E0A\u8FDE\u63A5\u4E3A\u5F53\u524D\u8282\u70B9\u52A0\u4E0A \u5DE6\u53F3\u5206\u652F\u8F83\u5927\u8D21\u732E\u503C\u56E0\u4E3A\u53EA\u80FD\u8FDE\u63A5\u4E00\u8FB9</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">scanTree</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,10),t=[e];function r(c,F,y,D,A,C){return a(),n("div",null,t)}const d=s(o,[["render",r]]);export{_ as __pageData,d as default};
