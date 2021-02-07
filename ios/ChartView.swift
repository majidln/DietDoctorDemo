//
//  ChartView.swift
//  DietDoctorDemo
//
//  Created by Majid on 2/5/21.
//


import UIKit
import Charts

class ChartView: UIView, ChartViewDelegate {
  
  lazy var pieChartView: PieChartView = {
    let chartView = PieChartView()
    chartView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    chartView.drawHoleEnabled = false;
    chartView.legend.enabled = false;
    chartView.delegate = self
    return chartView
  }()
  
  var pieChartDataSet:PieChartDataSet = PieChartDataSet(entries: [], label: "");
  @objc var onSelectedItem: RCTDirectEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.addSubview(pieChartView)
    
    // disable value in pie slice
    pieChartDataSet.drawValuesEnabled = false
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  func setChartDataSet() {
    pieChartView.data =  PieChartData(dataSet: pieChartDataSet)
    
  }
  
  @objc var data:NSArray = [] {
    didSet {
      // set public data set
      for i in 0..<data.count {
        let dataEntry = PieChartDataEntry(value: data[i] as! Double)
        pieChartDataSet.append(dataEntry)
      }
      setChartDataSet()
    }
  }
  
  @objc var colors:NSArray = [] {
     didSet {
        print(colors)
      var convertedColors: [UIColor] = []
      for i in 0..<colors.count {
        let hexString = colors[i] as! String
        let scanner = Scanner(string: hexString )
        if (hexString.hasPrefix("#")) {
            scanner.scanLocation = 1
        }
        var color: UInt32 = 0
        scanner.scanHexInt32(&color)
        let mask = 0x000000FF
        let r = Int(color >> 16) & mask
        let g = Int(color >> 8) & mask
        let b = Int(color) & mask
        let red   = CGFloat(r) / 255.0
        let green = CGFloat(g) / 255.0
        let blue  = CGFloat(b) / 255.0
        
        let chartColor = UIColor(red: CGFloat(red), green: CGFloat(green), blue: CGFloat(blue), alpha: 1)
        convertedColors.append(chartColor)
      }
      pieChartDataSet.colors = convertedColors
      setChartDataSet()
    }
   }
  
  @objc var selectedIndex:NSNumber? {
    didSet {
      // set public data set
      pieChartView.highlightValue(x: selectedIndex as! Double, dataSetIndex: 0, dataIndex: 0)
      pieChartDataSet.notifyDataSetChanged()
    }
  }
  
  
  @objc public func chartValueSelected(_ chartView: ChartViewBase, entry: ChartDataEntry, highlight: Highlight) {
    onSelectedItem!(["selectedIndex": Int(highlight.x)])
  }
  
}
