import { AngularApiAppPage } from './app.po';

describe('angular-api-app App', () => {
  let page: AngularApiAppPage;

  beforeEach(() => {
    page = new AngularApiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
