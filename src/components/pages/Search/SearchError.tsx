import React from 'react';

export interface SearchErrorProps {
    children?: React.ReactNode;
}
function SearchError({ children }: SearchErrorProps) {
    return (
        <div className="mt-10 px-10 font-semibold text-gray-600">{children}</div>
    );
}

export default SearchError;
