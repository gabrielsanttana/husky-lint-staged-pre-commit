import {render} from '@testing-library/react';
import App from './App';

describe('The App', () => {
  it('renders correctly', () => {
    const {container} = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
