import React, { useState } from 'react'
import Modal from './Modal'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';


const ModalContainer = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const modalClose = () => {
        setModalOpen(!modalOpen)

    }

    return (
        <>
        <DensityMediumIcon className='burger' onClick={modalClose} fontSize="large" />
        { modalOpen && <Modal modalClose={modalClose}></Modal>}
        </>

    )
}

export default ModalContainer