import React from 'react'
import { useState } from 'react';

export default function AddTodo({ addTodo }) {
    let [title, settitle] = useState('');
    let [desc, setdesc] = useState("");
    let Submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Discription is cannot be black");
        }
        else {
            addTodo(title, desc);
            settitle('');
            setdesc('');
        }
    }
    return (
        <div className='container py-3'>
            <h3>Add a todo</h3>
            <form onSubmit={Submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" >Todo title</label>
                    <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Todo discription</label>
                    <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}
