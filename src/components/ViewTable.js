import '../componentStyles/view-table.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { GoTrashcan } from 'react-icons/go';
import { BiEdit } from 'react-icons/bi';
import { useEffect, useState, useRef } from 'react';
import EditDataModal from './EditDataModal';
import DeleteModal from './DeleteModal';
import Pagination from './Pagination';


const ViewTable = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [totalUsers, setTotalUsers] = useState([]);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [currentUsers, setCurrentUsers] = useState([]);

    const NO_OF_USERS_PER_PAGE = 5;



    useEffect(() => {
        const indexOfLastUser = currentPageNumber * NO_OF_USERS_PER_PAGE;
        const indexOfFirstUser = indexOfLastUser - NO_OF_USERS_PER_PAGE;

        fetch(`http://localhost:8000/admin/${window.location.pathname}`).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            setTotalUsers(data);
            setCurrentUsers(data.slice(indexOfFirstUser, indexOfLastUser));
        });

    }, [currentPageNumber]);


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
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Birth Date</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentUsers.map((user) => {
                            return (
                                <tr key={user._id}>

                                    <td >{user.firstName}</td>
                                    <td >{user.lastName}</td>
                                    <td>{user.gender}</td>
                                    <td >{user.birthDate}</td>
                                    <td>{user.email}</td>
                                    <td >{user.phoneNumber}</td>
                                    <td>{user.address}</td>
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