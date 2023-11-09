import { useState } from "react";
//step 1: import
import { useDispatch } from "react-redux";

function ListName() {
    const[newListName, setNewListName] = useState('');
    // step 2:
    // This is not commonly missed
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New name', newListName);
        // step 3: dispatch an action
        const action = { type: 'SET_LIST_NAME', payload: newListName};
        dispatch(action);
    }


    return(
        <form onSubmit={handleSubmit}>
            <input value={newListName} onChange={(e) => setNewListName(e.target.value)} />
            <button type="submit">save</button>
        </form>
    )

}

export default ListName