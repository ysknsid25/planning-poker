import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Dialog } from "./Dialog";
import { Button } from "../button/Button";

const meta = {
    title: "Example/Molecules/Dialog",
    component: Dialog,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        leftSlot: { control: false },
        rightSlot: { control: false },
    },
    args: {
        onClose: fn(),
    },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isOpen: true,
        message: "これはダイアログのメッセージです。",
        leftSlot: <Button label="キャンセル" onClick={fn()} />,
        rightSlot: <Button label="OK" primary onClick={fn()} />,
    },
};

export const SingleButton: Story = {
    args: {
        isOpen: true,
        message: "これはボタンが1つのダイアログです。中央に表示されます。",
        rightSlot: <Button label="OK" primary onClick={fn()} />,
    },
};
