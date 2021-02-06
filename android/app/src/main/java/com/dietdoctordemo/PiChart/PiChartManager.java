package com.dietdoctordemo.PiChart;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.view.ReactViewManager;
import com.github.mikephil.charting.charts.LineChart;
import com.github.mikephil.charting.charts.PieChart;
import com.github.mikephil.charting.data.Entry;
import com.github.mikephil.charting.data.LineData;
import com.github.mikephil.charting.data.LineDataSet;
import com.github.mikephil.charting.data.PieData;
import com.github.mikephil.charting.data.PieDataSet;
import com.github.mikephil.charting.data.PieEntry;

import java.util.ArrayList;
import java.util.List;

public class PiChartManager extends SimpleViewManager<PieChart> {
    public static final String REACT_CLASS = "PiChart";

    public PiChartManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    ReactApplicationContext mCallerContext;
    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected PieChart createViewInstance(@NonNull ThemedReactContext reactContext) {
        PieChart chart = new PieChart(reactContext);
        List<Entry> entries = new ArrayList<>();
//        LineDataSet dataSet = new LineDataSet(entries, "Label");
//        LineData lineData = new LineData(dataSet);
//        chart.setData(lineData);
        return chart;
    }

    @ReactProp(name = "data")
    public void setData(PieChart pieChart, @Nullable ReadableArray data) {
//        ArrayList<Object> dataObjects = data.;
        ArrayList<PieEntry> entries = new ArrayList<>();

        for (int i = 0; i < data.size(); i++) {
            entries.add(new PieEntry((float) data.getDouble(i)));
        }
        PieDataSet dataSet = new PieDataSet(entries, "");
        dataSet.setDrawIcons(false);
        PieData pieData = new PieData(dataSet);
        pieChart.setData(pieData);
        //view.setSource(sources);
    }
}
