import { useState } from 'react'
import './Note.css'


function Note({title,content,date, category,onView}){
    return <>
        <div className='note-container' onClick={onView} style={{cursor: 'pointer'}}>
            <div>
                {date}
            </div>
            <div>
                {title }
            </div>
            <div>
                {content}
            </div>
            <button onClick={
                (e) => {
                    e.stopPropagation()

                }
            }>X</button>
        </div>
    </>
}

export default Note