import React, { useState, useEffect } from "react";
import "./assets/css/main.css";
import "./assets/css/noscript.css";
import NewsletterModal from "./Newsletter";
import { BrowserRouter } from "react-router-dom";
import video from "./images/istock.mp4"


function App() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus("Please enter a valid email.");
      return;
    }

    // Here you would integrate with your newsletter API
    // For now we'll just simulate success:
    setStatus("Thanks for signing up!");
    setEmail("");
  };

  return (
    <BrowserRouter>
      <div id="page-wrapper">

        {showModal && <NewsletterModal onClose={() => setShowModal(false)} />}

        <div id="header">
          <video autoPlay muted loop playsInline className="header-video">
            <source src={video} type="video/mp4" />
          </video>
          <div className="inner">
            <header>
              <h1>
                <a href="#header" id="logo">
                  Sandy's Social Club
                </a>
              </h1>
              <hr />
              <p>Description/slogan</p>
            </header>
            <footer>
              <a href="#merch" className="button circled scrolly">
                Merch
              </a>
            </footer>
          </div>
        </div>

        {/* Merch */}
        <section id="merch">
          <header>
            <h2>
              Welcome to <strong>Sandy's Social Club</strong>
            </h2>
            <p>
              Check out our <a href="#">merch</a>!
            </p>
          </header>
        </section>

        {/* Carousel */}
        <section className="carousel">
          <div className="reel">
            <article>
              <a href="#" className="image featured">
                <img src="src/images/pic01.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">T-shirt</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic02.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Fermentum sagittis proin</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic03.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Sed quis rhoncus placerat</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic04.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Ultrices urna sit lobortis</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic05.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Varius magnis sollicitudin</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic01.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Pulvinar sagittis congue</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic02.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Fermentum sagittis proin</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic03.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Sed quis rhoncus placerat</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic04.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Ultrices urna sit lobortis</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>

            <article>
              <a href="#" className="image featured">
                <img src="images/pic05.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a href="#">Varius magnis sollicitudin</a>
                </h3>
              </header>
              <p>
                Commodo id natoque malesuada sollicitudin elit suscipit magna.
              </p>
            </article>
          </div>
        </section>

        {/* Events */}
        <div className="wrapper style2">
          <section>
            <article id="main" className="container special">
              <a href="#" className="image featured">
                <img src="src/images/pic06.jpg" alt="" />
              </a>
              <header id="events">
                <h2>
                  <a href="#">Events</a>
                </h2>
                <p>Click events for event calendar</p>
              </header>
              <p>
                Coming soon!
              </p>
              <footer>
                <a href="#" className="button">
                  Continue Reading
                </a>
              </footer>
            </article>
          </section>
        </div>

        {/* Newsletter */}
        <div className="bg-white py-12 sm:py-16 lg:py-20">
          <section
            id="newsletter"
            className="mx-auto max-w-7xl px-6 lg:px-8"
          >
            <div className="mx-auto max-w-2xl lg:max-w-none lg:flex lg:items-center lg:justify-between lg:gap-x-12">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Sign up for updates
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  We'll let you know when we're live!
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-6 flex w-full max-w-md gap-x-4 lg:mt-0"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="min-w-0 flex-auto rounded-md border border-gray-300 bg-white px-3.5 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm sm:leading-6"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {status && (
              <p className="mt-4 text-indigo-600">{status}</p>
            )}
          </section>
        </div>


        {/* Footer */}
        <div id="footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Contact */}
                <section className="contact">
                  <header>
                    <h3>Contact us!</h3>
                  </header>
                  <p>
                    Urna nisl non quis interdum mus ornare ridiculus egestas
                    ridiculus lobortis vivamus tempor aliquet.
                  </p>
                  <ul className="icons">
                    <li>
                      <a href="#" className="icon brands fa-twitter">
                        <span className="label">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon brands fa-facebook-f">
                        <span className="label">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon brands fa-instagram">
                        <span className="label">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon brands fa-linkedin-in">
                        <span className="label">Linkedin</span>
                      </a>
                    </li>
                  </ul>
                </section>

                {/* Copyright */}
                <div className="copyright">
                  <ul className="menu">
                    <li>&copy; Sandy's Social Club. All rights reserved.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
