import React, { FC } from 'react';

import cx from 'classnames';
import cl from './button.module.scss';


export enum BottonVariant {
    green = 'green',
    blue = 'blue',
}; 

interface ButtonProps {
    variant?: BottonVariant;
    children: React.ReactNode;
    disabled?: boolean;
    onclick?: () => void;
};

const Button: FC<ButtonProps> = ({variant, children, disabled, onclick}) => {
    return (
    <div 
    onClick={onclick}
    className={cx(cl.btn,
    {[cl.disabled]: disabled},
    {[cl.green]: variant === BottonVariant.green},
    )} 
    >
        <span>{children}</span> 
    </div>
    )
}

export default Button