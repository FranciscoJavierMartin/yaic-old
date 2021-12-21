import React from 'react';
import { render } from '@testing-library/react';
import ProfileInfo from '@/components/profile-info/ProfileInfo';

describe('ProfileInfo', () => {
  test('render props', async () => {
    const profileInfo = render(<ProfileInfo />);
    expect(await profileInfo.findByText('janedoe_')).toHaveTextContent(
      'janedoe_'
    );
    expect(await profileInfo.findByText('Jane Doe')).toHaveTextContent(
      'Jane Doe'
    );
    expect(await profileInfo.findByText('164')).toHaveTextContent('164');
    expect(await profileInfo.findByText('188')).toHaveTextContent('188');
    expect(await profileInfo.findByText('206')).toHaveTextContent('206');
  });
});
