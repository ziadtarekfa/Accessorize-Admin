import '../pageStyles/editProfile.css';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Profile = () => {

    const { id } = useParams();
    const pathName = window.location.pathname;
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {

        if (pathName.includes('sellers')) {
            console.log("seller Path");
            fetch('http://localhost:8000/admin/sellerId', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Id: id })
            }).then((res) => {
                console.log(res);
                return res.json();
            }).then((data) => {
                console.log(data[0]);
                setUser(data[0]);
                setLoading(false);
            });
        }
        else if (pathName.includes('users')) {
            console.log("user");
            const userId = pathName.substring(7);
            console.log(userId);
            fetch('http://localhost:8000/admin/userId', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Id: id })
            }).then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data);
                setUser(data);
                setLoading(false);
            });
        }

    }, [id, pathName]);



    const saveChanges = (e) => {
        e.preventDefault();
        console.log(user);
    }
    return (
        <main className='home'>
            {
                loading ? <Loading /> :

                    <form className='profile_form' onSubmit={saveChanges}>
                        <div className='profile_image_container' >
                            <h2>Edit Profile</h2>
                        </div>
                        <h4>Personal info</h4>
                        <div className='flex_box_row'>
                            <div className='flex_box_column'>
                                <label>First name</label>
                                <input defaultValue={user.firstName} type="text" required onChange={(e) => {
                                    user.firstName = e.target.value;
                                }} />
                            </div>
                            <div className='flex_box_column' style={{ "marginLeft": 10 }}>
                                <label>Last name</label>
                                <input defaultValue={user.lastName} type="text" required onChange={(e) => {
                                    user.lastName = e.target.value;
                                }} />
                            </div>
                        </div>

                        <div className='flex_box_column'>
                            <label>Email </label>
                            <input defaultValue={user.email} type="email" required onChange={(e) => {
                                user.email = e.target.value;
                            }} />
                        </div>
                        <div className='flex_box_column'>
                            <label>Phone number</label>
                            <input defaultValue={user.phoneNumber} type="text" required onChange={(e) => {
                                user.phoneNumber = e.target.value;
                            }} />
                        </div>

                        <div className='flex_box_column'>
                            <label>Birth date</label>
                            <input defaultValue={user.birthDate} type="date" required onChange={(e) => {
                                user.birthDate = e.target.value.toString();
                            }} />
                        </div>
                        <h4 style={{ "marginTop": 10 }}>Address info</h4>
                        <div className='flex_box_row'>
                            <div className='flex_box_column'>
                                <label>Country</label>
                                <input defaultValue={user.address.country} type="text" required onChange={(e) => {
                                    user.address.country = e.target.value;
                                }} />
                            </div>
                            <div className='flex_box_column'>
                                <label>State</label>
                                <input defaultValue={user.address.state} type="text" required onChange={(e) => {
                                    user.address.state = e.target.value;
                                }} />
                            </div>
                        </div>
                        <div className='flex_box_row' >
                            <div className='flex_box_column'>
                                <label>City</label>
                                <input defaultValue={user.address.city} type="text" required onChange={(e) => {
                                    user.address.city = e.target.value;
                                }} />
                            </div>
                            <div className='flex_box_column' style={{ "marginLeft": 10 }}>
                                <label>Zip Code</label>
                                <input defaultValue={user.address.zipCode} type="number" required onChange={(e) => {
                                    user.address.zipCode = e.target.value;
                                }} />
                            </div>
                        </div>
                        <div className='flex_box_row'>
                            <div className='flex_box_column'>
                                <label>Street name</label>
                                <input defaultValue={user.address.street} type="text" required onChange={(e) => {
                                    user.address.street = e.target.value;
                                }} />
                            </div >
                            <div className='flex_box_column' style={{ "marginLeft": 10 }}>
                                <label>Floor number</label>
                                <input defaultValue={user.address.floorNum} type="number" min="1" required onChange={(e) => {
                                    user.address.flooNum = e.target.value;
                                }} />
                            </div>
                        </div>

                        <div className='flex_box_column'>
                            <label>Apartment number</label>
                            <input defaultValue={user.address.aptNum} type="number" min="1" required onChange={(e) => {
                                user.address.aptNum = e.target.value;
                            }} />
                        </div>
                        <div>

                            <button className='cancel_button' type='reset' onClick={() => {
                                navigate(-1);
                            }}>Cancel</button>
                            <button className='save_button'>Save Changes</button>
                        </div>
                    </form>
            }


        </main>

    );
}

export default Profile;