import { TestingAppPage } from './app.po';

describe('testing-app App', function() {
  let page: TestingAppPage;

  beforeEach(() => {
    page = new TestingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
