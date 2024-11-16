import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';

const Navbar = () => {
    const [people, setPeople] = useState([]);
    const [selectedPerson, setSelectedPerson] = useState(null);

    useEffect(() => {
        const fetchAllPeople = async () => {
            try {
                console.log("Fetching all data...");
                const querySnapshot = await getDocs(collection(db, "parsed_csv_data"));

                const peopleData = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data().data;
                    if (data) {
                        peopleData.push({
                            id: data[0],
                            name: data[1],
                            gender: data[2],
                            role: data[3],
                            latitude: data[4],
                            longitude: data[5],
                            routeNumber: data[6],
                            stopCount: data[7],
                            activeStatus: data[8],
                            routeStatus: data[9],
                            notes: data[10],
                            priority: data[11],
                        });
                    }
                });

                console.log("Total people fetched:", peopleData.length);
                setPeople(peopleData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchAllPeople();
    }, []);

    const openSidebar = () => {
        document.getElementById("sidebar").classList.remove("-translate-x-full");
    };

    const closeSidebar = () => {
        document.getElementById("sidebar").classList.add("-translate-x-full");
    };

    const handlePersonClick = (person) => {
        setSelectedPerson(selectedPerson?.id === person.id ? null : person);
    };

    return (
        <div className='fixed w-full top-0 left-0 z-50 bg-black'>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
                <h1 className='w-full text-3xl font-bold text-[#00d59a]'>S . K . S</h1>
                <ul className='hidden md:flex'>
                    <li className='p-4'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link to='/projects'>Projects</Link>
                    </li>
                </ul>
                <div onClick={openSidebar} className='cursor-pointer'>
                    <AiOutlineMenu size={20} />
                </div>
            </div>

            {/* Sidebar */}
            <div
                id="sidebar"
                className='fixed left-0 top-0 w-[80%] md:w-[30%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 overflow-y-auto -translate-x-full'
            >
                <div className='flex justify-between items-center m-4'>
                    <h1 className='text-3xl font-bold text-[#00d59a]'>S . K . S</h1>
                    <div onClick={closeSidebar} className='cursor-pointer'>
                        <AiOutlineClose size={20} className='text-white' />
                    </div>
                </div>

                {/* Search bar */}
                <div className='px-4 mb-4'>
                    <input
                        type='text'
                        placeholder='Search people...'
                        className='w-full p-2 bg-gray-800 text-white rounded'
                        onChange={(e) => {
                            const searchTerm = e.target.value.toLowerCase();
                            setPeople(
                                people.filter(
                                    (person) =>
                                        person.name.toLowerCase().includes(searchTerm) ||
                                        person.role.toLowerCase().includes(searchTerm)
                                )
                            );
                        }}
                    />
                </div>

                {/* People List */}
                <div className='p-4'>
                    <h2 className='text-white text-xl mb-4 border-b border-gray-600 pb-2'>
                        People ({people.length})
                    </h2>

                    {people.length === 0 ? (
                        <p className='text-white'>Loading data...</p>
                    ) : (
                        people.map((person) => (
                            <div
                                key={person.id}
                                className='mb-2 cursor-pointer'
                                onClick={() => handlePersonClick(person)}
                            >
                                <div className='bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors'>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-white font-medium'>{person.name}</span>
                                        <span
                                            className={`px-2 py-1 rounded text-sm ${
                                                person.activeStatus === '"TRUE"' ? 'bg-green-600' : 'bg-red-600'
                                            }`}
                                        >
                                            {person.activeStatus.replace(/"/g, '')}
                                        </span>
                                    </div>

                                    <div className='text-gray-400 text-sm'>
                                        {person.role.replace(/"/g, '')} • Route: {person.routeNumber}
                                    </div>

                                    {/* Expanded details */}
                                    {selectedPerson?.id === person.id && (
                                        <div className='mt-2 pt-2 border-t border-gray-700'>
                                            <div className='grid grid-cols-2 gap-2 text-sm'>
                                                <div className='text-gray-400'>Gender:</div>
                                                <div className='text-white'>
                                                    {person.gender.replace(/"/g, '')}
                                                </div>

                                                <div className='text-gray-400'>Location:</div>
                                                <div className='text-white'>
                                                    {person.latitude}, {person.longitude}
                                                </div>

                                                <div className='text-gray-400'>Stop Count:</div>
                                                <div className='text-white'>{person.stopCount}</div>

                                                <div className='text-gray-400'>Route Status:</div>
                                                <div className='text-white'>
                                                    {person.routeStatus.replace(/"/g, '')}
                                                </div>

                                                <div className='text-gray-400'>Priority:</div>
                                                <div className='text-white'>{person.priority}</div>

                                                {person.notes && (
                                                    <>
                                                        <div className='text-gray-400'>Notes:</div>
                                                        <div className='text-white'>
                                                            {person.notes.replace(/"/g, '')}
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
