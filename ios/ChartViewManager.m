//
//  ChartViewManager.m
//  DietDoctorDemo
//
//  Created by Majid on 2/5/21.
//

#import <Foundation/Foundation.h>
#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(ChartViewManager, RCTViewManager)
  RCT_EXPORT_VIEW_PROPERTY(data, NSArray)
  RCT_EXPORT_VIEW_PROPERTY(colors, NSArray)
  RCT_EXPORT_VIEW_PROPERTY(selectedIndex, NSNumber)
  RCT_EXPORT_VIEW_PROPERTY(onSelectedItem, RCTDirectEventBlock)
@end
