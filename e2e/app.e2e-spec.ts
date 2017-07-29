import { PhenomalyPage } from './app.po';

describe('phenomaly App', () => {
  let page: PhenomalyPage;

  beforeEach(() => {
    page = new PhenomalyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
