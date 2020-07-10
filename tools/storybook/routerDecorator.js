import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const routerDecorater = (story) => {
  return <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>;
};

export default routerDecorater;
