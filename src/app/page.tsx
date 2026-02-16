"use client";

import { useState } from "react";
import { TableList, TableListTab } from "../stories/organisms/table-list/TableList";
import { Button } from "../stories/button/Button";
import { Dialog } from "../stories/dialog/Dialog";
import { Icon } from "../stories/icon/Icon";

interface Member {
  id: string;
  name: string;
  avatarSrc: string;
}

interface RoomItem {
  id: string;
  name: string;
  members: Member[];
}

const mockRooms: RoomItem[] = [
  {
    id: "1",
    name: "Sprint 42 Planning",
    members: [
      { id: "m1", name: "Alice", avatarSrc: "https://i.pravatar.cc/150?u=1" },
      { id: "m2", name: "Bob", avatarSrc: "https://i.pravatar.cc/150?u=2" },
    ],
  },
  {
    id: "2",
    name: "Backend Estimation",
    members: [],
  },
];

export default function HomePage() {
  const [memberDialogRoom, setMemberDialogRoom] = useState<RoomItem | null>(null);

  const createdRoomGenerator = (item: RoomItem) => (
    <div className="flex flex-col gap-2">
      <div className="font-bold">{item.name}</div>
      <div className="flex gap-2">
        <Button size="small" label="メンバー" onClick={() => setMemberDialogRoom(item)} />
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
      count: mockRooms.length,
      items: mockRooms,
      generator: createdRoomGenerator,
    },
    {
      id: "participating",
      title: "参加中",
      count: 1,
      items: [{ id: "3", name: "Frontend Review", members: [] }],
      generator: participatingRoomGenerator,
    },
    {
      id: "invited",
      title: "招待",
      count: 1,
      items: [{ id: "4", name: "Design Sprint", members: [] }],
      generator: invitedRoomGenerator,
    },
  ];

  const memberDialogContent = memberDialogRoom && (
    memberDialogRoom.members.length > 0 ? (
      <ul className="flex flex-col gap-3 text-left">
        {memberDialogRoom.members.map((member) => (
          <li key={member.id} className="flex items-center gap-3">
            <Icon size="small" src={member.avatarSrc} alt={member.name} />
            <span className="flex-1 font-medium">{member.name}</span>
            <Button size="small" danger label="削除" />
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-500">メンバーがいません</p>
    )
  );

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button primary size="small" label="部屋を作る" />
      </div>
      <TableList tabs={mockTabs} />

      <Dialog
        isOpen={!!memberDialogRoom}
        onClose={() => setMemberDialogRoom(null)}
        message={memberDialogContent}
      />
    </div>
  );
}
