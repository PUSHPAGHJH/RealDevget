import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../App';
// import thapapic from "../images/thapa1.png";
import aboutpic from "../images/aboutpic.png";
// import {UserContext} from "../App";
import { Link, useHistory } from "react-router-dom";
import "./Home.css";


const About = () => {

    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();
    const [userData, setUserData] = useState({});
    const [show, setShow] = useState(false);
    const prevDate = new Date();

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            setUserData(data);
            const newDate = new Date();
            if ((newDate - prevDate) < 1000) {
                setTimeout(() => {
                    setShow(true);
                }, (1000 - (newDate - prevDate)));
            } else {
                setShow(true);
            }
            // / update **/ 
            dispatch({ type: 'USER', payload: true });

            if (!res.status === 200) {
                const error = new Error(res.error);
                const newDate = new Date();
                if ((newDate - prevDate) < 1000) {
                    setTimeout(() => {
                        setShow(true);
                    }, (1000 - (newDate - prevDate)));
                } else {
                    setShow(true);
                }
                throw error;
            }

        } catch (err) {
            console.log(err);
            history.push('/login');
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);

    if (!show) {
        return (
            <div className="loader-holder">
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="container emp-profile">
                <form method="GET">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src={userData.profileImage || aboutpic} alt="bishal" />
                            </div>

                        </div>

                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>{userData.name}</h5>
                                <h6>{userData.work}</h6>
                                <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 1/10 </span></p>


                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>

                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <Link to="/updateprofile">Edit Profile</Link>
                        </div>

                    </div>


                {/* left side div here , can uncomment but need togive some time to solve so for now just ignoring , update on further updates  */}

                    <div className="row">
                        {/* left side url  */}
                         <div className="col-md-4">
                            <div className="profile-work">
                                {/* <p> WORK LINK</p>
                                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">Youtube</a> <br />
                                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">Instagram</a> <br />
                                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">Thapa Technical</a> <br />
                                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">WebsiteGitHubMERN Dev</a> <br />
                                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">Web Developer</a> <br />
                                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">Figma</a> <br />
                                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">Software Engeeneer</a> <br />
 */}

                            </div>
                        </div> 

                        {/* right side data toogle  */}

                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6 position-relative">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData._id}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6 position-relative">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6 ">
                                            <p>{userData.name}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6 position-relative">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6 ">
                                            <p>{userData.email}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6 position-relative">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.phone}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6 position-relative">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.work}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    {/* <div className="row">
                                        <div className="col-md-6 position-relative">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div> */}
                                    {/* <div className="row mt-3">
                                        <div className="col-md-6 position-relative">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>10$/hr</p>
                                        </div>
                                    </div> */}
                                    {/* <div className="row mt-3">
                                        <div className="col-md-6 position-relative">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>230</p>
                                        </div>
                                    </div> */}
                                    {/* <div className="row mt-3">
                                        <div className="col-md-6 position-relative">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div> */}
                                    {/* <div className="row mt-3">
                                        <div className="col-md-6 position-relative">
                                            <label>Availability</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>6 months</p>
                                        </div>
                                    </div> */}

                                    <h2>Comming Soon...<span class="badge badge-dark" style={{ backgroundColor: "#6c757d" }}></span></h2>

                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}

export default About
