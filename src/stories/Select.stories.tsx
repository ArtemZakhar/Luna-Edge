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
      { idNumber: 0, name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { idNumber: 1, name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      { idNumber: 2, name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
      { idNumber: 3, name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
      { idNumber: 4, name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
    ],
    label: 'Label',
    disabled: false,
    helpText: {
      status: 'Team should include 4 pokemons. Remained:',
      full: 'Team is full. The Battle can begin.',
      error: 'Invalid pokemon name',
    },
  },
};
