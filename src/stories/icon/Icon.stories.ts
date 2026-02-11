import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon } from "./Icon";

const meta = {
    title: "Example/atoms/icon",
    component: Icon,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select", options: ["small", "medium", "large"] },
        },
    },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
        size: "small",
        src: "https://avatars.githubusercontent.com/u/44870505?v=4",
        alt: "Small icon",
    },
};

export const Medium: Story = {
    args: {
        size: "medium",
        src: "https://avatars.githubusercontent.com/u/44870505?v=4",
        alt: "Medium icon",
    },
};

export const Large: Story = {
    args: {
        size: "large",
        src: "https://avatars.githubusercontent.com/u/44870505?v=4",
        alt: "Large icon",
    },
};

export const WithLink: Story = {
    args: {
        size: "medium",
        src: "https://avatars.githubusercontent.com/u/44870505?v=4",
        href: "https://storybook.js.org",
        alt: "Icon with link",
    },
};
