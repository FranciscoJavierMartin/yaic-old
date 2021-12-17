import PostList from '@/components/post-list/PostList';
import { render } from '@testing-library/react';
import React from 'react';

describe('PostList', () => {
  test('render props', () => {
    const component = render(<PostList />);
    const postList = component.getByTestId('post-list');
    expect(postList.children.length).toBe(8);
  });
});
