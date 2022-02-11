import React, { useState, useEffect } from 'react';

const Updateprofile = () => {
    const [user, setUser] = useState({});

    const handleInputs = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const updateProfile = async e => {
        e.preventDefault();

        if (!validateEmail(user.email)) {
            window.alert("Invalid Email Address.")
            return;
        }
        if (!validateNumber(user.phone)) {
            window.alert("Invalid Phone Number.")
            return;
        }
        if (user?.name.length < 5) {
            window.alert("Invalid Name. It must contain atleast 5 character.")
            return;
        }

        const formData = new FormData();
        formData.append("profileImage", user.file);
        formData.append("name", user.name);
        formData.append("email", user.email);
        formData.append("phone", user.phone);
        formData.append("work", user.work);

        const res = await fetch("/updateProfile", {
            method: "POST",
            headers: {
                // "Content-Type": "application/json"
            },
            body: formData
        });

        const data = await res.json();

        if (data.status === 422 || !data) {

            window.alert("Invalid Update");

            console.log("Invalid Update");
        } else {
            window.alert("Update Successfull");
            console.log("Successfull Update");
        }
    }


    const validateEmail = (email) => { return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); };

    function validateNumber(inputtxt) {
        var phoneno = /^\d{10}$/;
        if (inputtxt.toString().match(phoneno)) {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        fetch("/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res) => {
            res.json().then((data) => {
                console.log(data)
                setUser(data)
            })
        })

    }, [])
    return (
        <>
            <form onSubmit={updateProfile} className="signup">
                <div className="form-group">
                    {/* <label for="exampleFormControlFile1">Example file input</label> */}
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" onChange={e => {
                        setUser({ ...user, file: e.target.files[0] });
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">
                        <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input type="text" name="name" id="name" autocomplete="off"
                        value={user.name}
                        onChange={handleInputs}
                        placeholder="Your Name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">
                        <i className="zmdi zmdi-email material-icons-name"></i>
                    </label>
                    <input type="email" name="email" id="email" autoComplete="off"
                        value={user.email}
                        onChange={handleInputs}
                        placeholder="Your Email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">
                        <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                    </label>
                    <input type="number" name="phone" id="phone" autoComplete="off"
                        value={user.phone}
                        onChange={handleInputs}
                        placeholder="Your Phone"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="work">
                        <i className="zmdi zmdi-slideshow material-icons-name"></i>
                    </label>
                    <input type="text" name="work" id="work" autoComplete="off"
                        value={user.work}
                        onChange={handleInputs}
                        placeholder="Your Profession"
                    />
                </div>

                {/* style yourself */}
                <button type='submit'>Update Profile</button>

                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
            </form>
        </>
    )
};

export default Updateprofile;