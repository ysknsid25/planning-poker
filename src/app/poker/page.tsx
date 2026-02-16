"use client";

import { useState } from "react";
import { Icon } from "../../stories/icon/Icon";
import { PokerCard } from "../../stories/molecules/poker-card/PokerCard";
import { Button } from "../../stories/button/Button";

const CARD_VALUES = [0.5, 1, 2, 3, 5, 8, 11, 15];

const mockMembers = [
  { id: "1", name: "Alice", avatarSrc: "https://i.pravatar.cc/150?u=1" },
  { id: "2", name: "Bob", avatarSrc: "https://i.pravatar.cc/150?u=2" },
  { id: "3", name: "Charlie", avatarSrc: "https://i.pravatar.cc/150?u=3" },
];

export default function PokerPage() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center gap-10 py-8">

      {/* メンバーのカードエリア */}
      <div className="flex flex-wrap justify-center gap-8">
        {mockMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <Icon size="small" src={member.avatarSrc} alt={member.name} />
              <span className="font-semibold">{member.name}</span>
            </div>
            <PokerCard
              isBack
              number=""
              userIconSrc={member.avatarSrc}
            />
          </div>
        ))}
      </div>

      {/* Open / Close ボタン */}
      <div className="flex gap-4">
        <Button primary label="Open" />
        <Button label="Close" />
      </div>

      {/* 自分のカード */}
      <div className="flex flex-wrap justify-center gap-3">
        {CARD_VALUES.map((value) => (
          <PokerCard
            key={value}
            number={value}
            userIconSrc="https://i.pravatar.cc/150?u=me"
            selected={selectedCard === value}
            onClick={() => setSelectedCard(value === selectedCard ? null : value)}
          />
        ))}
      </div>

    </div>
  );
}
