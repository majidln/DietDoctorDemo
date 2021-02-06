describe('App', () => {
  beforeEach(async () => {
    await device.launchApp({
      newInstance: true,
      launchArgs: {
        DTXEnableVerboseSyncSystem: 'NO',
        DTXEnableVerboseSyncResources: 'NO',
      },
    });
  });

  it('should show the step one message', async () => {
    await expect(element(by.id('homeView'))).toBeVisible();
  });
});
