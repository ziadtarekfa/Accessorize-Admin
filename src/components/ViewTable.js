import { AiOutlineSearch } from 'react-icons/ai';
import { GoTrashcan } from 'react-icons/go';
import { AiOutlineEye } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import avatar from '../assets/avatar.jpg';
import '../componentStyles/view-table.css';
import { useEffect, useState } from 'react';
import EditDataModal from './EditDataModal';
import DeleteModal from './DeleteModal';
import Pagination from './Pagination';
const ViewTable = ({ text }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const NO_OF_USERS_PER_PAGE = 5;

    const [totalUsers, setTotalUsers] = useState([
        {
            name: "Ziad Tarek",
            email: "ziadtarekfa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Male",

        },
        {
            name: "Ziad Tarek",
            email: "ziadtarekfa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Male",

        },
        {
            name: "Ziad Tarek",
            email: "ziadtarekfa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Male",

        },
        {
            name: "Ziad Tarek",
            email: "ziadtarekfa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Male",

        },
        {
            name: "Ziad Tarek",
            email: "ziadtarekfa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Male",

        },
        {
            name: "Ziad Tarek",
            email: "ziadtarekfa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Male",

        },
        {
            name: "Ziad Tarek",
            email: "ziadtarekfa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Male",

        },
        {
            name: "Ziad Tarek",
            email: "ziadtarekfa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Male",
        },
        {
            name: "Ziad Tarek",
            email: "ziadtarekfa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Male",

        },
        {
            name: "Ziad Tarek",
            email: "ziadtarekfa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Male",

        },
        {
            name: "Ziad Tarek",
            email: "ziadtarekfa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Male",

        },
        {
            name: "Ziad Tarek",
            email: "ziadtarekfa@gmail.com",
            phoneNo: "+201066324579",
            gender: "Male",
        }
    ]);

    const [pageNumber, setPageNumber] = useState(1);
    const [currentUsers, setCurrentUsers] = useState([]);

    useEffect(() => {
        const indexOfLastUser = pageNumber * NO_OF_USERS_PER_PAGE;
        const indexOfFirstUser = indexOfLastUser - NO_OF_USERS_PER_PAGE;
        setCurrentUsers(totalUsers.slice(indexOfFirstUser, indexOfLastUser));
    }, [pageNumber, totalUsers])


    return (
        <>
            <div className='search-container'>
                <input placeholder='Search'></input>
                <AiOutlineSearch fill='#757575' />
                <button>Delete {text}</button>
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
                                <tr>
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
                                        }} />
                                    </td>
                                    <td>
                                        <GoTrashcan size='20px' onClick={() => {
                                            setIsDelete(true);
                                        }} />
                                    </td>

                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <Pagination totalUsers={totalUsers} pageNumber={pageNumber} setPageNumber={setPageNumber} />

            {isEdit && <EditDataModal setIsEdit={setIsEdit} />}
            {isDelete && <DeleteModal setIsDelete={setIsDelete} />}

        </>
    );
}

export default ViewTable;