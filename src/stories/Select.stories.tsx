import type { Meta, StoryObj } from '@storybook/react';

import Select from '../components/select/Select';
import { useState } from 'react';

const meta = {
  title: 'Luna_Edge/Select  ',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    pokemonData: [
      { idNumber: 0, name: 'Pokemon1', url: 'https' },
      { idNumber: 1, name: 'Pokemon2', url: 'https' },
      { idNumber: 2, name: 'Pokemon3', url: 'https' },
      { idNumber: 3, name: 'Pokemon4', url: 'https' },
      { idNumber: 4, name: 'Pokemon5', url: 'https' },
    ],
    label: 'Label',
    clear: false,
    validation: true,
    disabled: false,
  },
};
