import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TableList, TableListTab } from './TableList';
import { Icon } from '../../icon/Icon';

const meta = {
  title: 'Example/organisms/TableList',
  component: TableList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableList>;

export default meta;
type Story = StoryObj<typeof meta>;

interface MockItem {
  id: string;
  name: string;
  desc: string;
  avatar: string;
}

const mockGenerator = (item: MockItem) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Icon size="small" src={item.avatar} alt={item.name} />
    <div style={{ marginLeft: '12px' }}>
      <div style={{ fontWeight: 'bold' }}>{item.name}</div>
      <div style={{ color: '#666', fontSize: '12px' }}>{item.desc}</div>
    </div>
  </div>
);

const tabs: TableListTab<MockItem>[] = [
  {
    id: '1',
    title: 'Pull Requests',
    count: 3,
    items: [
      { id: '1', name: 'Update README', desc: 'Added installation instructions', avatar: 'https://i.pravatar.cc/150?u=1' },
      { id: '2', name: 'Fix bug', desc: 'Resolved issue #42', avatar: 'https://i.pravatar.cc/150?u=2' },
      { id: '3', name: 'New Feature', desc: 'Implemented dark mode', avatar: 'https://i.pravatar.cc/150?u=3' },
    ],
    generator: mockGenerator,
  },
  {
    id: '2',
    title: 'Issues',
    count: 2,
    items: [
      { id: '4', name: 'App crashes', desc: 'On launch', avatar: 'https://i.pravatar.cc/150?u=4' },
      { id: '5', name: 'Styling broken', desc: 'Mobile view', avatar: 'https://i.pravatar.cc/150?u=5' },
    ],
    generator: mockGenerator,
  },
  {
    id: '3',
    title: 'Discussions',
    count: 0,
    items: [],
    generator: mockGenerator,
  },
];

export const Default: Story = {
  args: {
    tabs: tabs,
  },
};
