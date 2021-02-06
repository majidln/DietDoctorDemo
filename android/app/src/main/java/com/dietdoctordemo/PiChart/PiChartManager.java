package com.dietdoctordemo.PiChart;

import android.graphics.Color;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.react.views.view.ReactViewManager;
import com.github.mikephil.charting.charts.LineChart;
import com.github.mikephil.charting.charts.PieChart;
import com.github.mikephil.charting.data.DataSet;
import com.github.mikephil.charting.data.Entry;
import com.github.mikephil.charting.data.LineData;
import com.github.mikephil.charting.data.LineDataSet;
import com.github.mikephil.charting.data.PieData;
import com.github.mikephil.charting.data.PieDataSet;
import com.github.mikephil.charting.data.PieEntry;
import com.github.mikephil.charting.highlight.Highlight;
import com.github.mikephil.charting.listener.OnChartValueSelectedListener;
import com.github.mikephil.charting.utils.ColorTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class PiChartManager extends SimpleViewManager<PieChart> {
    public static final String REACT_CLASS = "PiChartView";
    PieDataSet dataSet;

    public PiChartManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
        dataSet = new PieDataSet( new ArrayList(), "");

    }

    ReactApplicationContext mCallerContext;
    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
            .put(
                "topChange",
                MapBuilder.of(
                    "phasedRegistrationNames",
                    MapBuilder.of("bubbled", "onChange")))
                    .build();
    }

    @NonNull
    @Override
    protected PieChart createViewInstance(@NonNull ThemedReactContext reactContext) {
        PieChart chart = new PieChart(reactContext);
        chart.setDrawHoleEnabled(false);
        chart.setOnChartValueSelectedListener(new OnChartValueSelectedListener() {
            @Override
            public void onValueSelected(Entry e, Highlight h) {
                if (e == null)
                    return;
//                Toast.makeText(reactContext, "Value: " + e.getY() + ", index: " + h.getX() + ", DataSet index: " + h.getDataSetIndex(), Toast.LENGTH_LONG).show();
                WritableMap event = Arguments.createMap();
                event.putInt("selectedIndex", (int) h.getX());
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                    chart.getId(),
                    "topChange",
                    event);
            }

            @Override
            public void onNothingSelected() {

            }
        });
        return chart;
    }

    @ReactProp(name = "selectedIndex")
    public void setSelectedIndex(PieChart pieChart, @Nullable Integer selectedIndex) {
        // TODO highlight selected item in chart
    }

    @ReactProp(name = "data")
    public void setData(PieChart pieChart, @Nullable ReadableArray data) {
        ArrayList<PieEntry> entries = new ArrayList<>();

        for (int i = 0; i < data.size(); i++) {
            entries.add(new PieEntry((float) data.getDouble(i)));
        }
        dataSet.setValues(entries);
        setChartDataSet((pieChart));
    }



    @ReactProp(name = "colors")
    public void setColors(PieChart pieChart, @Nullable ReadableArray colors) {
//        ArrayList<Object> dataObjects = data.;
        ArrayList<Integer> chartColors = new ArrayList<>();

        for (int i = 0; i < colors.size(); i++) {
            int color = Color.parseColor( colors.getString(i));
            chartColors.add(color);
        }
        dataSet.setColors(chartColors);
        setChartDataSet((pieChart));
    }

    private void setChartDataSet(PieChart pieChart) {
        PieData pieData = new PieData(dataSet);
        pieChart.setData(pieData);
    }
}
