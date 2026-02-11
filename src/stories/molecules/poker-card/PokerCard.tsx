import React from 'react';
import { Icon } from '../../icon/Icon';
import './poker-card.css';

interface PokerCardProps {
  /**
   * Is this card selected?
   */
  selected?: boolean;
  /**
   * Is the card flipped to the back?
   */
  isBack?: boolean;
  /**
   * The number to display
   */
  number: string | number;
  /**
   * The user's icon source
   */
  userIconSrc: string;
  /**
   * Callback when the card is clicked
   */
  onClick?: () => void;
}

/**
 * A molecule representing a planning poker card
 */
export const PokerCard = ({
  selected = false,
  isBack = false,
  number,
  userIconSrc,
  onClick,
  ...props
}: PokerCardProps) => {
  const cardClassName = [
    'storybook-poker-card',
    selected ? 'storybook-poker-card--selected' : '',
  ].join(' ');

  return (
    <div
      className={cardClassName}
      onClick={onClick}
      {...props}
    >
      {isBack ? (
        <div className="storybook-poker-card__back" />
      ) : (
        <div className="storybook-poker-card__content">
          <div className="storybook-poker-card__top">
            <Icon size="small" src={userIconSrc} alt="User" />
          </div>
          <div className="storybook-poker-card__number">{number}</div>
        </div>
      )}
    </div>
  );
};
