import React, { useEffect, useRef, useState } from 'react'
import "../styles/imageViewer.css"
import { RiDownloadLine, RiCloseLine } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'

const ImageViewer = ({ src, show, setShow, imageViewerRef }) => {

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "scroll"
        }
    }, [show])

    return (
        <>
            <div className={`custom-image-viewer-overlay ${show ? 'show' : ''}`} />
            <div ref={imageViewerRef} className={`custom-image-viewer ${show ? 'show' : ''}`} >
                <div className='viewer-header'>
                    <a href={src} download={true} className='icon-button download'>
                        <RiDownloadLine />
                    </a>
                    <span className='viewer-holder' />
                    <button onClick={() => setShow(false)} className='icon-button close'>
                        <AiOutlineClose />
                    </button>
                </div>
                <div className='viewer-body'>
                    <img src={src} alt="certificate/letter" />
                </div>
            </div>
        </>
    )
}

export default ImageViewer