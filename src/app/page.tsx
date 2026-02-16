"use client";

import { TableList, TableListTab } from "../stories/organisms/table-list/TableList";
import { Button } from "../stories/button/Button";

interface RoomItem {
  id: string;
  name: string;
  desc: string;
}

const createdRoomGenerator = (item: RoomItem) => (
  <div className="flex flex-col gap-2">
    <div className="font-bold">{item.name}</div>
    <div className="flex gap-2">
      <Button size="small" label="メンバー" />
      <Button size="small" label="招待" />
      <Button size="small" danger label="削除" />
    </div>
  </div>
);

const participatingRoomGenerator = (item: RoomItem) => (
  <div className="flex flex-col gap-2">
    <div className="font-bold">{item.name}</div>
    <div className="flex gap-2">
      <Button size="small" primary label="入室" />
      <Button size="small" danger label="退出" />
    </div>
  </div>
);

const invitedRoomGenerator = (item: RoomItem) => (
  <div className="flex flex-col gap-2">
    <div className="font-bold">{item.name}</div>
    <div className="flex gap-2">
      <Button size="small" primary label="招待を受ける" />
    </div>
  </div>
);


const mockTabs: TableListTab<RoomItem>[] = [
  {
    id: "created",
    title: "作った部屋",
    count: 2,
    items: [
      { id: "1", name: "Sprint 42 Planning", desc: "3 participants" },
      { id: "2", name: "Backend Estimation", desc: "5 participants" },
    ],
    generator: createdRoomGenerator,
  },
  {
    id: "participating",
    title: "参加中",
    count: 1,
    items: [
      { id: "3", name: "Frontend Review", desc: "2 participants" },
    ],
    generator: participatingRoomGenerator,
  },
  {
    id: "invited",
    title: "招待",
    count: 1,
    items: [
      { id: "4", name: "Design Sprint", desc: "4 participants" },
    ],
    generator: invitedRoomGenerator,
  },
];

export default function HomePage() {
  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button primary size="small" label="部屋を作る" />
      </div>
      <TableList tabs={mockTabs} />
    </div>
  );
}
