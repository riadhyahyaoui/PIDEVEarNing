import React from "react";

class BaseProfil extends React.Component {
  render() {
    return (
      <div>
 <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

<header id="header">
  <div class="d-flex flex-column">

    <div class="profile">
      <img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle" />
      <h1 class="text-light"><a href="index.html">Alex Smith</a></h1>
      
    </div>

    <nav id="navbar" class="nav-menu navbar">
    <ul>
              <li><a href="#home" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
              <li>
                <a href="#suggest" className="nav-link scrollto">
                  <i className=" bx bx-user-plus"></i>
                  <span> Suggestions
                    &nbsp;&nbsp;&nbsp;

                    <i className="bx bx-bell">5</i>
                  </span>
                </a>
              </li>
              <li>
                <a href="#suggest" className="nav-link scrollto">
                  <i className="bx bx-group"></i>
                  <span>Contact</span>
                </a>
              </li>
              <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
              <li><a href="#Message_Affiche" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Message</span></a></li>
              <li><a href="#desacitver" className="nav-link scrollto"><i className='bx bxs-user-x'></i> <span>Desactiver</span></a></li>
              <li> <a href="#logout" className="nav-link scrollto"> <i className=" bx bx-log-out"></i> <span> Logout</span> </a></li>

            </ul>

    </nav>
    {/* <!-- .nav-menu --> */}
  </div>
</header>
{/* <!-- End Header --> */}



<main id="main">

  {/* <!-- ======= About Section ======= --> */}
  <section id="about" class="about">
    <div class="container">

      <div class="section-title">
        <h2>About</h2>
      </div>

      <div class="row">
        <div class="col-lg-4" data-aos="fade-right">
          <img src="assets/img/profile-img.jpg" class="img-fluid" alt="" />
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>UI/UX Designer &amp; Web Developer.</h3>
          <p class="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>
          </div>
          <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
          </p>
        </div>
      </div>

    </div>
  </section>
  {/* <!-- End About Section --> */}
    </main>
    {/* <!-- End #main --> */}


           
          </div>
          );
    }
}
export default BaseProfil;
