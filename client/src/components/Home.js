import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App';
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from  '@material-ui/icons/LinkedIn';

import "./Home.css";
// import { FaGithub } from "react-icons/fa";



const Home = () => {
  // / update / 
  const { state, dispatch } = useContext(UserContext);
  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);
  const prevDate = new Date();
  

  const userHomePage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = await res.json();
      // console.log(data); 
      setUserName(data.name);
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

    } catch (err) {
      console.log(err);
      const newDate = new Date();
      if ((newDate - prevDate) < 1000) {
        setTimeout(() => {
          setShow(true);
        }, (1000 - (newDate - prevDate)));
      } else {
        setShow(true);
      }
    }
  }

  useEffect(() => {
    userHomePage();
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

                   {/* HEADER/FIRST SECTION STARTED HERE */}


      <div className="home-page ">
         <img className="card-img-top" src="./images/wave.png" alt="Card image cap" />
              
        <div className="home-div">

          <p className="">WELCOME</p>
          <h1>{userName}</h1>
          <h2> {show ? 'Happy 😊, to see you back 🤗' : <h1 className="display-2 text-success my-auto h-80"> <h1 className="display-2 text-success my-auto text-success"> Find a Perfect ProjectPartner▪▪▪ </h1><p className="lead text-primary font-weight-bold">
            
          {/* *****IMPORTANT COMMENT*** DON'T DELETE  commented out .. PREVIOUS LOGIC USEFUL FOR FUTURE PURPOSE  */}
            {/* An open platform to get access  to mini projects,<br />source code,notes and weekly doubt clearing sessions<br />.A central location to find coders, Collab and work on projects.<br />  Also enroll for Internships and certificate courses❕
             */}


            </p> </h1>}</h2>   <hr className="" />
          <marquee className='text-dark mt-2 '>EXPLORE THE PROJECTS ~ GET SOURCE-CODE ~ NOTES ~ ENROLL IN WEEKLY DOUBT CLEARING SESSIONS  <a className="btn btn-light btn-lg" href="#" role="button">Learn more</a></marquee>
          <h3 className='changingtwo'> Get access to mini projects like : <span className="change_content"></span></h3>
          <p className="lead">
            <a className="btn btn-secondary btn-md ml-4 m-4 cursor-statis " href="#" role="button"><span class="badge badge-info mr-2">Coming Soon ✔</span>Hire Project Partner</a>
            <a className="btn btn-success btn-md ml-4 " href="#" role="button">Explore Projects</a>
          </p>
          <h3 className='changing mt-3 text-center'>COLLABORATE,&nbsp; LEARN &&nbsp; GROW 🌱</h3>
        </div>
      </div>

                  {/* HEADER/FIRST SECTION STARTED HERE */}



                {/* PROJECT SECTION STARTED HERE */}
    
      <section className="mt-4 underline">
        <div className="">
          <div className="">
            <h2 className="text-lg underline underline-offset-1 text-indigo-500 tracking-widest font-large title-font mb-1 text-center">POPULAR PROJECTS</h2>
            <p className=" text-xl text-center  ">HTML✅CSS✅TAILWINDCSS✅FIGMA✅JAVASCRIPT✅REACT✅NODEJS✅ MONGODB✅EXPRESSJS✅</p>
            
          </div>

          <div className="card-columns mt-5 ">

          <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/clockr.jpg" alt="Card image cap" />  
             <div className="card-body">
                <h5 className="card card-title">Digital Clock</h5>
                <p className="card-text">This is a digital clock project. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
              </div>

            </div>
            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/calc.jpg" alt="Card image cap" />  
             <div className="card-body">
                <h5 className="card card-title">Digital Calculator</h5>
                <p className="card-text">This is a digital Calculator project. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
              </div>

            </div>


            <div className="card  p-4 overflow-hidden border border-secondary rounded">
              <img className='px-20' src="./images/snake.jpg" alt='error loading' />
              <div className="card-body">

                <h5 className=" card card-title">Snake Game</h5>
                <p className="card-text">This is a snake game. I know you likeplaying nskae game hehehehehehehee 
                Technologies Used : HTML✅CSS✅JAVASCRIPT✅</p>
                </div>

            </div>

          

            
            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/tempcv.png" alt="Card image cap" />  
             <div className="card-body">
                <h5 className="card card-title">Temperature Converter</h5>
                <p className="card-text">This is a Temperature Converter project. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
              </div>

            </div>


            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/form.jpg" alt="Card image cap" />  
             <div className="card-body">
                <h5 className="card card-title">Form with validation</h5>
                <p className="card-text">TThis is a Form with validation project. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
              </div>

            </div>
        <div className='card p-4 overflow-hidden border border-secondary rounded'>
        <img className='px-20' src="./images/battleship.jpg" alt='error loading' />
        <div className="card-body">
                <h5 className="card card-title">Battleship Game</h5>
                <p className="card-text">This is Battleship Game project which is perfectly working. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
              </div>
              </div>
           
            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/weather.jpg" alt="Card image cap" />  
             <div className="card-body">
                <h5 className="card card-title">Weather App</h5>
                <p className="card-text"> This is a weather app project. Technologies used :HTML✅CSS✅JAVASCRIPT✅</p>
              </div>

            </div>
            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/slotmachine.png" alt="Card image cap" />  
             <div className="card-body">
                <h5 className="card card-title"><button>Slot Machine Game</button></h5>
                <p className="card-text"> This is a Slot Machine Game. It looks hard to build but not at all hard.Explore the notes/video to understand the topics in depth.Also enroll for the doubt clearing session for live demonstration by our experts. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
              </div>

            </div>
           

          </div>
          <button type="button"  className="btn btn-primary btn-lg rounder-lg btn-block mt-4" >View All</button>
          {/* <button type="button" className="btn btn-secondary btn-lg btn-block">Block level button</button> */}
        {/* </div> */}
         
        </div>
      </section>



            {/* PROJECT SECTION ENDED HERE */}

      
            {/* THIRD SECTION STARTED HERE */}


      <section className="mt-5">
        <div className="container bg-warning">
          <div className="flex flex-wrap w-full mb-14 flex-col items-center text-center">
            <h1 className="secondbox">What are you looking for ❔</h1>
            <p className="secondboxp">Are you comfortable with backend and want a project partner who knows frontend or vice-versa❔<br /> <span className='spanstyle'>Dev-Get will help you to find the best collab ✅</span></p>
          </div>



              {/* THIRD SECTION ENDED HERE */}
         
              {/* DEVELOPER SECTION COMING SOON STARTED HERE  */}


          <div className="card-deck mt-4 ">
            <div className="card border border-info rounded mb-2">

              {/* removed -img-top from className of  img */}

              <img className="card m-4" src="./images/react.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">React Developer</h5>
                <p className="card-text">In a nutshell, a React developer designs and implements user-facing features for websites and applications using React. They are front-end developers.</p>
              </div>
            </div>


            <div className="card border border-info rounded mb-2 mt-3">
              <img className="card m-4" src="/images/angular.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Angular Developer</h5>
                <p className="card-text">In a nutshell, a Angular developer designs and implements user-facing features for websites and applications using Angular. They are front-end developers</p>
              </div>
            </div>
            <div className="card border border-info rounded mb-2 mt-4">
              <img className="card m-4" src="/images/python.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Python Developer</h5>
                <p className="card-text">A Python Developer is responsible for coding, designing, deploying, and debugging development projects, typically on the server-side (or back-end).</p>
              </div>

              {/* section 2 of developers list  */}


            </div>

            {/* <div className="card-deck mt-4"> */}
              <div className="card border border-info rounded mb-2 mt-4">
                <img className="card m-4" src="/images/android.png" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Android Developer</h5>
                  <p className="card-text">An Android Developer is a software developer who specializes in designing applications for android operating systems. Android is an operating system.They are Android Developers.</p>
                </div>
              </div>


              <div className="card border border-info rounded mb-2 mt-3">
                <img className="card m-4" src="./images/laravel.png" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Laravel Developer</h5>
                  <p className="card-text">A Laravel developer is a software professional who specializes in the Laravel framework. ... Created by Taylor Otwell in 2011, Laravel creates web applications using Symfony.They are Laravel Developers.</p>
                </div>
              </div>
              <div className="card border border-info rounded mb-2 ">
                <img className="card m-4" src="/images/flutter.png" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Flutter Developer</h5>
                  <p className="card-text">A Flutter developer is an individual who uses the Flutter framework to develop cross-platform applications.Flutter is an open-source UI software development kit created by Google.They are Mobile Application Developer.</p>
                </div>




              </div>
            </div>
            <div className='ml-5 mr-5 text-center mt-2'>
          <a className="btn btn-secondary btn-lg ml-4 m-4 cursor-statis " href="#" role="button"><span class="badge badge-info mr-2">Coming Soon ✔</span>Hire Project Partner As Required TechStack </a>
          </div>

          
          </div>
         
      </section>

                       {/* DEVELOPER SECTION COMING SOON ENDED HERE  */}


    

         {/* OUR TEAM SECTION STARTED HERE  */}

<body className='body1'>
        <section>
    <h1 class="title">our team</h1>
    <div class="team-row">
        <div class="member">
            <img src="./images/me.jpg" alt=""/>
            <h2>Bishal Nandi</h2>
            <p>Full-Stack Web Developer Specialization in MERN-STACK✅</p>
        </div>
        <div class="member">
            <img src="./images/aboutpic2.png" alt=""/>
            <h2>Pushpa Kumari</h2>
            <p>Full-Stack Web Developer Specialization in MERN-STACK✅</p>
        </div>
        {/* <div class="member">
            <img src="https://miro.medium.com/max/814/1*Ri024ZNn0dtXQDmswflYFw.jpeg" alt=""/>
            <h2>chris jones</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum similique eligendi numquam.</p>
        </div> */}
    </div>
</section>
</body>

      {/* OUR TEAM SECTION ENDED HERE  */}




      {/* MENTOR SCETION STARTED HERE  */}


      <body className='body1'>
        <section>
    <h1 class="title">Mentors</h1>
    <div class="team-row">
        <div class="member">
            <img src="./images/aboutpic2.png" alt=""/>
            <h2>Somnath Khilari</h2>
            <span><i class="fas fa-code"></i>IBM MENTOR</span>
            <p>FEW LINES ABOUT THE WEBSITE (TETIMONIAL SECTION)</p>
        </div>
        <div class="member">
            <img src="./images/aboutpic2.png" alt=""/>
            <h2>Siddiq Pasha</h2>
            <span><i class="fas fa-code"></i>IBM MENTOR</span>
            <p>FEW LINES ABOUT THE WEBSITE (TETIMONIAL SECTION)</p>
        </div>
        <div class="member">
            <img src="/images/aboutpic2.png" alt=""/>
            <h2>Rahul Kumar</h2>
            <span><i class="fas fa-code"></i>IBM MENTOR</span>
            <p>FEW LINES ABOUT THE WEBSITE (TETIMONIAL SECTION)</p>
        </div>
    </div>
</section>
</body>


               {/* MENTOR SCETION ENDED HERE  */}


              {/* FOOTER SECTION STARTED HERE */}
          
              {/* <!-- Footer --> */}
<footer className="page-footer font-small indigo mt-5">

  {/* <!-- Footer Links --> */}
  <div class="container bg-muted">

    {/* <!-- Grid row--> */}
    <div class="row text-center d-flex justify-content-center pt-5 mb-3">

      {/* <!-- Grid column --> */}
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          <a href="#!">Report Bugs/Enhancement</a>
        </h6>
      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          <a href="#!">HOME</a>
        </h6>
      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          <a href="#!">COOKIE POLICY</a>
        </h6>
      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          <a href="#!">TERMS OF USE</a>
        </h6>
      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          <a href="#!">Disclaimer</a>
        </h6>
      </div>

      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          <a href="#!">PRIVACY NOTICE</a>
        </h6>
      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row--> */}
    <hr class="rgba-white-light"/>

    {/* <!-- Grid row--> */}
    <div class="row d-flex text-center justify-content-center mb-md-0 mb-4">

      {/* <!-- Grid column --> */}
      <div class="col-md-8 col-12 mt-5 mt-4">
        <p className='style text-dark'>An open platform to get access  to mini projects,source code,notes and weekly doubt clearing sessions.A central location to find coders, Collab and work on projects.  Also enroll for Internships and certificate courses❕</p>

<div className='mt-2 mb-3'>
        <a class="li-ic " href='www.google.com'>
            <LinkedInIcon/> 
           
          </a> 
           <a class="li-ic" href='www.google.com'>
            <LinkedInIcon/> 
           
          </a> 
          <a class="li-ic" href='www.google.com'>
            <LinkedInIcon/> 
           
          </a> <a class="li-ic" href='www.google.com'>
            <LinkedInIcon/> 
           
          </a>
          <a class="li-ic" href='www.google.com'>
            <LinkedInIcon/> 
           
          </a>
          </div>
      </div>
     
        {/* </div> */}

      {/* </div> */}
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row--> */}

  </div>
  {/* <!-- Footer Links --> */}

  {/* <!-- Copyright --> */}
  <div class="footer-copyright text-center py-3">© 2021 Copyright:
    <a href="https://mdbootstrap.com/"> Dev-Get.com</a>
  </div>
  {/* <!-- Copyright --> */}

</footer>
{/* <!-- Footer --> */}
      





              {/* FOOTER SECTION ENDED HERE */}


               

    </>
  )
}



export default Home