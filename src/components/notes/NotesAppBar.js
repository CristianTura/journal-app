import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'
import { uiToggleSidebar } from '../../actions/ui';

const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes );

    const handleSave = () => {
        dispatch( startSaveNote( active ) );
    }

    const handlePictureClick = () => {
        document.querySelector( '#fileSelector' ).click();
    }

    const handleFileChange = ( e ) => {
        const file = e.target.files[0];

        if ( file ){
             dispatch( startUploading( file ) )
        };

        document.querySelector('#fileSelector').value = '';
        
    }

    const handleVisibleMenu = () => {

        dispatch( uiToggleSidebar() );

    }

    const date = new Date().toDateString();
    

    return (
        <div className='notes__appbar'>

            <i 
                className="fas fa-angle-right notes__menu visible"
                onClick={ handleVisibleMenu }
            ></i>

            <span>{date}</span>


            <input 
                id="fileSelector"
                type="file" 
                name="file"
                style={{ display: 'none' }}
                onChange={ handleFileChange }
            />

            <div>
                <button 
                    className='btn'
                    onClick={ handlePictureClick }    
                >
                    Picture
                </button>

                <button 
                    className='btn'
                    onClick={ handleSave }
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default NotesAppBar
