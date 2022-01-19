import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {

    const dispatch = useDispatch()

    const { active:note } = useSelector(state => state.notes);
    const [ formValues, handleInputChange, reset ] = useForm( note );
    const  { body, title, id } = formValues;

    const activeId =  useRef( note.id )

    useEffect(() => {

        if ( note.id !== activeId.current ) {
            reset(note);
            activeId.current = note.id;
        }

    }, [note, reset])

    useEffect(() => {
        
        dispatch( activeNote( formValues.id, {...formValues} ) )

    }, [formValues, dispatch])

    const handleClick = () => {
        dispatch( startDeleting( id ) );
    }

    const creationDate = new Date(note.date).toString().slice(0,15);

    return (
        <div className='notes__main-content'>

            <NotesAppBar />

            <div className='notes-content'> 
                
                <input 
                    type="text" 
                    placeholder="Some awesome title"
                    className='notes__title-input'
                    name='title'
                    autoComplete='off'
                    value={ title }
                    onChange={ handleInputChange }
                />

                <textarea
                    placeholder="What happened today?"
                    className='notes__textarea'
                    name='body'
                    value={ body }
                    onChange={ handleInputChange }
                ></textarea>

                {
                    (note.url) 
                    && <div className='notes__image'>
                            <img src={ note.url } alt="Imagen" />
                        </div>
                }

                <p className='notes__creationDate'>Created on: {creationDate}</p>

            </div>

            <button
                className='btn btn-dangger'
                onClick={ handleClick }
            >
                Delete
            </button>

        </div>
    )
}

export default NoteScreen
