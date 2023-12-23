import type { Meta, StoryObj } from '@storybook/react';

import Input from '../components/input/Input';

const meta = {
  title: 'Luna_Edge/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    border_hover: 'border-[2px] hover:border-blue-700',
    border_focus: 'border-[2px] focus-within:border-blue-700',
    validation: true,
    disabled: false,
  },
};
