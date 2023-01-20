import {useState} from 'react';

export default function Button({handleToggle}){
    const [state, setState] = useState(false)
    
    function handleRandomSubmit(e){
        e.preventDefault();
        handleToggle(state);

    }

    return (
        <>
        <h2>Hit the button for random gif!</h2>

        <button onClick={handleRandomSubmit} type="submit">Roll</button>
        </>
    )
}