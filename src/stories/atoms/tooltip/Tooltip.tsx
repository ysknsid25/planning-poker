import React, { ReactNode } from 'react';
import './tooltip.css';

export interface TooltipProps {
  /**
   * Text to display in the tooltip
   */
  text: string;
  /**
   * Element that triggers the tooltip
   */
  children: ReactNode;
}

/**
 * A simple tooltip component
 */
export const Tooltip = ({ text, children }: TooltipProps) => {
  return (
    <div className="storybook-tooltip-container">
      <div className="storybook-tooltip-trigger">{children}</div>
      <span className="storybook-tooltip-text">{text}</span>
    </div>
  );
};
