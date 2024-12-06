import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { IoAddCircleSharp } from "react-icons/io5";
function PopUp({ comp }) {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <div className='my-2'>
            <Modal opened={opened} onClose={close}>
                {comp}
            </Modal>
            <button className="bg-green-400 text-white hover:bg-gray-400 font-bold py-2 px-4 rounded inline-flex items-center" onClick={open}>
                <IoAddCircleSharp className='text-white' />
                <span>Add New Employee</span>
            </button>
        </div>
    )
}

export default PopUp
