import { greetingUppercase } from './../main';

describe('Main tests', () => {
  test('Should format the greeting correctly', () => {
    expect(greetingUppercase('world')).toMatchSnapshot();
  });
});
