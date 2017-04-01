import { CodingExercisePage } from './app.po';

describe('coding-exercise App', () => {
  let page: CodingExercisePage;

  beforeEach(() => {
    page = new CodingExercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
