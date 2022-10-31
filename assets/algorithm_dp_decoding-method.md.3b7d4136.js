import{_ as s,c as n,o as a,a as l}from"./app.f116f034.js";const i=JSON.parse('{"title":"\u89E3\u7801\u65B9\u6CD5 LC91","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9898\u76EE","slug":"\u9898\u76EE","link":"#\u9898\u76EE","children":[]},{"level":2,"title":"\u9898\u89E3","slug":"\u9898\u89E3","link":"#\u9898\u89E3","children":[]}],"relativePath":"algorithm/dp/decoding-method.md"}'),p={name:"algorithm/dp/decoding-method.md"},o=l(`<h1 id="\u89E3\u7801\u65B9\u6CD5-lc91" tabindex="-1">\u89E3\u7801\u65B9\u6CD5 LC91 <a class="header-anchor" href="#\u89E3\u7801\u65B9\u6CD5-lc91" aria-hidden="true">#</a></h1><h2 id="\u9898\u76EE" tabindex="-1">\u9898\u76EE <a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a></h2><ul><li>\u4E00\u6761\u5305\u542B\u5B57\u6BCD A-Z \u7684\u6D88\u606F\u901A\u8FC7\u4EE5\u4E0B\u6620\u5C04\u8FDB\u884C\u4E86 \u7F16\u7801</li></ul><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">&#39;A&#39; -&gt; &quot;1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&#39;B&#39; -&gt; &quot;2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">&#39;Z&#39; -&gt; &quot;26&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8981 \u89E3\u7801 \u5DF2\u7F16\u7801\u7684\u6D88\u606F\uFF0C\u6240\u6709\u6570\u5B57\u5FC5\u987B\u57FA\u4E8E\u4E0A\u8FF0\u6620\u5C04\u7684\u65B9\u6CD5\uFF0C\u53CD\u5411\u6620\u5C04\u56DE\u5B57\u6BCD\uFF08\u53EF\u80FD\u6709\u591A\u79CD\u65B9\u6CD5\uFF09\u3002\u4F8B\u5982\uFF0C&quot;<code>11106</code>&quot; \u53EF\u4EE5\u6620\u5C04\u4E3A\uFF1A</p><ul><li><p>&quot;<code>AAJF</code>&quot; \uFF0C\u5C06\u6D88\u606F\u5206\u7EC4\u4E3A (1 1 10 6)</p></li><li><p>&quot;<code>KJF</code>&quot; \uFF0C\u5C06\u6D88\u606F\u5206\u7EC4\u4E3A (11 10 6)</p></li><li><p>\u6CE8\u610F\uFF0C\u6D88\u606F\u4E0D\u80FD\u5206\u7EC4\u4E3A (1 11 06) \uFF0C\u56E0\u4E3A &quot;06&quot; \u4E0D\u80FD\u6620\u5C04\u4E3A &quot;F&quot; \uFF0C\u8FD9\u662F\u7531\u4E8E &quot;6&quot; \u548C &quot;06&quot; \u5728\u6620\u5C04\u4E2D\u5E76\u4E0D\u7B49\u4EF7\u3002</p></li><li><p>\u7ED9\u4F60\u4E00\u4E2A\u53EA\u542B\u6570\u5B57\u7684 \u975E\u7A7A \u5B57\u7B26\u4E32 s \uFF0C\u8BF7\u8BA1\u7B97\u5E76\u8FD4\u56DE \u89E3\u7801 \u65B9\u6CD5\u7684 \u603B\u6570 \u3002</p></li><li><p>\u8F93\u5165\uFF1As = &quot;226&quot;</p></li><li><p>\u8F93\u51FA\uFF1A3</p></li><li><p>\u89E3\u91CA\uFF1A\u5B83\u53EF\u4EE5\u89E3\u7801\u4E3A &quot;BZ&quot; (2 26), &quot;VF&quot; (22 6), \u6216\u8005 &quot;BBF&quot; (2 2 6) \u3002</p></li></ul><h2 id="\u9898\u89E3" tabindex="-1">\u9898\u89E3 <a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a></h2><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">s</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> numDecodings </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">m</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u7A7A\u5B57\u7B26\u4E32\u8FD4\u56DE0</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">m</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5B57\u7B26\u4E32\u4E3A0\u8FD4\u56DE0</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u521D\u59CB\u5316\u52A8\u6001\u89C4\u5212\u6570\u7EC4\uFF0C\u56E0\u4E3A\u9700\u8981dp\u65B9\u7A0B\u5224\u65AD\u6700\u5927\u7684\u4F4D\u6570\u4E3A\u4E24\u4F4D\uFF0C\u6240\u4EE5\u9700\u8981\u5728\u539F\u59CB\u6570\u7EC4\u524D\u9762\u8865\u8DB3\u4E00\u4F4D\u957F\u5EA6\u4E3Am+1</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Uint32Array</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">m</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u8865\u8DB3\u4F4D\u9ED8\u8BA4\u503C\u4E3A1\uFF0C\u56E0\u4E3A\u524D\u4E24\u4F4D\u6EE1\u8DB3\u4E24\u4F4Ddp\u65B9\u7A0B\uFF0C\u9898\u89E3\u52A01</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u7B2C\u4E00\u4F4D\u8BBE\u7F6E\u4E3A1\uFF0C\u5E94\u4E3A\u5355\u4E2A\u6570\u5B57\u6C38\u8FDC\u9898\u89E3\u4E3A1</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u83B7\u53D6\u5F53\u524D\u5F52\u8FD8\u6700\u540E\u4E00\u4F4D\u6570\u5B57</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Number</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">9</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u6EE1\u8DB3\u4E00\u4F4D\u6570\u5B57\u6761\u4EF6\u5F53\u524D\u4F4D\u7F6E\u9898\u89E3\u4E3A\u524D\u4E00\u4F4D\u9898\u89E3\u52A0\u5F53\u524D\u9898\u89E3</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Number</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">26</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u6EE1\u8DB3\u4E24\u4F4D\u6570\u5B57\u6761\u4EF6\u5F53\u524D\u4F4D\u7F6E\u9898\u89E3\u4E3A\u524D\u4E24\u4F4D\u9898\u89E3\u52A0\u5F53\u524D\u9898\u89E3</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u6700\u7EC8\u89E3\u4E3Adp\u6570\u7EC4\u6700\u540E\u4E00\u4F4D</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">m</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function t(c,r,F,y,D,C){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};