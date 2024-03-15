import React from 'react'
import logoimg from '../src/img/logo.png'
import sliderimg1 from '../src/img/slider1.jpg'
import sliderimg2 from '../src/img/slider2.jpg'
import sliderimg3 from '../src/img/slider3.jpg'
import img1 from '../src/img/1_5_million.png'
import icon2 from '../src/img/icon2.png'
import icon5 from '../src/img/icon5.png'


export default function Home() {
  return (
    <div>
      {/* narbar start  */}
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={logoimg} alt='logo' width='150px'/>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Resources</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      GD Labs
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Laboratories</a></li>
                      <li><a className="dropdown-item" href="#">Departments</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Technologies</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">GD Franchise</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
          {/* narbar end  */}

          {/* Slider starts here */}
          <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={sliderimg1} className="d-block w-100" alt="GD Lab"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={sliderimg2} className="d-block w-100" alt="GD old Lab"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={sliderimg3} className="d-block w-100" alt="Health Packages"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* Slider ends here */}

      {/* Middle section starts */}
      <div className="container-fluid py-5 wow fadeInUp mb-lg-5">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-3 mx-auto" style={{maxWidth:1000}}>
                <h1 className="section_hr_line">Today, 4000+ Hospitals, Doctors and Laboratories work with GD</h1>

            </div>
            <p className="text-center position-relative pb-3 mb-3 mx-auto para">
                GD is their trusted diagnostics partner who delivers Accurate Reports in a Timely manner at the Best Pricing.
            </p>
            <div className="row g-5 mb-3">
                <div className="col-lg-4">
                    <div className="row g-5">
                        <div className="col-12 wow zoomIn d-flex align-items-center">
                            <div className="justify-content-center">
                                <img src={img1} className="img-fluid pe-3"/>
                            </div>
                            <div className="p-lg-3 col-md-6 gd_info">
                                <h4>1.5 Million+</h4>
                                <p className="mb-0">Patients touched every year.</p>
                            </div>
                        </div>
                        <div className="col-12 wow zoomIn d-flex align-items-center">
                            <div className="justify-content-center">
                                <img src={icon2} className="img-fluid pe-3"/>
                            </div>
                            <div className="p-lg-3 col-md-6 gd_info">
                                <h4>2500+</h4>
                                <p className="mb-0">Collection centers partnered.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row g-5">
                        <div className="col-12 wow zoomIn d-flex align-items-center">
                            <div className="justify-content-center">
                                <img src={icon2} className="img-fluid pe-3"/>
                            </div>
                            <div className="p-lg-3 col-md-6 gd_info">
                                <h4>1500+</h4>
                                <p className="mb-0">Diagnostics tests performed.</p>
                            </div>
                        </div>
                        <div className="col-12 wow zoomIn d-flex align-items-center">
                            <div className="justify-content-center">
                                <img src={icon2} className="img-fluid pe-3"/>
                            </div>
                            <div className="p-lg-3 col-md-6 gd_info">
                                <h4>800+</h4>
                                <p className="mb-0">Hospitals serviced.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row g-5">
                        <div className="col-12 wow zoomIn d-flex align-items-center">
                            <div className="justify-content-center">
                                <img src={icon5} className="img-fluid pe-3"/>
                            </div>
                            <div class="p-lg-3 col-md-6 gd_info">
                                <h4>2 Million+</h4>
                                <p className="mb-0">Samples processed every year.</p>
                            </div>
                        </div>
                        <div class="col-12 wow zoomIn d-flex align-items-center">
                            
                        </div>
                </div>
                </div>
            </div>



        </div>
    </div>
    {/* Middle section ends */}


     
    </div>
  )
}
