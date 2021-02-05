//
//  ChartView.swift
//  DietDoctorDemo
//
//  Created by Majid on 2/5/21.
//


import UIKit
import Charts

class ChartView: UIView {
  
  lazy var lineChartView: PieChartView = {
    let chartView = PieChartView()
    chartView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    
    return chartView
  }()
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.addSubview(lineChartView)
    //      setData()
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  func setData(yValues: [ChartDataEntry]) {
    let set1 = LineChartDataSet(entries: yValues, label: "yValues")
    let data = LineChartData(dataSet: set1)
    
    lineChartView.data = data
  }
  
  func setChart(values: [Double]) {
    lineChartView.noDataText = "you need to provide data for chart"
    
    var dataEntries: [ChartDataEntry] = []
    //pieChart.centerText = " "
    for i in 0..<values.count {
      let dataEntry = ChartDataEntry(x: values[i], y: Double(i))
      dataEntries.append(dataEntry)
    }
    
    let pieChartDataSet = PieChartDataSet(entries: dataEntries, label: "")
    var colors: [UIColor] = []
    for _ in 0..<values.count {
      let red = Double(arc4random_uniform(256))
      let green = Double(arc4random_uniform(256))
      let blue = Double(arc4random_uniform(256))
      
      let color = UIColor(red: CGFloat(red/255), green: CGFloat(green/255), blue: CGFloat(blue/255), alpha: 1)
      colors.append(color)
      pieChartDataSet.colors = colors
    }
    
    let pieChartData = PieChartData(dataSet: pieChartDataSet)
    
    lineChartView.data = pieChartData
    //              pieChartData.animate(yAxisDuration: 2.0, easingOption: .EaseInOutBack)
  }
  
  @objc var data:NSArray = [] {
    didSet {
      let data2 = [25.0,37.5,12.5,12.5,12.5] // pie chart data
      let status3 = ["A","B","C","D","E"] // status
      print(data)
      setChart(values: data as! [Double])
    }
  }
  
  //  @objc var count:Double = 0 {
  //    didSet {
  //
  //      let yValues: [ChartDataEntry] = [
  //        ChartDataEntry(x: count, y : 10.0),
  //        ChartDataEntry(x: 5.0, y : 12.0),
  //        ChartDataEntry(x: 7.0, y : 14.0),
  //        ChartDataEntry(x: 8.0, y : 15.0)
  //      ]
  //
  //      setData(yValues: yValues)
  //    }
  //  }
  //  override init(frame: CGRect) {
  //    super.init(frame: frame)
  //    self.addSubview(button)
  //    increment()
  //  }
  //  required init?(coder aDecoder: NSCoder) {
  //    fatalError("init(coder:) has not been implemented")
  //  }
  //  lazy var button: UIButton = {
  //    let b = UIButton.init(type: UIButton.ButtonType.system)
  //    b.titleLabel?.font = UIFont.systemFont(ofSize: 50)
  //    b.autoresizingMask = [.flexibleWidth, .flexibleHeight]
  //    b.addTarget(
  //      self,
  //      action: #selector(increment),
  //      for: .touchUpInside
  //    )
  //    return b
  //  }()
  //  @objc func increment() {
  //    count = count.intValue + 1 as NSNumber
  //  }
}
