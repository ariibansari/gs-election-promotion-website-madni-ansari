import React, { useEffect, useRef, useState } from 'react'
import "../styles/imageViewer.css"

const ImageViewer = ({ src, show, imageViewerRef }) => {

    const handleDrag = e => {
        console.log(e)
    }

    return (
        <>
            <div className={`custom-image-viewer-overlay ${show ? 'show' : ''}`} />
            <div ref={imageViewerRef} className={`custom-image-viewer ${show ? 'show' : ''}`} >
                <span className='viewer-holder' />
                <div className='image-container'>
                    <img src={src} alt="certificate/letter" />
                </div>
            </div>
        </>
    )
}

export default ImageViewer