import PropTypes from "prop-types";
import { useState } from 'react';

const BoardForm = (props) => {

const [title, setTitle] = useState('');
const [owner, setOwner] = useState('');
    
return (
    <>
    <h2>Create New Board</h2>
    <form> 
        <label>Title</label>
        <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        className={((title.length === 0) || (title.length > 40)) ? 'invalid-form-input' : ''}>
        </input>
        <label>Owner</label>
        <input
        type="text"
        value={owner}
        onChange={handleOwnerChange}
        className={((owner.length === 0) || (owner.length > 40)) ? 'invalid-form-input' : ''}></input>
    </form></>);  
};

BoardForm.propTypes = {};

export default BoardForm;