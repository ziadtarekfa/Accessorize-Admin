import '../componentStyles/view-table.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { GoTrashcan } from 'react-icons/go';
import { BiEdit } from 'react-icons/bi';
import { useEffect, useState, useRef } from 'react';
import DeleteModal from './DeleteModal';
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import UserTable from './UserTable';
import SellerTable from './SellerTable';


const ViewTable = ({ text }) => {
    const [isDelete, setIsDelete] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [totalUsers, setTotalUsers] = useState([]);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [currentUsers, setCurrentUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEmptyList, setIsEmptyList] = useState(false);
    const NO_OF_USERS_PER_PAGE = 5;


    useEffect(() => {
        const indexOfLastUser = currentPageNumber * NO_OF_USERS_PER_PAGE;
        const indexOfFirstUser = indexOfLastUser - NO_OF_USERS_PER_PAGE;

        fetch(`http://localhost:8000/admin/${window.location.pathname}`).then((res) => {
            return res.json();
        }).then((data) => {
            if (data.length === 0) {
                setLoading(false);
                setIsEmptyList(true)
            }
            else {
                setTotalUsers(data);
                setCurrentUsers(data.slice(indexOfFirstUser, indexOfLastUser));
                setLoading(false);
            }

        }).catch((err) => {
            setLoading(false);
            alert(err.message);
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
            {loading && <Loading />}
            {isEmptyList && <div className='empty-list'>{`There are no current ${text}`}</div>}

            <div className='search-container'>
                {/* <input placeholder='Search using email address' onChange={(e) => {
                            if (e.target.value === "") {
                                const indexOfLastUser = currentPageNumber * NO_OF_USERS_PER_PAGE;
                                const indexOfFirstUser = indexOfLastUser - NO_OF_USERS_PER_PAGE;
                                setCurrentUsers(totalUsers.slice(indexOfFirstUser, indexOfLastUser));
                            }
                        }} ref={emailInputRef} type='email'></input>
                        <AiOutlineSearch fill='#757575' />
                        <button onClick={() => searchUser()}>Search</button> */}
            </div>

            {
                currentUsers &&

                <>
                    {
                        window.location.pathname === '/users' ? <UserTable currentUsers={currentUsers} setIsDelete={setIsDelete}
                            setSelectedUser={setSelectedUser} />
                            : <SellerTable currentUsers={currentUsers} setIsDelete={setIsDelete} setSelectedUser={setSelectedUser} />
                    }


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