import React, {Fragment, useState} from "react";


const EditTodo =({todo})=> {

const [description, setDescription]=useState(todo.description);        
    
//console.log(todo);

//edit description function
const updateDescription = async e =>{
    e.preventDefault();
    try {
        const body={description};
        const response=await fetch(`http:localhost:5000/todos/${todo.todo_id}`, 
        {method: "PUT",
        headers: {"Content-type": "application/json"},
        body:JSON.stringify(body)})

        window.location ="/";
    } catch (err) {
        console.error(err.message);
        
    }


    return (<Fragment>
<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`id${todo.todo_id}`}>
Edit
</button>
{/* id= id10 */}


<div class="modal" id={`id${todo.todo_id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Edit todo</h4>
        <button type="button" class="close" data-dismiss="modal" onClick={()=>setDescription(todo.description)}>times;</button>
      </div>

      <div class="modal-body">
        <input type="text" className="formal-control" value={description} onChange={e=> setDescription(e.target.value)}/>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e=> updateDescription(e)}>Edit</button>
      </div>

    </div>
  </div>
</div></Fragment>
    )
}

};


export default EditTodo; 