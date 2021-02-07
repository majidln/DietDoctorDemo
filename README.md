## Diet Doctor React Native sample app
This writes in React Native. I tried to used the best practices in React Native such concern separation, component and e2e testing. 
Unfortunately I didn't know about your response data types so I created Typescripts interfaces with all types I saw in your responses.
This application writes in React Native. It has a native module for Pie-Chart view to show nutrition percentages. For the IOS Pie-Chart, I used [this](https://github.com/danielgindi/Charts) repo and for Android Pie-Chart I used [this](https://github.com/PhilJay/MPAndroidChart/commit/f6a398b) repository. I created a Javascript Wrapper for this library Pie-Chart to use its functionality in React-Native. On the React Native side, I created a PieChart component to wrap that native view manager.


### Features

- React Native
- GraphQl 
- Apollo Client
- TypeScript
- Pie Chart native module in IOS (Swift) and Android (Java)
- Detox e2e test
- Unit test with jest

### How to Run

##### Install dependencies
```sh
yarn
```
##### Run in android:
```sh
yarn start
yarn android
```
##### Run in IOS:
```sh
cd ios
pod install
cd ..
yarn start
yarn ios
```
##### Run test:
```sh
yarn test
```
##### Run e2e test in android
Install detox-cli globally in your system ```sh yarn add detox -g```.
Run emulator with name Pixel_2_API_29_1 or add your emulator name into ```detoxrc.json``` in android device advName section

```sh
yarn detox:build:android #build android debug.apk
yarn start
yarn detox:test:android #run e2e test in emulator
```
##### Run e2e test in IOS

```sh
yarn detox:build:ios #build android debug.apk
yarn start
yarn detox:test:ios #run e2e test in emulator
```
> Detox needs to get network images so it starts running, be patient to start running 


###Screenshots

Image:

###Screenshots

![Home](https://github.com/majidln/DietDoctorDemo/blob/main/screenshots/home.jpeg?raw=true | width=100)

![List](https://github.com/majidln/DietDoctorDemo/blob/main/screenshots/list.jpeg?raw=true | width=100)

![Detail](https://github.com/majidln/DietDoctorDemo/blob/main/screenshots/detail.JPEG?raw=true | width=100)

![UnitTests](https://github.com/majidln/DietDoctorDemo/blob/main/screenshots/test.png?raw=true | width=100)
