import React from 'react'
import {useParams} from 'react-router-dom'
import './styleUser.css'
function UserInfo(props) {
    const {id}=useParams()
    const user = props.Users.filter((el) => el.id === id)
    return (
    
        <section class="section about-section gray-bg" id="about">
            <div class="col-6 col-lg-3">
                <button type="submit" onClick={()=>props.history.push('/')}>Go Back To Home</button>
            </div>
            <div class="container">
                <div class="row align-items-center flex-row-reverse">
                    <div class="col-lg-6">
                        <div class="about-text go-to">
                            <h3 class="dark-color">About Me</h3>
                            <h4>{user[0].name}</h4>
                            <h6 class="theme-color lead">A Lead UX &amp; UI designer based in Canada</h6>
                            <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
                            <div class="row about-list">
                                <div class="col-md-6">
                                    <div class="media">
                                        <label>User Name</label>
                                        <p> {user[0].username}</p>
                                    </div>
                                    <div class="media">
                                        <label>Address</label>
                                        <p> {user[0].address.city}</p>
                                        <p> {user[0].address.street}</p>
                                    </div>
                                    <div class="media">
                                        <label>Company</label>
                                        <p>{user[0].company.name}</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="media">
                                        <label>Email</label>
                                        <p> {user[0].email}</p>
                                    </div>
                                    <div class="media">
                                        <label>Phone</label>
                                        <p> {user[0].phone}</p>
                                    </div>
                                    <div class="media">
                                        <label>Web Site</label>
                                        <p><a href={user[0].website}> My webSite</a></p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt=""/>
                        </div>
                    </div>
                </div>
                <div class="counter">
                    <div class="row">
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 class="count h2" data-to="500" data-speed="500">500</h6>
                                <p class="m-0px font-w-600">Happy Clients</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 class="count h2" data-to="150" data-speed="150">150</h6>
                                <p class="m-0px font-w-600">Project Completed</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 class="count h2" data-to="850" data-speed="850">850</h6>
                                <p class="m-0px font-w-600">Photo Capture</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 class="count h2" data-to="190" data-speed="190">190</h6>
                                <p class="m-0px font-w-600">Telephonic Talk</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserInfo