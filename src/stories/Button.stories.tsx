import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/button/Button';

const meta = {
  title: 'Luna_Edge/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    BG_hover_color: 'hover:bg-blue-500',
    hover_text_color: null,
    hover_border_color: 'hover:border-transparent',
    BG_focus_border: 'focus:border-2',
    focus_text_color: null,
    focus_border_color: 'focus:border-blue-900',
    BG_focus_color: 'focus:bg-blue-500',
    BG_active_color: 'active:bg-blue-500',
    active_text_color: null,
    active_border_color: 'active:border-transparent',
    text_color: 'text-white',
    border_color: 'border-transparent',
    BG_color: 'bg-blue-900',
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    label: 'Button',
    BG_hover_color: 'hover:bg-blue-200',
    hover_text_color: 'hover:text-blue-500',
    hover_border_color: 'hover:border-blue-400',
    BG_focus_border: 'focus:border-2',
    focus_text_color: 'focus:text-blue-900',
    focus_border_color: 'focus:border-blue-900',
    BG_focus_color: 'focus:bg-blue-200',
    BG_active_color: 'active:bg-blue-200',
    active_text_color: 'active:text-blue-500',
    active_border_color: 'active:border-blue-400',
    text_color: 'text-blue-900',
    border_color: 'border-blue-700',
    BG_color: 'white',
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    label: 'Button',
    BG_hover_color: 'hover:bg-blue-200',
    hover_text_color: 'hover:text-blue-500',
    hover_border_color: 'hover:border-transparent',
    BG_focus_border: 'focus:border-2',
    focus_text_color: 'focus:text-blue-900',
    focus_border_color: 'focus:border-blue-900',
    BG_focus_color: null,
    BG_active_color: 'active:bg-blue-200',
    active_text_color: 'active:text-blue-500',
    active_border_color: 'active:border-transparent',
    text_color: 'text-black',
    border_color: 'border-transparent',
    BG_color: 'white',
    disabled: false,
  },
};
