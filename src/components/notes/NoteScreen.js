import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
    return (
        <div className='notes__main-content'>

            <NotesAppBar />

            <div className='notes-content'> 
                
                <input 
                    type="text" 
                    placeholder="Some awesome title"
                    className='notes__title-input'
                    autoComplete='off'
                />

                <textarea
                    placeholder="What happened today?"
                    className='notes__textarea'
                ></textarea>

                <div className='notes__image'>
                    <img src="https://i.pinimg.com/originals/53/78/6d/53786d55a260fd1414119b189315b09c.jpg" 
                        alt="Imagen" 
                    />
                </div>

            </div>

        </div>
    )
}

export default NoteScreen
