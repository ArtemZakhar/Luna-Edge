import type { Meta, StoryObj } from '@storybook/react';

import Modal from '../components/modal/Modal';

const meta = {
  title: 'Luna_Edge/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Modal title',
  },
};
