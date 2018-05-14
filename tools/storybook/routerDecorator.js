import React from 'react';
import { MemoryRouter } from 'react-router-dom';

export default function routerDecorater(story) {
  return <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>;
}
