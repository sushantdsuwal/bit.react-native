import { render } from '@testing-library/react-native';
import { BasicThemeProvider } from './theme-provider.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicThemeProvider />);
  const rendered = getByText('hello from ThemeProvider');
  expect(rendered).toBeTruthy();
});
