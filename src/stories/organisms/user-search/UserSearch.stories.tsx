import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { UserSearch, User } from './UserSearch';
import { fn } from 'storybook/test';

const meta = {
  title: 'Example/organisms/UserSearch',
  component: UserSearch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockUsers: User[] = [
  { id: '1', name: 'Alice Smith', avatarSrc: 'https://i.pravatar.cc/150?u=alice' },
  { id: '2', name: 'Bob Jones', avatarSrc: 'https://i.pravatar.cc/150?u=bob' },
  { id: '3', name: 'Charlie Brown', avatarSrc: 'https://i.pravatar.cc/150?u=charlie' },
  { id: '4', name: 'David Lee', avatarSrc: 'https://i.pravatar.cc/150?u=david' },
  { id: '5', name: 'Eve White', avatarSrc: 'https://i.pravatar.cc/150?u=eve' },
];

const mockSearch = async (query: string): Promise<User[]> => {
  console.log('Searching for:', query);
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
  if (!query) return [];
  return mockUsers.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const Default: Story = {
  render: (args) => {
    const [selectedUsers, setSelectedUsers] = useState<User[]>(args.selectedUsers || []);

    const handleSelect = (user: User) => {
      if (!selectedUsers.some((u) => u.id === user.id)) {
        setSelectedUsers([...selectedUsers, user]);
      }
      args.onUserSelect?.(user);
    };

    const handleRemove = (user: User) => {
      setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id));
      args.onUserRemove?.(user);
    };

    return (
      <UserSearch
        {...args}
        onSearch={args.onSearch} // Use onSearch from args
        selectedUsers={selectedUsers}
        onUserSelect={handleSelect}
        onUserRemove={handleRemove}
      />
    );
  },
  args: {
    onSearch: mockSearch,
    selectedUsers: [],
    onUserSelect: fn(),
    onUserRemove: fn(),
  },
};

export const WithSelectedUsers: Story = {
  render: (args) => {
    const [selectedUsers, setSelectedUsers] = useState<User[]>(args.selectedUsers || []);

    const handleSelect = (user: User) => {
      if (!selectedUsers.some((u) => u.id === user.id)) {
        setSelectedUsers([...selectedUsers, user]);
      }
      args.onUserSelect?.(user);
    };

    const handleRemove = (user: User) => {
      setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id));
      args.onUserRemove?.(user);
    };

    return (
      <UserSearch
        {...args}
        onSearch={args.onSearch}
        selectedUsers={selectedUsers}
        onUserSelect={handleSelect}
        onUserRemove={handleRemove}
      />
    );
  },
  args: {
    onSearch: mockSearch,
    selectedUsers: [mockUsers[0], mockUsers[1]],
    onUserSelect: fn(),
    onUserRemove: fn(),
  },
};
