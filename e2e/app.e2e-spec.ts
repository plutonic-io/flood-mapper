import { FloodMapperPage } from './app.po';

describe('flood-mapper App', () => {
  let page: FloodMapperPage;

  beforeEach(() => {
    page = new FloodMapperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
