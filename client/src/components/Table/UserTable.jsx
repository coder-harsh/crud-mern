import React from 'react'
import { useState } from 'react';
import cx from 'clsx';
import { ScrollArea, Table } from '@mantine/core';
import classes from './TableScrollArea.module.css';
import { IoAddCircleSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const data = [
    {
        name: 'Athena Weissnat',
        company: 'Little - Rippin',
        email: 'Elouise.Prohaska@yahoo.com',
    },
    {
        name: 'Deangelo Runolfsson',
        company: 'Greenfelder - Krajcik',
        email: 'Kadin_Trantow87@yahoo.com',
    },
    {
        name: 'Danny Carter',
        company: 'Kohler and Sons',
        email: 'Marina3@hotmail.com',
    },
    {
        name: 'Trace Tremblay PhD',
        company: 'Crona, Aufderhar and Senger',
        email: 'Antonina.Pouros@yahoo.com',
    },
    {
        name: 'Derek Dibbert',
        company: 'Gottlieb LLC',
        email: 'Abagail29@hotmail.com',
    },
    {
        name: 'Viola Bernhard',
        company: 'Funk, Rohan and Kreiger',
        email: 'Jamie23@hotmail.com',
    },
    {
        name: 'Austin Jacobi',
        company: 'Botsford - Corwin',
        email: 'Genesis42@yahoo.com',
    },
    {
        name: 'Hershel Mosciski',
        company: 'Okuneva, Farrell and Kilback',
        email: 'Idella.Stehr28@yahoo.com',
    },
    {
        name: 'Mylene Ebert',
        company: 'Kirlin and Sons',
        email: 'Hildegard17@hotmail.com',
    },
    {
        name: 'Lou Trantow',
        company: 'Parisian - Lemke',
        email: 'Hillard.Barrows1@hotmail.com',
    },
    {
        name: 'Dariana Weimann',
        company: 'Schowalter - Donnelly',
        email: 'Colleen80@gmail.com',
    },
    {
        name: 'Dr. Christy Herman',
        company: 'VonRueden - Labadie',
        email: 'Lilyan98@gmail.com',
    },
    {
        name: 'Katelin Schuster',
        company: 'Jacobson - Smitham',
        email: 'Erich_Brekke76@gmail.com',
    },
    {
        name: 'Melyna Macejkovic',
        company: 'Schuster LLC',
        email: 'Kylee4@yahoo.com',
    },
    {
        name: 'Pinkie Rice',
        company: 'Wolf, Trantow and Zulauf',
        email: 'Fiona.Kutch@hotmail.com',
    },
    {
        name: 'Brain Kreiger',
        company: 'Lueilwitz Group',
        email: 'Rico98@hotmail.com',
    },
    {
        name: 'Myrtice McGlynn',
        company: 'Feest, Beahan and Johnston',
        email: 'Julius_Tremblay29@hotmail.com',
    },
    {
        name: 'Chester Carter PhD',
        company: 'Gaylord - Labadie',
        email: 'Jensen_McKenzie@hotmail.com',
    },
    {
        name: 'Mrs. Ericka Bahringer',
        company: 'Conn and Sons',
        email: 'Lisandro56@hotmail.com',
    },
    {
        name: 'Korbin Buckridge Sr.',
        company: 'Mraz, Rolfson and Predovic',
        email: 'Leatha9@yahoo.com',
    },
    {
        name: 'Dr. Daisy Becker',
        company: 'Carter - Mueller',
        email: 'Keaton_Sanford27@gmail.com',
    },
    {
        name: 'Derrick Buckridge Sr.',
        company: "O'Reilly LLC",
        email: 'Kay83@yahoo.com',
    },
    {
        name: 'Ernie Hickle',
        company: "Terry, O'Reilly and Farrell",
        email: 'Americo.Leffler89@gmail.com',
    },
    {
        name: 'Jewell Littel',
        company: "O'Connell Group",
        email: 'Hester.Hettinger9@hotmail.com',
    },
    {
        name: 'Cyrus Howell',
        company: 'Windler, Yost and Fadel',
        email: 'Rick0@gmail.com',
    },
    {
        name: 'Dr. Orie Jast',
        company: 'Hilll - Pacocha',
        email: 'Anna56@hotmail.com',
    },
    {
        name: 'Luisa Murphy',
        company: 'Turner and Sons',
        email: 'Christine32@yahoo.com',
    },
    {
        name: 'Lea Witting',
        company: 'Hodkiewicz Inc',
        email: 'Ford_Kovacek4@yahoo.com',
    },
    {
        name: 'Kelli Runolfsson',
        company: "Feest - O'Hara",
        email: 'Dimitri87@yahoo.com',
    },
    {
        name: 'Brook Gaylord',
        company: 'Conn, Huel and Nader',
        email: 'Immanuel77@gmail.com',
    },
];
function userTable() {
    const [scrolled, setScrolled] = useState(false);

    const rows = data.map((row) => (
        <Table.Tr key={row.name}>
            <Table.Td>{row.name}</Table.Td>
            <Table.Td>{row.email}</Table.Td>
            <Table.Td>{row.company}</Table.Td>
            <Table.Td>
                <div className='flex'>
                    <FaEdit size={23} className='hover:cursor-pointer text-yellow-700' />
                    <MdDelete size={23} className='hover:cursor-pointer text-red-500' />
                </div>
            </Table.Td>
        </Table.Tr>
    ));
    return (
        <div className='flex justify-center items-center flex-col'>
            <div className='w-[80vw] flex justify-between px-6 bg-red-500 py-3'>
                <h3 className='font-bold text-xl text-white'>Manage Employees</h3>
                <button className="bg-green-400 text-white hover:bg-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
                    <IoAddCircleSharp className='text-white' />
                    <span>Add New Employee</span>
                </button>
            </div>
            <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)} className='w-[80vw]'>
                <Table miw={600}>
                    <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                        <Table.Tr>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Email</Table.Th>
                            <Table.Th>Company</Table.Th>
                            <Table.Th>Actions</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </ScrollArea>
        </div>
    )
}

export default userTable
