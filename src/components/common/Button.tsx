import React from 'react';
import classNames from 'classnames';

function Button(props?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    return (
        <button {...props} className={classNames(
            "theme-bg theme-bg-hover theme-bg-focus-visible theme-bg-active px-5 py-2 rounded text-black font-medium transition-all",
            props?.className,
        )}></button>
    );
}

export default Button;
