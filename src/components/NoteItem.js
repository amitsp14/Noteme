import React from 'react'
import {useContext} from 'react';
import noteContext from "../context/notes/noteContext"

const NoteItem = (props) => {
    const { note } = props;
    const context = useContext(noteContext)
    const {deleteNote} = context;

    return (
        <div className='col-md-3'>

            <div className="card my-3" >

                <div className="card-body">
                    <h5 className="card-title"> {note.title}</h5>
                    <p className="card-text">S {note.description}</p>
                    <i className="fa-solid fa-trash" onClick={ () =>{deleteNote(note._id)}}></i>     
                    <i className="fa-solid fa-pen-to-square mx-4 my-3"></i>               
                    </div>
            </div>

        </div>
    )
}

export default NoteItem