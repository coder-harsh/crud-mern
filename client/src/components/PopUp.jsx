import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import AddUser from './AddUser';
function PopUp() {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <div className='my-2'>
            <Modal opened={opened} onClose={close} title="Authentication">
                <AddUser />
            </Modal>

            <Button onClick={open}>Open modal</Button>
        </div>
    )
}

export default PopUp
