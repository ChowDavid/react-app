import {useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';





function Todo(props){
    const [modelIsOpen,setModelIsOpen ] =useState(false);


    function clearHandler(){
        console.log('clearHandler');
    }
    function deleteHandler(){
        setModelIsOpen(true);
    }

    function closeModalHandler(){
        setModelIsOpen(false);
    }
    return (
    <div>
        <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>DELETE</button>
          <span><button class="btn" onClick={clearHandler}>CLEAR</button></span>
          {modelIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
          {modelIsOpen && <Backdrop click={closeModalHandler}/>}


        </div>
      </div> 
    </div>

    );
    
}

export default Todo;