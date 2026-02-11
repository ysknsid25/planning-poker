import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PokerCard } from "./PokerCard";

const meta = {
    title: "Example/molecules/poker-card",
    component: PokerCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        selected: { control: "boolean" },
        isBack: { control: "boolean" },
        number: { control: "text" },
        userIconSrc: { control: "text" },
    },
} satisfies Meta<typeof PokerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        number: "3",
        userIconSrc: "https://avatars.githubusercontent.com/u/44870505?v=4",
    },
};

export const Selected: Story = {
    args: {
        ...Default.args,
        selected: true,
    },
};

export const Back: Story = {
    args: {
        ...Default.args,
        isBack: true,
    },
};
