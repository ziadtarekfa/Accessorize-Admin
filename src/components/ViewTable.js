import '../componentStyles/view-table.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useState, useRef } from 'react';
import DeleteModal from './DeleteModal';
import Pagination from './Pagination';
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


    const searchRef = useRef();

    const searchUser = () => {
        if (searchRef.current.value === "") {
            const indexOfLastUser = currentPageNumber * NO_OF_USERS_PER_PAGE;
            const indexOfFirstUser = indexOfLastUser - NO_OF_USERS_PER_PAGE;
            setCurrentUsers(totalUsers.slice(indexOfFirstUser, indexOfLastUser));
        }
        else {
            const input = searchRef.current.value.toLowerCase();
            const userFound = totalUsers.filter((user) => {
                return user.email.trim().toLowerCase().includes(input) || user.firstName.trim().toLowerCase().includes(input)
                    || user.lastName.trim().toLowerCase().includes(input) || user.phoneNumber.trim().toLowerCase().includes(input)
            });
            setCurrentUsers(userFound.slice(0, 4));
        }

    }

    return (
        <>
            {loading && <Loading />}
            {isEmptyList && <div className='empty-list'>{`There are no current ${text}`}</div>}

            <div className='search-container'>
                <input placeholder='Search using email address' onChange={searchUser} ref={searchRef} type='email'></input>
                <AiOutlineSearch fill='#757575' />
            </div>

            {
                currentUsers &&

                <>
                    {
                        window.location.pathname === '/users' ? <UserTable currentUsers={currentUsers} setIsDelete={setIsDelete}
                            setSelectedUser={setSelectedUser} selectedUser={selectedUser} />
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