/* eslint-disable no-undef */

describe('Authentication', () => {
  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should enter correct number', async () => {
    await expect(element(by.id('homeView'))).toBeVisible();
    // await element(by.id('username')).typeText(Config.USERNAME);
    // await element(by.id('nextStep')).tap();

    // await expect(element(by.id('loginView'))).toBeVisible();
    // await element(by.id('password')).typeText(Config.PASSWORD);
    // await element(by.id('login')).tap();
  });
});

// describe('Example', () => {
//   beforeAll(async () => {
//     await device.launchApp();
//   });

//   beforeEach(async () => {
//     await device.reloadReactNative();
//   });

//   it('should have welcome screen', async () => {
//     await waitFor(element(by.id('homeView')))
//       .toBeVisible()
//       .withTimeout(10000);
//     await expect(element(by.id('homeView'))).toBeVisible();
//   });

//   // it('should have welcome screen', async () => {
//   //   await expect(element(by.id('homeView'))).toBeVisible();
//   // });

//   // it('should show hello screen after tap', async () => {
//   //   await element(by.id('hello_button')).tap();
//   //   await expect(element(by.text('Hello!!!'))).toBeVisible();
//   // });

//   // it('should show world screen after tap', async () => {
//   //   await element(by.id('world_button')).tap();
//   //   await expect(element(by.text('World!!!'))).toBeVisible();
//   // });
// });
