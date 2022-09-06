import{_ as s,c as n,o as a,a as l}from"./app.b4e2bfe8.js";const e="/blog/img/chart.jpg",h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"android/chart.md"}'),p={name:"android/chart.md"},t=l('<p>\u6700\u8FD1\u4E00\u6BB5\u65F6\u95F4\u56E0\u4E3A\u516C\u53F8\u7684\u9879\u76EE\u9700\u6C42\u8981\u753B\u548C\u80A1\u7968\u76F8\u5173\u7684K\u7EBF\u53CA\u5206\u65F6\u56FE\uFF0C\u4ED4\u7EC6\u7684\u7814\u7A76\u4E86\u5404\u79CDandroid\u7ED8\u56FE\u5E93\u540E\uFF0C\u51B3\u5B9A\u7528mpandroidchart\u8FD9\u4E2A\u5E93\uFF0C\u539F\u56E0\u662F\u8FD9\u4E2A\u5E93\u65E0\u8BBA\u662F\u5728\u529F\u80FD\u8FD8\u662F\u53EF\u62D3\u5C55\u6027\u4E0A\u90FD\u5341\u5206\u7684\u4F18\u79C0\u3002\u5982\u679C\u5C0F\u4F19\u4F34\u4EEC\u4E5F\u6709\u76F8\u540C\u7684\u9879\u76EE\u9700\u6C42\u4E5F\u53EF\u4EE5\u8BD5\u8BD5\u8FD9\u4E2A\u5E93\u3002\u5982\u4E0B\u662F\u5B8C\u6210\u7684\u6548\u679C\u56FE\u3002 <img src="'+e+`" alt="\u6548\u679C\u56FE"></p><p>\u8BDD\u4E0D\u591A\u8BF4\u5148\u6765\u7B80\u5355\u7684\u4ECB\u7ECD\u4E00\u4E0B\u8FD9\u4E2A\u5E93\uFF0C\u5E93\u4E2D\u7684\u53EF\u4EE5\u5B9E\u73B0\u7684\u56FE\u8868\u6709 LineChart, BarChart, ScatterChart, CandleStickChart, PieChart or RadarChart\uFF0C\u4F46\u662F\u6700\u91CD\u8981\u7684\u662FCombindHChart\uFF0C\u8FD9\u4E2A\u56FE\u8868\u53EF\u4EE5\u5B9E\u73B0\u7ED8\u5236\u591A\u79CD\u56FE\u5F62\u6DF7\u5408\u7684\u56FE\u8868\uFF0C\u535A\u4E3B\u5728\u8FD9\u91CC\u8D9F\u8FC7\u4E86\u5F88\u591A\u7684\u96F7\u554A\uFF0C\u8BF4\u591A\u4E86\u90FD\u662F\u773C\u6CEA\u3002\u5982\u4F55\u4F7F\u7528mpandroidchart\u753B\u56FE\u5462\u3002 1.\u9996\u5148\u8981\u5173\u8054\u8FD9\u4E2A\u5E93\uFF0C\u8FD9\u91CC\u65B9\u6CD5\u5C31\u6BD4\u8F83\u591A\u4E86\uFF0C\u53EF\u4EE5\u7528jar\u5305\u6216\u8005\u662F\u76F4\u63A5\u7528As\u53BBcompile\u3002 2.\u4E4B\u540E\u8981\u628A\u5B83\u5B9A\u4E49\u5230\u5E03\u5C40\u4E2D\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    &lt;com.github.mikephil.charting.charts.CombinedChart</span></span>
<span class="line"><span style="color:#A6ACCD;">            android:id=&quot;@+id/chart&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            android:layout_width=&quot;match_parent&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            android:layout_height=&quot;match_parent&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code> \u4E4B\u540E\u518D\u4EE3\u7801\u4E2D\u627E\u5230\u5B83\uFF1A
</code></pre><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    CombinedChart chart = (CombinedChart) findViewById(R.id.chart);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>3.\u7136\u540E\u5C31\u662F\u5982\u4F55\u586B\u5145\u6570\u636E\u4E86\u4EE5K\u7EBF\u4E3A\u4F8B\uFF1A
</code></pre><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    final ArrayList&lt;String&gt; xValues = new ArrayList&lt;String&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">    final ArrayList&lt;CandleEntry&gt; yVaues = new ArrayList&lt;CandleEntry&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (int i = 0; i &lt; datas.size(); i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            List&lt;Double&gt; data = datas.get(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">            String converttime = convertTime(data.get(5));</span></span>
<span class="line"><span style="color:#A6ACCD;">            xValues.add(converttime);//\u8FD9\u91CC\u586B\u5145\u8721\u70DBx\u8F74\u7684\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">            yVaues.add(x\u8F74\u5E8F\u53F7\uFF0C\u5F53\u65E5\u6700\u9AD8\uFF0C\u5F53\u65E5\u6700\u4F4E\uFF0C\u5F00\u76D8\uFF0C\u6536\u76D8);//\u8FD9\u91CC\u586B\u5145\u8721\u70DB\u7684\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     CandleDataSet candleDataSet = new CandleDataSet(yVaues, &quot;\u6570\u636E&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     //\u8FD9\u91CC\u53EF\u4EE5\u5BF9\u8721\u70DB\u5C5E\u6027\u8FDB\u884C\u76F8\u5173\u8BBE\u7F6E\u5982\u989C\u8272\u7B49\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">     CandleData candleData = new CandleData(xValues, candleDataSet);</span></span>
<span class="line"><span style="color:#A6ACCD;">     CombinedData combinedData=new CombinedData(xValues);</span></span>
<span class="line"><span style="color:#A6ACCD;">     combinedData.setData(candleData);//\u751F\u6210\u6570\u636E\u5B9E\u4F53</span></span>
<span class="line"><span style="color:#A6ACCD;">     chart.setData(combinedData);//\u5C06\u6570\u636E\u5B9E\u4F53\u653E\u5165\u56FE\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">     chart.invalidate();//\u5237\u65B0\u56FE\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>\u5230\u8FD9\u91CC\u6211\u4EEC\u5C31\u7ED8\u5236\u51FA\u6700\u57FA\u672C\u7684K\u7EBF\u56FE\u4E86\u3002
4.\u5728\u9879\u76EE\u4E2D3\u4E2D\u7ED8\u5236\u7684\u56FE\u662F\u4E0D\u80FD\u6EE1\u8DB3\u9700\u6C42\u7684\uFF0C\u6240\u4EE5\u662F\u65F6\u5019\u5C55\u793Ampandroidchart\u5E93\u7684\u5F3A\u5927\u529F\u80FD\u4E86\uFF0C\u4E0B\u9762\u6211\u4EEC\u4ECB\u7ECD\u4E00\u4E0B\u5982\u4F55\u53BB\u914D\u7F6E\u56FE\u8868\u7684x\u8F74\u548Cy\u8F74\u3002
</code></pre><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    //\u9996\u5148\u6211\u4EEC\u53EF\u4EE5\u5F97\u5230\u56FE\u8868\u7684\u8F74</span></span>
<span class="line"><span style="color:#A6ACCD;">    YAxis leftYAxis = getAxisLeft();//\u83B7\u5F97\u5DE6\u4FA7Y\u8F74</span></span>
<span class="line"><span style="color:#A6ACCD;">    YAxis rightAxis = getAxisRight();//\u83B7\u5F97\u53F3\u4FA7Y\u8F74</span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u4EE5\u4E0B\u4E3A\u914D\u7F6E\u8F74\u5C5E\u6027\u7684\u4E00\u4E9B\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u63A7\u5236\u8F74\u7684\u54EA\u90E8\u5206\u5E94\u8BE5\u88AB\u7ED8\u5236</span></span>
<span class="line"><span style="color:#A6ACCD;">    setEnabled(boolean enabled)://\u8BBE\u7F6E\u8F74\u7684\u6253\u5F00\u6216\u8005\u5173\u95ED\u3002\u5982\u679C\u5173\u95ED\uFF0C\u5750\u6807\u8F74\u4E0D\u4F1A\u88AB\u7ED8\u5236\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    setDrawAxisLine(boolean enabled): //\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5982\u679C\u7EBF\u5728\u8F74\u7684\u4FA7\u9762\u5E94\u8BE5\u88AB\u753B\uFF0C\u5426\u5219\u4E0D\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    setDrawGridLines(boolean enabled): //\u8BBE\u7F6E\u4E3Atrue\u6253\u5F00\u7ED8\u5236\u7F51\u683C\u7EBF\u5BF9\u4E8E\u8F74\u6765\u8BF4\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    setDrawLabels(boolean enabled)://\u8BBE\u7F6E\u4E3Atrue\u6253\u5F00\u7ED8\u5236\u8F74\u7684\u6807\u7B7E\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u4FEE\u6539\u8F74\u7EBF\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">	setTextColor(int color): \u8BBE\u7F6E\u8F74\u6807\u7B7E\u7684\u989C\u8272\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	setTextSize(float size):\u8BBE\u7F6E\u8F74\u6807\u7B7E\u7684\u5B57\u4F53\u5927\u5C0F\u4EE5dp\u4E3A\u5355\u4F4D\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	setTypeface(Typeface tf):\u8BBE\u7F6E\u8F74\u6807\u7B7E\u7684\u81EA\u5B9A\u4E49Typeface</span></span>
<span class="line"><span style="color:#A6ACCD;">	setGridColor(int color): \u8BBE\u7F6E\u8FD9\u4E2A\u8F74\u7684\u7F51\u683C\u7EBF\u989C\u8272\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	setGridLineWidth(float width):\u8BBE\u7F6E\u8F74\u7684\u7F51\u683C\u7EBF\u5BBD\u5EA6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	setAxisLineColor(int color):\u8BBE\u7F6E\u6B64\u8F74\u7684\u5750\u6807\u8F74\u7684\u989C\u8272\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	setAxisLineWidth(float width): \u8BBE\u7F6E\u6B64\u8F74\u7684\u5750\u6807\u8F74\u7684\u5BBD\u5EA6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	enableGridDashedLine(float lineLength, float spaceLength, float phase): \u6FC0\u6D3B\u7F51\u683C\u7EBF\u865A\u7EBF\u6A21\u5F0F\uFF0C\u6709\u70B9\u50CF&quot;- - - - - -&quot;\u3002&quot;lineLength&quot;\u63A7\u5236\u77ED\u7EBF\u6761\u7684\u957F\u5EA6\uFF0C&quot;spaceLength&quot;\u63A7\u5236\u4E24\u6BB5\u7EBF\u4E4B\u95F4\u7684\u95F4\u9694\u957F\u5EA6\uFF0C&quot;phase&quot;\u63A7\u5236\u5F00\u59CB\u7684\u70B9\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	//\u9650\u5236\u7EBF</span></span>
<span class="line"><span style="color:#A6ACCD;">	addLimitLine(LimitLine l): \u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684LimitLine\u5230\u8F74\u4E0A\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	removeLimitLine(LimitLine l): \u4ECE\u8F74\u4E0A\u79FB\u9664\u4E00\u4E2A\u6307\u5B9A\u7684LimitLine\u3002 \u591A\u4E2A\u65B9\u6CD5\u4E5F\u9002\u7528\u4E8E\u6DFB\u52A0\u6216\u8005\u79FB\u9664\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	setDrawLimitLinesBehindData(boolean enabled): \u5141\u8BB8\u63A7\u5236Z\u8F74\u987A\u5E8F\u5728LimitLines\u548C\u771F\u5B9E\u6570\u636E\u4E4B\u95F4\u3002\u5982\u679C\u8BBE\u7F6Etrue\uFF0CLimitLines\u7ED8\u5236\u5728\u771F\u5B9E\u6570\u636E\u540E\u9762\uFF0C\u5426\u5219\u5728\u4E0A\u9762\uFF0C\u9ED8\u8BA4\uFF1Afalse</span></span>
<span class="line"><span style="color:#A6ACCD;">	//x\u8F74\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">	setAdjustXLabels(boolean enabled):\u5982\u679C\u88AB\u8BBE\u7F6E\u4E3Atrue\uFF0Cx\u8F74\u6761\u76EE\u5C06\u4F9D\u8D56\u4E8E\u5B83\u81EA\u5DF1\u5728\u8FDB\u884C\u7F29\u653E\u7684\u65F6\u5019\u3002\u5982\u679C\u8BBE\u7F6E\u4E3Afalse\uFF0Cx\u8F74\u6761\u76EE\u5C06\u603B\u662F\u4FDD\u6301\u76F8\u540C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	setAvoidFirstLastClipping(boolean enabled):\u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u56FE\u8868\u5C06\u907F\u514D\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u6807\u7B7E\u6761\u76EE\u88AB\u51CF\u6389\u5728\u56FE\u8868\u6216\u5C4F\u5E55\u7684\u8FB9\u7F18\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	setSpaceBetweenLabels(int characters): \u8BBE\u7F6Ex\u8F74\u6807\u7B7E\u4E4B\u95F4\u7684\u7A7A\u95F4\u5B57\u7B26\u6570\uFF0C\u9ED8\u8BA4\u662F4\u4E2A\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	setPosition(XAxisPosition pos):\u8BBE\u7F6EXAxis\u5E94\u8BE5\u51FA\u73B0\u7684\u4F4D\u7F6E\u3002\u53EF\u4EE5\u9009TOP\uFF0CBOTTOM\uFF0CBOTH_SIDED\uFF0CTOP_INSIDE\u6216\u8005BOTTOM_INSIDE\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	//Y\u8F74\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">	setStartAtZero(boolean enabled):\u5982\u679C\u8FD9\u4E2A\u6253\u5F00\uFF0C\u8F74\u7EBF\u603B\u662F\u6709\u6700\u5C0F\u503C0,\u65E0\u8BBA\u4EC0\u4E48\u7C7B\u578B\u7684\u56FE\u8868\u88AB\u5C55\u793A\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	setAxisMaxValue(float max):\u8BBE\u7F6E\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u6700\u5927\u503C\u4E3A\u8FD9\u6761\u8F74\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86\uFF0C\u8FD9\u4E2A\u503C\u5C06\u4E0D\u4F1A\u4F9D\u8D56\u4E8E\u63D0\u4F9B\u7684\u6570\u636E\u81EA\u52A8\u8BA1\u7B97\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	resetAxisMaxValue(): \u8C03\u7528\u8FD9\u4E2A\u5C06\u64A4\u9500\u4EE5\u524D\u8BBE\u7F6E\u7684\u6700\u5927\u503C\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u4F60\u5C06\u518D\u6B21\u5141\u8BB8\u8F74\u81EA\u52A8\u8BA1\u7B97\u5B83\u7684\u6700\u5927\u503C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	setAxisMinValue(float min): \u8BBE\u7F6E\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u6700\u5C0F\u503C\u3002\u5982\u679C\u8BBE\u7F6E\u4E86\uFF0C\u8FD9\u4E2A\u503C\u5C06\u4E0D\u4F1A\u4F9D\u8D56\u4E8E\u4F60\u63D0\u4F9B\u7684\u6570\u636E\u8FDB\u884C\u81EA\u52A8\u8BA1\u7B97\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	resetAxisMinValue():\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u64A4\u9500\u4EE5\u524D\u8BBE\u7F6E\u7684\u6700\u5C0F\u503C\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u4F60\u5C06\u518D\u6B21\u5141\u8BB8\u8F74\u81EA\u52A8\u8BA1\u7B97\u4ED6\u7684\u6700\u5C0F\u503C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	setInverted(boolean enabled): \u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u8FD9\u4E2A\u8F74\u5C06\u88AB\u53CD\u5411\uFF0C\u90A3\u610F\u5473\u7740\u6700\u9AD8\u51FA\u7684\u5C06\u5230\u5E95\u90E8\uFF0C\u6700\u4F4E\u90E8\u7684\u5230\u9876\u7AEF\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	setSpaceTop(float percent):\u8BBE\u7F6E\u5728\u56FE\u8868\u4E0A\u6700\u9AD8\u5904\u7684\u503C\u76F8\u6BD4\u8F74\u4E0A\u6700\u9AD8\u503C\u7684\u9876\u7AEF\u7A7A\u95F4\uFF08\u603B\u8F74\u8303\u56F4\u7684\u767E\u5206\u6BD4\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">	setSpaceBottom(float percent): \u8BBE\u7F6E\u5728\u56FE\u8868\u4E0A\u6700\u4F4E\u5904\u7684\u503C\u76F8\u6BD4\u8F74\u4E0A\u6700\u4F4E\u5904\u503C\u7684\u5E95\u90E8\u7A7A\u95F4\uFF08\u603B\u8F74\u8303\u56F4\u7684\u767E\u5206\u6BD4\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">	setShowOnlyMinMax(boolean enabled): \u5982\u679C\u6253\u5F00\u4E86\uFF0C\u8FD9\u4E2A\u8F74\u5C06\u5C55\u793A\u51FA\u5B83\u7684\u6700\u5C0F\u503C\u548C\u6700\u5927\u503C\u3002\u8FD9\u5C06\u5FFD\u7565\u6216\u8005\u8986\u76D6\u5B9A\u4E49\u8FC7\u7684label-count\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	setPosition(YAxisLabelPosition pos):\u8BBE\u7F6E\u8F74\u6807\u7B7E\u5E94\u8BE5\u88AB\u7ED8\u5236\u7684\u4F4D\u7F6E\u3002INSIDE_CHART\u6216\u8005OUTSIDE_CHART\u4E2D\u7684\u4E00\u4E2A\u3002 \u81EA\u5B9A\u4E49\u5F71\u54CD\u8F74\u7684\u6570\u503C\u8303\u56F4\u5E94\u8BE5\u5728\u56FE\u8868\u88AB\u8BBE\u7F6E\u6570\u636E\u4E4B\u524D\u5E94\u7528\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	setAutoScaleMinMaxEnabled(true);\u8FD9\u662F\u4E00\u4E2A\u5F88\u6709\u610F\u601D\u7684\u529F\u80FD\uFF0C\u5982\u4F55\u8BBE\u7F6E\u4E3Atrue\u4F60\u7684\u56FE\u7684Y\u8F74\u4F1A\u6839\u636E\u586B\u5145\u6570\u636E\u7684\u5927\u5C0F\u4F38\u7F29y\u8F74\u7684\u523B\u5EA6\uFF0C\u8FD9\u6837\u5728\u4F60\u62D6\u52A8\u56FE\u8868\u7684\u65F6\u5019\u4F60\u7684\u56FE\u4F1A\u52A8\u8D77\u6765\u5F88\u6709\u8DA3\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>\u4EE5\u4E0A\u4E3A\u8F74\u7EBF\u7684\u4E00\u4E9B\u914D\u7F6E\u65B9\u6CD5\uFF0C\u5C0F\u4F19\u4F34\u4EEC\u53EF\u4EE5\u6839\u636E\u9879\u76EE\u7684\u4E0D\u540C\u9700\u6C42\u8FDB\u884C\u4E0D\u540C\u7684\u914D\u7F6E\u3002
5\u3002\u76F8\u5173\u624B\u52BF\u4E8B\u4EF6\u7684\u76D1\u542C
</code></pre><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//OnChartGestureListener\u5C06\u5141\u8BB8\u4F60\u5BF9\u56FE\u8868\u4E0A\u7684\u624B\u52BF\u4F5C\u51FA\u53CD\u5E94\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        public interface OnChartGestureListener {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /**</span></span>
<span class="line"><span style="color:#A6ACCD;">             * Callbacks when the chart is longpressed.</span></span>
<span class="line"><span style="color:#A6ACCD;">             * </span></span>
<span class="line"><span style="color:#A6ACCD;">             * @param me</span></span>
<span class="line"><span style="color:#A6ACCD;">             */</span></span>
<span class="line"><span style="color:#A6ACCD;">            public void onChartLongPressed(MotionEvent me);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /**</span></span>
<span class="line"><span style="color:#A6ACCD;">             * Callbacks when the chart is double-tapped.</span></span>
<span class="line"><span style="color:#A6ACCD;">             * </span></span>
<span class="line"><span style="color:#A6ACCD;">             * @param me</span></span>
<span class="line"><span style="color:#A6ACCD;">             */</span></span>
<span class="line"><span style="color:#A6ACCD;">            public void onChartDoubleTapped(MotionEvent me);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /**</span></span>
<span class="line"><span style="color:#A6ACCD;">             * Callbacks when the chart is single-tapped.</span></span>
<span class="line"><span style="color:#A6ACCD;">             * </span></span>
<span class="line"><span style="color:#A6ACCD;">             * @param me</span></span>
<span class="line"><span style="color:#A6ACCD;">             */</span></span>
<span class="line"><span style="color:#A6ACCD;">            public void onChartSingleTapped(MotionEvent me);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /**</span></span>
<span class="line"><span style="color:#A6ACCD;">             * Callbacks then a fling gesture is made on the chart.</span></span>
<span class="line"><span style="color:#A6ACCD;">             * </span></span>
<span class="line"><span style="color:#A6ACCD;">             * @param me1</span></span>
<span class="line"><span style="color:#A6ACCD;">             * @param me2</span></span>
<span class="line"><span style="color:#A6ACCD;">             * @param velocityX</span></span>
<span class="line"><span style="color:#A6ACCD;">             * @param velocityY</span></span>
<span class="line"><span style="color:#A6ACCD;">             */</span></span>
<span class="line"><span style="color:#A6ACCD;">            public void onChartFling(MotionEvent me1, MotionEvent me2, float velocityX, float velocityY);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><pre><code>\u4EE5\u4E0A\u5C31\u662F\u6211\u5BF9mpandroidchart\u7684\u4E00\u4E9B\u7406\u89E3\uFF0C\u6B22\u8FCE\u5927\u5BB6\u6307\u6B63\u4E0E\u4FEE\u6539\uFF0C\u5982\u679C\u6709\u5C0F\u4F19\u4F34\u6709\u95EE\u9898\u53EF\u4EE5\u76F4\u63A5\u63D0\u95EE\u54E6\u3002
</code></pre><p>MPAndroidChart\u80A1\u7968\u4F18\u5316\u5E93\u6E90\u7801\uFF1A<a href="http://download.csdn.net/download/spy_develop/10256656" target="_blank" rel="noreferrer">\u6E90\u4EE3\u7801</a> MPAndroidChart\u80A1\u7968\u4F18\u5316\u5E93aar\u5305\uFF1A<a href="http://download.csdn.net/download/spy_develop/10256682" target="_blank" rel="noreferrer">aar\u5305</a> MPAndroidChart\u80A1\u7968\u4F18\u5316\u5E93GitHub\uFF1A<a href="https://github.com/spykjl/MPAndroidChart" target="_blank" rel="noreferrer">\u4ED3\u5E93\u5730\u5740</a></p>`,13),o=[t];function c(i,r,C,A,d,D){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{h as __pageData,u as default};
