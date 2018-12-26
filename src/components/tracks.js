import React from 'react'

const Tracks = () => {
  return (
    <section className="popular-course-area section-gap">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="menu-content pb-70 col-lg-8">
                    <div className="title text-center">
                        <h1 className="mb-10">Popular Tracks we offer</h1>
                        <p>There is a moment in the life of any aspiring.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="active-popular-carusel">
                    <div className="single-popular-carusel">
                        <div className="thumb-wrap relative">
                            <div className="thumb relative">
                                <div className="overlay overlay-bg"></div>	
                                <img className="img-fluid" src="/assets/img/p1.jpg" alt="" />
                            </div>
                            <div className="meta d-flex justify-content-between">
                                <p><span className="lnr lnr-users"></span> Kevin Nguyen</p>
                            </div>									
                        </div>
                        <div className="details">
                            <a href="!#">
                                <h4>
                                    Cyber Security
                                </h4>
                            </a>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, ad sequi exercitationem nobis vitae molestias atque quam repellendus saepe necessitatibus?										
                            </p>
                        </div>
                    </div>
                    <div className="single-popular-carusel">
                        <div className="thumb-wrap relative">
                            <div className="thumb relative">
                                <div className="overlay overlay-bg"></div>	
                                <img className="img-fluid" src="/assets/img/p2.jpg" alt="" />
                            </div>
                            <div className="meta d-flex justify-content-between">
                                <p><span className="lnr lnr-users"></span> Mohsin Braer</p>
                            </div>									
                        </div>
                        <div className="details">
                            <a href="!#">
                                <h4>
                                    Algorithm
                                </h4>
                            </a>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure distinctio ad dicta est nam mollitia! Quod ut cum hic esse.										
                            </p>
                        </div>
                    </div>
                    <div className="single-popular-carusel">
                        <div className="thumb-wrap relative">
                            <div className="thumb relative">
                                <div className="overlay overlay-bg"></div>	
                                <img className="img-fluid" src="/assets/img/p3.jpg" alt=""/>
                            </div>
                            <div className="meta d-flex justify-content-between">
                                <p><span className="lnr lnr-users"></span> Felix Li</p>
                            </div>									
                        </div>
                        <div className="details">
                            <a href="!#">
                                <h4>
                                    Graphic
                                </h4>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur commodi eveniet qui omnis nemo ducimus laboriosam dolor aperiam deleniti!										
                            </p>
                        </div>
                    </div>
                    <div className="single-popular-carusel">
                        <div className="thumb-wrap relative">
                            <div className="thumb relative">
                                <div className="overlay overlay-bg"></div>	
                                <img className="img-fluid" src="/assets/img/p4.jpg" alt=""/>
                            </div>
                            <div className="meta d-flex justify-content-between">
                                <p><span className="lnr lnr-users"></span> Jack Williams</p>
                            </div>									
                        </div>
                        <div className="details">
                            <a href="!#">
                                <h4>
                                    Hardware
                                </h4>
                            </a>
                            <p>
                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, nihil. Iusto, ipsum excepturi fugiat veritatis quisquam nostrum quo vitae nisi?									
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tracks
