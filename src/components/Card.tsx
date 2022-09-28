import React, {FC, useState} from 'react';

export enum CardVariant {
    outlined= 'outlined',
    primary = "primary"
}

interface CardProps {
    width?: string; // ? symbol means that interface parameter optional
    height?: string;
    children?: React.ReactNode;
    variant: CardVariant;
    onClick: (num: number) => void; //  empty brackets describe function with no parameters and void means function return type
}

const Card: FC<CardProps> = 
    ({
        width, 
        height, 
        variant,
        onClick,
        children,
    }) => {
    
    const [state, setState] = useState(0);
    
    const incremental_log = (state: number) => {
       onClick(state) 
       setState(state + 1)
    }
    
    return (
        <div style={{width, height, 
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
            }}
             onClick={ () => incremental_log(state) }
        >
            {children}
        </div>
    );
};

export default Card;