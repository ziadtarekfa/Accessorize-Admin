import '../componentStyles/view-table.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { GoTrashcan } from 'react-icons/go';
import { BiEdit } from 'react-icons/bi';
import { useEffect, useState, useRef } from 'react';
import avatar from '../assets/avatar.jpg';
import EditDataModal from './EditDataModal';
import DeleteModal from './DeleteModal';
import Pagination from './Pagination';


const ViewTable = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const NO_OF_USERS_PER_PAGE = 5;

    const [totalUsers, setTotalUsers] = useState([
        {
            id: '12',
            name: "Ziad Tarek",
            email: "ziadtarekfa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Male",

        },
        {
            id: '13',
            name: "Aly yaqoub",
            email: "alyfa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Male",

        },
        {
            id: '16',
            name: "Ateyat debeba",
            email: "atyat123fa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Female",

        },
        {
            id: '17',
            name: "Aly yaqoub",
            email: "lyfa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Male",

        },
        {
            id: '18',
            name: "Ateyat debeba",
            email: "atyt123fa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Female",

        },
        {
            id: '19',
            name: "Ateyat debeba",
            email: "atyt1213fa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Female",

        },
    ]);

    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [currentUsers, setCurrentUsers] = useState([]);

    useEffect(() => {
        const indexOfLastUser = currentPageNumber * NO_OF_USERS_PER_PAGE;
        const indexOfFirstUser = indexOfLastUser - NO_OF_USERS_PER_PAGE;
        setCurrentUsers(totalUsers.slice(indexOfFirstUser, indexOfLastUser));
    }, [currentPageNumber, totalUsers])


    const emailInputRef = useRef();

    const searchUser = () => {
        const email = emailInputRef.current.value;
        const userFound = totalUsers.filter((user) => {
            return user.email === email
        });
        setCurrentUsers(userFound);
    }

    return (
        <>
            <div className='search-container'>
                <input placeholder='Search using email address' onChange={(e) => {
                    if (e.target.value === "") {
                        // setCurrentUsers(totalUsers);
                        const indexOfLastUser = currentPageNumber * NO_OF_USERS_PER_PAGE;
                        const indexOfFirstUser = indexOfLastUser - NO_OF_USERS_PER_PAGE;
                        setCurrentUsers(totalUsers.slice(indexOfFirstUser, indexOfLastUser));
                    }
                }} ref={emailInputRef} type='email'></input>
                <AiOutlineSearch fill='#757575' />
                <button onClick={() => searchUser()}>Search</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th style={{ 'textAlign': 'center' }}>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentUsers.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td style={{ 'textAlign': 'center' }}>
                                        <img src={avatar} alt='profile' className='avatar' />
                                    </td>
                                    <td >{user.name}</td>
                                    <td >{user.email}</td>
                                    <td >{user.phoneNo}</td>
                                    <td >{user.gender}</td>
                                    <td>
                                        <BiEdit size='25px' onClick={() => {
                                            setIsEdit(true);
                                            setSelectedUser(user);
                                        }} />
                                    </td>
                                    <td>
                                        <GoTrashcan size='20px' onClick={() => {
                                            setIsDelete(true);
                                            setSelectedUser(user)
                                        }} />
                                    </td>

                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <Pagination totalUsers={totalUsers} currentPageNumber={currentPageNumber} setCurrentPageNumber={setCurrentPageNumber} />

            {isEdit && <EditDataModal setIsEdit={setIsEdit} user={selectedUser} />}
            {isDelete && <DeleteModal setIsDelete={setIsDelete} user={selectedUser} />}

        </>
    );
}

export default ViewTable;