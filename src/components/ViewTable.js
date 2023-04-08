import '../componentStyles/view-table.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { GoTrashcan } from 'react-icons/go';
import { BiEdit } from 'react-icons/bi';
import { useEffect, useState, useRef } from 'react';
import DeleteModal from './DeleteModal';
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';


const ViewTable = () => {
    const [isDelete, setIsDelete] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [totalUsers, setTotalUsers] = useState([]);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [currentUsers, setCurrentUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();
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
            setLoading(false);
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
            {
                loading ? <Loading /> :
                    <>
                        <div className='search-container'>
                            <input placeholder='Search using email address' onChange={(e) => {
                                if (e.target.value === "") {
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
                                                <td>{`${user.address.country}, ${user.address.state}`}</td>
                                                <td>
                                                    <BiEdit size='25px' onClick={() => {
                                                        navigate(`/sellers/${user._id}`);
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
                        {
                            isDelete &&
                            <DeleteModal setIsDelete={setIsDelete} user={selectedUser}
                                currentUsers={currentUsers} setCurrentUsers={setCurrentUsers} />
                        }
                    </>

            }




        </>
    );
}

export default ViewTable;