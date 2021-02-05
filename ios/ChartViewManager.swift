//
//  ChartViewManager.swift
//  DietDoctorDemo
//
//  Created by Majid on 2/5/21.
//

import Foundation

@objc(ChartViewManager)
class ChartViewManager: RCTViewManager {
  override func view() -> UIView! {
    return ChartView()
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
