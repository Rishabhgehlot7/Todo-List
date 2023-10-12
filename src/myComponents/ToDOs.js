import React from 'react'
import ToDO from "./ToDO";

export default function ToDOs(props) {
  return (
    <div className='container'>
      <h3 className='py-3'>Todos List</h3>

      {props.Todos.length === 0 ? "No todos for display" :
        props.Todos.map((Todo) => {
          return <ToDO todo={Todo} key={Todo.sno} onDelete={props.onDelete} />
        })
      }

    </div>
  )
}
