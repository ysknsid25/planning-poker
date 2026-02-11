import React, { useState, useEffect } from "react";
import { Icon } from "../../icon/Icon";
import "./user-search.css";

export interface User {
    id: string;
    name: string;
    avatarSrc: string;
}

interface UserSearchProps {
    /**
     * The function to call when searching. Should return a promise that resolves to an array of users.
     */
    onSearch: (query: string) => Promise<User[]>;
    /**
     * The currently selected users (controlled component).
     */
    selectedUsers: User[];
    /**
     * Callback when a user is selected.
     */
    onUserSelect: (user: User) => void;
    /**
     * Callback when a user is removed.
     */
    onUserRemove: (user: User) => void;
}

/**
 * An organism for searching and selecting users.
 */
export const UserSearch = ({
    onSearch,
    selectedUsers,
    onUserSelect,
    onUserRemove,
}: UserSearchProps) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        const performSearch = async () => {
            if (query.trim() === "") {
                setResults([]);
                setShowResults(false);
                return;
            }

            setIsLoading(true);
            setShowResults(true);
            try {
                const users = await onSearch(query);
                setResults(users);
            } catch (error) {
                console.error("Search failed:", error);
            } finally {
                setIsLoading(false);
            }
        };

        const timerId = setTimeout(() => {
            performSearch();
        }, 300); // 300ms debounce

        return () => clearTimeout(timerId);
    }, [query, onSearch]);

    const handleSelect = (user: User) => {
        onUserSelect(user);
        setQuery("");
        setResults([]);
        setShowResults(false);
    };

    return (
        <div className="storybook-user-search">
            <input
                type="text"
                className="storybook-user-search__input"
                placeholder="Search users..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <div className="storybook-user-search__selected-list">
                {selectedUsers.map((user) => (
                    <div
                        key={user.id}
                        className="storybook-user-search__selected-item"
                    >
                        <Icon
                            size="small"
                            src={user.avatarSrc}
                            alt={user.name}
                        />
                        <span className="storybook-user-search__user-name">
                            {user.name}
                        </span>
                        <button
                            className="storybook-user-search__remove-btn"
                            onClick={() => onUserRemove(user)}
                            aria-label={`Remove ${user.name}`}
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>

            {showResults && (
                <div className="storybook-user-search__results">
                    {isLoading ? (
                        <div className="storybook-user-search__loading">
                            Loading...
                        </div>
                    ) : results.length > 0 ? (
                        results.map((user) => (
                            <div
                                key={user.id}
                                className="storybook-user-search__result-item"
                                onClick={() => handleSelect(user)}
                            >
                                <Icon
                                    size="small"
                                    src={user.avatarSrc}
                                    alt={user.name}
                                />
                                <span className="storybook-user-search__user-name">
                                    {user.name}
                                </span>
                            </div>
                        ))
                    ) : (
                        <div className="storybook-user-search__loading">
                            No users found
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
