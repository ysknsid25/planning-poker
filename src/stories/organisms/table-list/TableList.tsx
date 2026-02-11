import React, { useState, ReactNode } from 'react';
import { Tooltip } from '../../atoms/tooltip/Tooltip';
import './table-list.css';

export interface TableListTab<T> {
  id: string;
  title: string;
  count: number;
  items: T[];
  generator: (item: T) => ReactNode;
}

export interface TableListProps<T> {
  /**
   * Array of tabs to display
   */
  tabs: TableListTab<T>[];
  /**
   * Optional class name for the container
   */
  className?: string;
}

/**
 * An organism for displaying lists of items in tabs with counts and tooltips.
 */
export const TableList = <T,>({ tabs, className = '' }: TableListProps<T>) => {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);

  const activeTab = tabs.find((tab) => tab.id === activeTabId) || tabs[0];

  if (!tabs.length) {
    return null;
  }

  return (
    <div className={`storybook-table-list ${className}`}>
      <div className="storybook-table-list__header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`storybook-table-list__tab ${
              activeTabId === tab.id ? 'storybook-table-list__tab--active' : ''
            }`}
            onClick={() => setActiveTabId(tab.id)}
          >
            <span className="storybook-table-list__tab-title">
              {tab.title}
              <Tooltip text={`${tab.count} items`}>
                <span className="storybook-table-list__tab-count">
                  {tab.count}
                </span>
              </Tooltip>
            </span>
          </button>
        ))}
      </div>
      <div className="storybook-table-list__content">
        {activeTab && activeTab.items.length > 0 ? (
          <ul className="storybook-table-list__items">
            {activeTab.items.map((item, index) => (
              <li key={index} className="storybook-table-list__item">
                {activeTab.generator(item)}
              </li>
            ))}
          </ul>
        ) : (
          <div className="storybook-table-list__empty">No items found.</div>
        )}
      </div>
    </div>
  );
};
