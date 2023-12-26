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
    addProps: {
      border_radius: 'rounded-3xl',
      text_color: 'text-black',
      BG_color: 'bg-grey-100',
      dot_and_close_color: 'text-grey-500',
    },
    removeItem: (id: number) => {},
    modalOpen: (id: number) => {},
    pokemonId: 1,
    dot: false,
    close: false,
  },
};

export const Rose: Story = {
  args: {
    label: 'Badge',
    addProps: {
      border_radius: 'rounded-3xl',
      text_color: 'text-orange-900',
      BG_color: 'bg-orange-100',
      dot_and_close_color: 'text-orange-700',
    },
    removeItem: (id: number) => {},
    modalOpen: (id: number) => {},
    pokemonId: 2,
    dot: false,
    close: false,
  },
};

export const Lemon: Story = {
  args: {
    label: 'Badge',
    addProps: {
      border_radius: 'rounded-3xl',
      text_color: 'text-yelow-700',
      BG_color: 'bg-yelow-100',
      dot_and_close_color: 'text-yelow-500',
    },
    removeItem: (id: number) => {},
    modalOpen: (id: number) => {},
    pokemonId: 3,
    dot: false,
    close: false,
  },
};

export const Green: Story = {
  args: {
    label: 'Badge',
    addProps: {
      border_radius: 'rounded-3xl',
      text_color: 'text-green-700',
      BG_color: 'bg-green-100',
      dot_and_close_color: 'text-green-500',
    },
    removeItem: (id: number) => {},
    modalOpen: (id: number) => {},
    pokemonId: 4,
    dot: false,
    close: false,
  },
};

export const Lavender: Story = {
  args: {
    label: 'Badge',
    addProps: {
      border_radius: 'rounded-3xl',
      text_color: 'text-blue-400',
      BG_color: 'bg-blue-150',
      dot_and_close_color: 'text-blue-600',
    },
    removeItem: (id: number) => {},
    modalOpen: (id: number) => {},
    pokemonId: 5,
    dot: false,
    close: false,
  },
};

export const Blue: Story = {
  args: {
    label: 'Badge',
    addProps: {
      border_radius: 'rounded-3xl',
      text_color: 'text-blue-700',
      BG_color: 'bg-blue-200',
      dot_and_close_color: 'text-blue-450',
    },
    removeItem: (id: number) => {},
    modalOpen: (id: number) => {},
    pokemonId: 6,
    dot: false,
    close: false,
  },
};

export const Violet: Story = {
  args: {
    label: 'Badge',
    addProps: {
      border_radius: 'rounded-3xl',
      text_color: 'text-violet-700',
      BG_color: 'bg-violet-100',
      dot_and_close_color: 'text-violet-500',
    },
    removeItem: (id: number) => {},
    modalOpen: (id: number) => {},
    pokemonId: 7,
    dot: false,
    close: false,
  },
};

export const Pink: Story = {
  args: {
    label: 'Badge',
    addProps: {
      border_radius: 'rounded-3xl',
      text_color: 'text-pink-900',
      BG_color: 'bg-pink-100',
      dot_and_close_color: 'text-pink-500',
    },
    removeItem: (id: number) => {},
    modalOpen: (id: number) => {},
    pokemonId: 8,
    dot: false,
    close: false,
  },
};

export const Black: Story = {
  args: {
    label: 'Badge',
    addProps: {
      border_radius: 'rounded-3xl',
      text_color: 'text-grey-300',
      BG_color: 'bg-black',
      dot_and_close_color: 'text-grey-300',
    },
    removeItem: (id: number) => {},
    modalOpen: (id: number) => {},
    pokemonId: 9,
    dot: false,
    close: false,
  },
};

export const Orange: Story = {
  args: {
    label: 'Badge',
    addProps: {
      border_radius: 'rounded-3xl',
      text_color: 'text-orange-800',
      BG_color: 'bg-orange-200',
      dot_and_close_color: 'text-orange-800',
    },
    removeItem: (id: number) => {},
    modalOpen: (id: number) => {},
    pokemonId: 10,
    dot: false,
    close: false,
  },
};
