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
};

const Button: FC<ButtonProps> = ({variant, children, disabled}) => {
    return (
    <div 
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