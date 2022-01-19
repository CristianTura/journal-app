import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import NoteScreen from '../notes/NoteScreen'
import Sidebar from './Sidebar'
import NothingSelected from './NothingSelected'

const JournalScreen = () => {

    const { active } = useSelector(state => state.notes)
    const { showSidebar } = useSelector( state => state.ui );

    const [showMain, setShowMain] = useState(true);

    
    useEffect(() => {
        if (window.innerWidth < 768 ) {
            setShowMain(false);
        }
    }, [])

    return (
        <div 
            className='journal__main-content animate__animated animate__fadeIn animate__faster'
        >
            
            <Sidebar />

            {
                (!showSidebar || showMain) && 
                <main className='animate__animated animate__fadeIn animate__faster'>

                    {
                        ( active ) 
                            ? <NoteScreen />
                            : <NothingSelected />
                    }
                    
                </main>
            }


        </div>
    )
}

export default JournalScreen
