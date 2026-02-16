"use client";

import React from 'react';
import './dialog.css';

export interface DialogProps {
  /**
   * Is the dialog currently open?
   */
  isOpen: boolean;
  /**
   * Function to call when the dialog is closed via the close button or overlay click
   */
  onClose: () => void;
  /**
   * The message to display in the center of the dialog
   */
  message: React.ReactNode;
  /**
   * Content for the left slot (bottom left)
   */
  leftSlot?: React.ReactNode;
  /**
   * Content for the right slot (bottom right)
   */
  rightSlot?: React.ReactNode;
}

/**
 * Dialog component for user interaction
 */
export const Dialog = ({
  isOpen,
  onClose,
  message,
  leftSlot,
  rightSlot,
}: DialogProps) => {
  if (!isOpen) return null;

  const hasLeft = !!leftSlot;
  const hasRight = !!rightSlot;
  
  let footerClass = 'storybook-dialog-footer';
  if ((hasLeft && !hasRight) || (!hasLeft && hasRight)) {
    footerClass += ' storybook-dialog-footer--center';
  }

  return (
    <div className="storybook-dialog-overlay" onClick={onClose}>
      <div className="storybook-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          className="storybook-dialog-close"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="storybook-dialog-content">
          {message}
        </div>
        {(hasLeft || hasRight) && (
          <div className={footerClass}>
            {leftSlot}
            {rightSlot}
          </div>
        )}
      </div>
    </div>
  );
};
