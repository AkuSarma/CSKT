import React from 'react';
import '../styles/Home.css';
import aigenerated from '../assets/aigenerated.jpg';
import factory from '../assets/factory.jpg';
import loader from '../assets/loader.jpg';
import pforphoto from '../assets/pforphoto.jpg';
import pipeline from '../assets/pipeline.jpg';
import sunset from '../assets/sunset.jpg';
import { ToastContainer, toast, Bounce } from "react-toastify"; // Import Bounce

const Home = () => {

  const notify = () =>
    toast.success("Successfully signed in", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    notify();
  };

  return (
    <div className="home">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <section className="hero">
        <p>Innovating</p>
        <p>for a</p>
        <p>sustainable</p>
        <p>future</p>
        <button>Learn More</button>
      </section>
      <section className="about">
        <h2>About CSKT Industries</h2>
        <div className="about-section">
          <img src={pipeline} alt="" />
          <div className="about-section-text">
            <h3>Our Commitment to Quality</h3>
            <p>
              At CSKT Industries, we committed to producing high-quality
              chemical products that meets the strictest industry standards. We
              use the lates technology and employ a rigorous quality control
              process to ensure that our products meet or exceed our customers'
              expectations
            </p>
          </div>
        </div>
        <div className="about-section">
          <div className="about-section-text">
            <h3>Our Global Reach</h3>
            <p>
              With a presence in over 50 countries, CSKT Industries, is able to
              serve customers around the world. We have a network of
              distributors and partners that help us deliver our products and
              services to customers in every corner of the globe
            </p>
          </div>
          <img src={aigenerated} alt="" />
        </div>
        <div className="about-section">
          <img src={factory} alt="" />
          <div className="about-section-text">
            <h3>Our Innovation</h3>
            <p>
              CSKT Industries, is at the forefront of innovation in the chemical
              industry. Our team of scientists and engineers are constantly
              developing new products and processes to meet the evolving needs
              of our customers and the industry
            </p>
          </div>
        </div>

        <div className="all-img">
          <img src={aigenerated} alt="" />
          <img src={factory} alt="" />
          <img src={loader} alt="" />
          <img src={pforphoto} alt="" />
          <img src={pipeline} alt="" />
          <img src={sunset} alt="" />
        </div>
      </section>
      <section className="contact">
        <h2>Better yet, see us in person!</h2>
        <p>
          We love our customers, so feel free to visit during normal business
          hours.
        </p>
        <button>
          <a
            href="https://wa.me/+14124455745"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-whatsapp-square"></i>
            Message on whatsapp
          </a>
        </button>
        <h2>CSKT Industries.</h2>
        <h2>Hours</h2>
        <p>
          Open today <span>09:00 am - 05:00 pm</span>
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.630139261109!2d-80.1443441884063!3d40.48344677130978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88345f1d96e0509d%3A0xa976fb58c381419c!2s507%20Graydon%20Dr%2C%20Coraopolis%2C%20PA%2015108%2C%20USA!5e0!3m2!1sen!2sin!4v1735005747297!5m2!1sen!2sin"
          title="CSKT Industries Location"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className="subscribe">
        <h2>Subscribe to our newsletter</h2>
        <p>
          Get 10% of on the first order when you subscribe to our newsletter
        </p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
      <footer>
        <p>&copy; CSKT Industries</p>
        <p>507 Graydon Dr, Coraopolis, PA 15108, USA</p>
        <p>Phone: +1 412-445-5745</p>
        <p>Email: contactsales@csktindustries.com</p>
      </footer>
    </div>
  );
}

export default Home