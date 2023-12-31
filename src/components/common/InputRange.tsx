import React from 'react';
import usePlayerContext from '../../context/PlayerContext/usePlayerContext';
import classNames from 'classnames';

export interface InputRangeProps {
    min?: number | null;
    max?: number | null;
    value?: number | null;
    disabled?: boolean;
    divisor?: number;
    onChange?: ((val: number, eve: React.ChangeEvent<HTMLInputElement>) => void) | null;
    onMouseDown?: ((eve: React.MouseEvent<HTMLInputElement>) => void) | null;
}

function InputRange({
    min = 0,
    max = 10,
    value = 0,
    disabled = false,
    onChange = null,
    divisor = 1000,
    onMouseDown = null,
}: InputRangeProps) {

    const { state: { option: { expand } } } = usePlayerContext();


    max = max || 0;
    min = min || 0;
    value = value || 0;

    const step = ((max - min) / (divisor || 1000)) || 1;

    return (
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            disabled={disabled || false}
            onError={(error) => console.error(error)}
            value={value}
            className={classNames(expand && "in-expansion")}
            style={{ '--range': `${((((value - min) / ((max - min))) * 100) || 0).toFixed(1)}%` } as React.CSSProperties}
            onChange={(eve: React.ChangeEvent<HTMLInputElement>) => onChange?.((parseFloat(eve.target.value) || 0), eve)}
            onMouseDown={(eve: React.MouseEvent<HTMLInputElement>) => onMouseDown?.(eve)}
        />
    )
}

export default InputRange;