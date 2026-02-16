"use client";

import { useState } from "react";
import { Input } from "../../../stories/atoms/input/Input";
import { UserSearch, User } from "../../../stories/organisms/user-search/UserSearch";
import { Button } from "../../../stories/button/Button";

const mockSearch = async (query: string): Promise<User[]> => {
  const users: User[] = [
    { id: "1", name: "Alice", avatarSrc: "https://i.pravatar.cc/150?u=1" },
    { id: "2", name: "Bob", avatarSrc: "https://i.pravatar.cc/150?u=2" },
    { id: "3", name: "Charlie", avatarSrc: "https://i.pravatar.cc/150?u=3" },
  ];
  return users.filter((u) => u.name.toLowerCase().includes(query.toLowerCase()));
};

export default function CreateRoomPage() {
  const [roomName, setRoomName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  return (
    <div className="flex flex-col items-center gap-6 max-w-md mx-auto mt-16">
      <Input
        placeholder="部屋の名前"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <UserSearch
        onSearch={mockSearch}
        selectedUsers={selectedUsers}
        onUserSelect={(user) => setSelectedUsers((prev) => [...prev, user])}
        onUserRemove={(user) => setSelectedUsers((prev) => prev.filter((u) => u.id !== user.id))}
      />
      <Button primary label="作る" />
    </div>
  );
}
