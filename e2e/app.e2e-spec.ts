import { PROJECTRecipeBookPage } from './app.po';

describe('project-recipe-book App', () => {
  let page: PROJECTRecipeBookPage;

  beforeEach(() => {
    page = new PROJECTRecipeBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
