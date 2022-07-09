import { render } from '@testing-library/react';

import Home from '.';

describe('Home', () => {
  it('깨지지 않는다.', () => {
    render(<Home />);
  });
});
