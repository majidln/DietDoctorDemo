describe('App', () => {
  beforeEach(async () => {
    await device.launchApp({
      newInstance: true,
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show home and detail', async () => {
    // open home screen
    await expect(element(by.id('homeView'))).toBeVisible();

    // scroll home list to the right
    await element(by.id('homeListRecipes')).scroll(250, 'right');
    // tap second item of list and go to detail
    await element(by.id('homeListRecipesItem-1')).tap();

    // open detail screen
    await expect(element(by.id('detailView'))).toBeVisible();
    // open detail screen
    await element(by.id('detailScroll')).scroll(300, 'down');
    // scroll tag list
    await element(by.id('tagList')).swipe('left', 'fast', 0.5);
    await element(by.id('detailScroll')).swipe('up', 'fast', 0.5);
  });

  it('should show list and detail', async () => {
    // open home screen
    await expect(element(by.id('homeView'))).toBeVisible();

    // go to the list
    await element(by.id('viewAllBtn')).tap();

    // open list screen
    await expect(element(by.id('listView'))).toBeVisible();
    await element(by.id('listRecipes')).scroll(250, 'bottom');

    // select second item
    await element(by.id('listRecipes-1')).tap();

    // open detail screen
    await expect(element(by.id('detailView'))).toBeVisible();
    // open detail screen
    await element(by.id('detailScroll')).scroll(300, 'down');
    // scroll tag list
    await element(by.id('tagList')).swipe('left', 'fast', 0.5);
    await element(by.id('detailScroll')).swipe('up', 'fast', 0.5);
  });
});
