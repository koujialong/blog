
最近一段时间因为公司的项目需求要画和股票相关的K线及分时图，仔细的研究了各种android绘图库后，决定用mpandroidchart这个库，原因是这个库无论是在功能还是可拓展性上都十分的优秀。如果小伙伴们也有相同的项目需求也可以试试这个库。如下是完成的效果图。
    ![效果图](/img/chart.jpg)
    
  话不多说先来简单的介绍一下这个库，库中的可以实现的图表有 LineChart, BarChart, ScatterChart, CandleStickChart, PieChart or RadarChart，但是最重要的是CombindHChart，这个图表可以实现绘制多种图形混合的图表，博主在这里趟过了很多的雷啊，说多了都是眼泪。如何使用mpandroidchart画图呢。 
    1.首先要关联这个库，这里方法就比较多了，可以用jar包或者是直接用As去compile。
    2.之后要把它定义到布局中，如下：
```
    <com.github.mikephil.charting.charts.CombinedChart
            android:id="@+id/chart"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
```
     之后再代码中找到它：
 

```
    CombinedChart chart = (CombinedChart) findViewById(R.id.chart);
``` 
    3.然后就是如何填充数据了以K线为例：
```
    final ArrayList<String> xValues = new ArrayList<String>();
    final ArrayList<CandleEntry> yVaues = new ArrayList<CandleEntry>();
    for (int i = 0; i < datas.size(); i++) {
            List<Double> data = datas.get(i);
            String converttime = convertTime(data.get(5));
            xValues.add(converttime);//这里填充蜡烛x轴的数据
            yVaues.add(x轴序号，当日最高，当日最低，开盘，收盘);//这里填充蜡烛的数据
     }
     CandleDataSet candleDataSet = new CandleDataSet(yVaues, "数据");
     //这里可以对蜡烛属性进行相关设置如颜色等属性
     CandleData candleData = new CandleData(xValues, candleDataSet);
     CombinedData combinedData=new CombinedData(xValues);
     combinedData.setData(candleData);//生成数据实体
     chart.setData(combinedData);//将数据实体放入图表
     chart.invalidate();//刷新图表
```
    到这里我们就绘制出最基本的K线图了。
    4.在项目中3中绘制的图是不能满足需求的，所以是时候展示mpandroidchart库的强大功能了，下面我们介绍一下如何去配置图表的x轴和y轴。
```
    //首先我们可以得到图表的轴
    YAxis leftYAxis = getAxisLeft();//获得左侧Y轴
    YAxis rightAxis = getAxisRight();//获得右侧Y轴
    //以下为配置轴属性的一些方法
    //控制轴的哪部分应该被绘制
    setEnabled(boolean enabled)://设置轴的打开或者关闭。如果关闭，坐标轴不会被绘制。
    setDrawAxisLine(boolean enabled): //设置为true，如果线在轴的侧面应该被画，否则不。
    setDrawGridLines(boolean enabled): //设置为true打开绘制网格线对于轴来说。
    setDrawLabels(boolean enabled)://设置为true打开绘制轴的标签。
    //修改轴线样式
	setTextColor(int color): 设置轴标签的颜色。
	setTextSize(float size):设置轴标签的字体大小以dp为单位。
	setTypeface(Typeface tf):设置轴标签的自定义Typeface
	setGridColor(int color): 设置这个轴的网格线颜色。
	setGridLineWidth(float width):设置轴的网格线宽度。
	setAxisLineColor(int color):设置此轴的坐标轴的颜色。
	setAxisLineWidth(float width): 设置此轴的坐标轴的宽度。
	enableGridDashedLine(float lineLength, float spaceLength, float phase): 激活网格线虚线模式，有点像"- - - - - -"。"lineLength"控制短线条的长度，"spaceLength"控制两段线之间的间隔长度，"phase"控制开始的点。
	//限制线
	addLimitLine(LimitLine l): 添加一个新的LimitLine到轴上。
	removeLimitLine(LimitLine l): 从轴上移除一个指定的LimitLine。 多个方法也适用于添加或者移除。
	setDrawLimitLinesBehindData(boolean enabled): 允许控制Z轴顺序在LimitLines和真实数据之间。如果设置true，LimitLines绘制在真实数据后面，否则在上面，默认：false
	//x轴配置
	setAdjustXLabels(boolean enabled):如果被设置为true，x轴条目将依赖于它自己在进行缩放的时候。如果设置为false，x轴条目将总是保持相同。
	setAvoidFirstLastClipping(boolean enabled):如果设置为true，图表将避免第一个和最后一个标签条目被减掉在图表或屏幕的边缘。
	setSpaceBetweenLabels(int characters): 设置x轴标签之间的空间字符数，默认是4个。
	setPosition(XAxisPosition pos):设置XAxis应该出现的位置。可以选TOP，BOTTOM，BOTH_SIDED，TOP_INSIDE或者BOTTOM_INSIDE。
	//Y轴配置
	setStartAtZero(boolean enabled):如果这个打开，轴线总是有最小值0,无论什么类型的图表被展示。
	setAxisMaxValue(float max):设置一个自定义的最大值为这条轴，如果设置了，这个值将不会依赖于提供的数据自动计算。
	resetAxisMaxValue(): 调用这个将撤销以前设置的最大值。这意味着，你将再次允许轴自动计算它的最大值。
	setAxisMinValue(float min): 设置一个自定义的最小值。如果设置了，这个值将不会依赖于你提供的数据进行自动计算。
	resetAxisMinValue():调用这个方法撤销以前设置的最小值。这意味着，你将再次允许轴自动计算他的最小值。
	setInverted(boolean enabled): 如果设置为true，这个轴将被反向，那意味着最高出的将到底部，最低部的到顶端。
	setSpaceTop(float percent):设置在图表上最高处的值相比轴上最高值的顶端空间（总轴范围的百分比）
	setSpaceBottom(float percent): 设置在图表上最低处的值相比轴上最低处值的底部空间（总轴范围的百分比）
	setShowOnlyMinMax(boolean enabled): 如果打开了，这个轴将展示出它的最小值和最大值。这将忽略或者覆盖定义过的label-count。
	setPosition(YAxisLabelPosition pos):设置轴标签应该被绘制的位置。INSIDE_CHART或者OUTSIDE_CHART中的一个。 自定义影响轴的数值范围应该在图表被设置数据之前应用。
	setAutoScaleMinMaxEnabled(true);这是一个很有意思的功能，如何设置为true你的图的Y轴会根据填充数据的大小伸缩y轴的刻度，这样在你拖动图表的时候你的图会动起来很有趣。
```
    以上为轴线的一些配置方法，小伙伴们可以根据项目的不同需求进行不同的配置。
    5。相关手势事件的监听
```
//OnChartGestureListener将允许你对图表上的手势作出反应：

        public interface OnChartGestureListener {

            /**
             * Callbacks when the chart is longpressed.
             * 
             * @param me
             */
            public void onChartLongPressed(MotionEvent me);

            /**
             * Callbacks when the chart is double-tapped.
             * 
             * @param me
             */
            public void onChartDoubleTapped(MotionEvent me);

            /**
             * Callbacks when the chart is single-tapped.
             * 
             * @param me
             */
            public void onChartSingleTapped(MotionEvent me);

            /**
             * Callbacks then a fling gesture is made on the chart.
             * 
             * @param me1
             * @param me2
             * @param velocityX
             * @param velocityY
             */
            public void onChartFling(MotionEvent me1, MotionEvent me2, float velocityX, float velocityY);
        }
```
    以上就是我对mpandroidchart的一些理解，欢迎大家指正与修改，如果有小伙伴有问题可以直接提问哦。

MPAndroidChart股票优化库源码：[源代码](http://download.csdn.net/download/spy_develop/10256656)
MPAndroidChart股票优化库aar包：[aar包](http://download.csdn.net/download/spy_develop/10256682)
MPAndroidChart股票优化库GitHub：[仓库地址](https://github.com/spykjl/MPAndroidChart)