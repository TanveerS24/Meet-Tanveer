import React from 'react';
import { render, screen } from '@testing-library/react';
import { SkeuoButton } from '../components/ui/SkeuoButton';

describe('SkeuoButton Component', () => {
  it('renders button label text cleanly', () => {
    render(<SkeuoButton>Click Me</SkeuoButton>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });
});
