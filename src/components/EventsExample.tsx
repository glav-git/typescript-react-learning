import React, { FC, useState } from "react";

const EventsExample: FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputValue);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Fisting started');
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('Fisting droped')
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    return (
        <div>
            <input value={inputValue} onChange={inputChangeHandler} type="text" />
            <button onClick={buttonClickHandler}>button with onClick</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div 
                onDrop={dropHandler} 
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15}}>
            </div>
        </div>
    );
};

export default EventsExample;