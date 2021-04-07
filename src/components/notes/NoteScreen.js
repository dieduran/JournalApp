import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes_main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                ></input>
                <textarea
                    placeholder="Whats happened today"
                    className="notes__textarea"
                ></textarea>
                <div className="notes__images">
                    <img
                        src="https://png.pngtree.com/thumb_back/fh260/back_our/20190617/ourmid/pngtree-holiday-landscape-mountain-river-background-vector-material-image_124327.jpg"
                        alt="Imagen"
                    >
                    </img>
                </div>

            </div>
        </div>
    )
}