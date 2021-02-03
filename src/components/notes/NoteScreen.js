import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    const dispatch = useDispatch()
    const {active:note} = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset]=useForm(note);
    
    const activeId = useRef(note.id);

    useEffect(() => {
         if(note.id !== activeId.current){
             reset (note);
             activeId.current= note.id;
         }
    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues}))
    }, [formValues, dispatch])

    

    const {body, title} = formValues;
    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                    />
                <textarea 
                    placeholder="What hapenned today?"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>
                {
                    (note.url)
                    &&
                    (<div >
                        <img 
                            className="notes__image"
                            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" 
                            alt="un arbolito"
                        />
                    </div>)
                }
            </div>
        </div>
    )
}
