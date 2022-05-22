import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('button tests', () => {
  it('should render', () => {
    render(<Button>Hello</Button>);
    screen.getByText('Hello');
  });

  it('should check that function was invoked after click', () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Hello</Button>);
    screen.getByText('Hello').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should have primary color', () => {
    render(<Button variant="primary">Hello</Button>);
    screen.getByText('Hello').classList.contains('bg-primary');
  });

  it('should have secondary color', () => {
    render(<Button variant="secondary">Hello</Button>);

    screen.getByText('Hello').classList.contains('bg-green-100');
  });
});
