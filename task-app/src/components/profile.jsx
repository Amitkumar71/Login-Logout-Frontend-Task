import React from 'react';
import './profile.css';

const Profile = () => {
    return (
        <div>
            <div className='p-screen'>
                <h2 style={{backgroundColor:"white",margin:"0",height:"50px",display:"flex",alignItems:"center",marginLeft:"10px"}}>Account Settings</h2>
                <div style={{ display: 'flex', alignItems: 'center', padding: "30px" }}>
                    <img
                        src="https://via.placeholder.com/50"
                        alt="Profile"
                        style={{ borderRadius: '50%', marginRight: '10px' }}
                    />
                    <div>
                        <p style={{color:"black",fontWeight:"bold", margin:"0px"}}>Marry Doe</p>
                        <p>Marry@gmail.com</p>
                    </div>
                </div>
                <p style={{ padding: "10px" }}>
                    Lorem ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                    Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </p>
                <div style={{border:"dashed",color:"grey"}}></div>
            </div>
        </div>
    );
};

export default Profile;