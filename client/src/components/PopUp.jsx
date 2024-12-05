import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
function PopUp() {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <div>
            <Modal opened={opened} onClose={close} title="Authentication" centered>
                <h3>Hi sir</h3>
            </Modal>

            <Button onClick={open}>Open modal</Button>
        </div>
    )
}

export default PopUp
