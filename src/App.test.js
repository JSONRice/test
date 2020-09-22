import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("App", () => {
  test("App renders without crashing", () => {
    const tree = <App />;
    const renderedTree = render(tree);

    expect(renderedTree).toBeTruthy();
  });
});

