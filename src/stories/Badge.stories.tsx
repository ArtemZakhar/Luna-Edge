import type { Meta, StoryObj } from '@storybook/react';

import Badge from '../components/badge/Badge';

const meta = {
  title: 'Luna_Edge/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Grey: Story = {
  args: {
    label: 'Badge',
    border_radius: 'rounded-3xl',
    text_color: 'text-black',
    dot: false,
    close: false,
    BG_color: 'bg-grey-100',
    dot_and_close_color: 'text-grey-500',
  },
};

export const Rose: Story = {
  args: {
    label: 'Badge',
    border_radius: 'rounded-3xl',
    text_color: 'text-orange-900',
    dot: false,
    close: false,
    BG_color: 'bg-orange-100',
    dot_and_close_color: 'text-orange-700',
  },
};

export const Lemon: Story = {
  args: {
    label: 'Badge',
    border_radius: 'rounded-3xl',
    text_color: 'text-yelow-700',
    dot: false,
    close: false,
    BG_color: 'bg-yelow-100',
    dot_and_close_color: 'text-yelow-500',
  },
};

export const Green: Story = {
  args: {
    label: 'Badge',
    border_radius: 'rounded-3xl',
    text_color: 'text-green-700',
    dot: false,
    close: false,
    BG_color: 'bg-green-100',
    dot_and_close_color: 'text-green-500',
  },
};

export const Lavender: Story = {
  args: {
    label: 'Badge',
    border_radius: 'rounded-3xl',
    text_color: 'text-blue-400',
    dot: false,
    close: false,
    BG_color: 'bg-blue-150',
    dot_and_close_color: 'text-blue-600',
  },
};

export const Blue: Story = {
  args: {
    label: 'Badge',
    border_radius: 'rounded-3xl',
    text_color: 'text-blue-700',
    dot: false,
    close: false,
    BG_color: 'bg-blue-200',
    dot_and_close_color: 'text-blue-450',
  },
};

export const Violet: Story = {
  args: {
    label: 'Badge',
    border_radius: 'rounded-3xl',
    text_color: 'text-violet-700',
    dot: false,
    close: false,
    BG_color: 'bg-violet-100',
    dot_and_close_color: 'text-violet-500',
  },
};

export const Pink: Story = {
  args: {
    label: 'Badge',
    border_radius: 'rounded-3xl',
    text_color: 'text-pink-900',
    dot: false,
    close: false,
    BG_color: 'bg-pink-100',
    dot_and_close_color: 'text-pink-500',
  },
};

export const Black: Story = {
  args: {
    label: 'Badge',
    border_radius: 'rounded-3xl',
    text_color: 'text-grey-300',
    dot: false,
    close: false,
    BG_color: 'bg-black',
    dot_and_close_color: 'text-grey-300',
  },
};

export const Orange: Story = {
  args: {
    label: 'Badge',
    border_radius: 'rounded-3xl',
    text_color: 'text-orange-800',
    dot: false,
    close: false,
    BG_color: 'bg-orange-200',
    dot_and_close_color: 'text-orange-800',
  },
};
