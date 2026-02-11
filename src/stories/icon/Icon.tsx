import React from 'react';
import Link from 'next/link';
import './icon.css';

interface IconProps {
  /**
   * The image source
   */
  src: string;
  /**
   * How large should the icon be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional destination URL when clicked
   */
  href?: string;
  /**
   * Optional alt text for the image
   */
  alt?: string;
}

/**
 * Primary UI component for icons
 */
export const Icon = ({
  src,
  size = 'medium',
  href,
  alt = '',
  ...props
}: IconProps) => {
  const className = `storybook-icon storybook-icon--${size}`;

  const image = (
    <img
      src={src}
      className={className}
      alt={alt}
      {...props}
    />
  );

  if (href) {
    return (
      <Link href={href} className="storybook-icon-wrapper">
        {image}
      </Link>
    );
  }

  return image;
};
