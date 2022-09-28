import React, { FC, useState } from "react";

const EventsExample: FC = () => {
    const [inputValue, setInputValue] = useState<string>('')

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputValue)        
    }

    return (
        <div>
            <input value={inputValue} onChange={inputChangeHandler} type="text" />
            <button onClick={buttonClickHandler}>button with onClick</button>
        </div>
    );
};

export default EventsExample;