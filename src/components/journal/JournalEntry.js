import React from 'react';
import moment from "moment";
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { uiToggleSidebar } from '../../actions/ui';

const JournalEntry = ({ id, date, title, body, url }) => {

    const noteDate = moment(date);

    const dispatch = useDispatch();

    const handleEntryClick = (  ) => {

        dispatch( 
            activeNote( id, {
                date, title, body, url
            } 
            ) )

        if (window.innerWidth < 768) {
            dispatch( uiToggleSidebar() )
        }
 
    };
   
    return (
        <div 
            className='journal__entry animate__animated animate__fadeIn animate__faster'
            onClick={ handleEntryClick }    
        >

            {
                url &&
                <div 
                    className='journal__entry-picture'
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${ url })`
                    }}
                ></div>
            }

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    { title }
                </p>
                <p className='journal__entry-content'>
                    { body }
                </p>
            </div>

            <div className='journal__entry-date-box'>
                <span>{ noteDate.format('dddd') }</span>
                <h4>{ noteDate.format('do') }</h4>
            </div>
            
        </div>
    )
}

export default JournalEntry
