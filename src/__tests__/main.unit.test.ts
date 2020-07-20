import { greetingUppercase } from './../main';

test('formats the greeting correctly', () => {
  expect(greetingUppercase('world')).toMatchSnapshot();
});
