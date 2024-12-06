import React from 'react';
import { Button, Group, Modal } from '@mantine/core';
import { MdDelete } from 'react-icons/md';
import { useDisclosure } from '@mantine/hooks';

function Alert() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div className='mx-2'>
            <Button onClick={open} color="red">
                <MdDelete size={20} />
            </Button>
            <Modal title="Delete this page?" opened={opened} onClose={close}>
                Are you sure you want to delete this employee? This action cannot be undone.
                <Group mt="lg" position="right">
                    <Button onClick={close} variant="default">
                        Cancel
                    </Button>
                    <Button onClick={close} color="red">
                        Confirm
                    </Button>
                </Group>
            </Modal>
        </div>
    );
}

export default Alert;
