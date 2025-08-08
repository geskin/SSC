import React from "react";
import "./assets/css/main.css";
import "./assets/css/noscript.css";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div id="page-wrapper">
        <div id="header">
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
                Commodo id natoque malesuada sollicitudin elit suscipit. Curae
                suspendisse mauris posuere accumsan massa posuere lacus convallis
                tellus interdum. Amet nullam fringilla nibh nulla convallis ut
                venenatis purus sit arcu sociis. Nunc fermentum adipiscing tempor
                cursus nascetur adipiscing adipiscing. Primis aliquam mus lacinia
                lobortis phasellus suscipit. Fermentum lobortis non tristique ante
                proin sociis accumsan lobortis. Auctor etiam porttitor phasellus
                tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat
                integer interdum integer purus sapien. Nibh eleifend nulla nascetur
                pharetra commodo mi augue interdum tellus. Ornare cursus augue
                feugiat sodales velit lorem. Semper elementum ullamcorper lacinia
                natoque aenean scelerisque.
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
        <div className="wrapper style1">
          <section id="newsletter" className="container special">
            <header>
              <h2>Signup for updates</h2>
              <p>
                Ipsum volutpat consectetur orci metus consequat imperdiet duis
                integer semper magna.
              </p>
            </header>
            <div className="row">
              <article className="col-4 col-12-mobile special">
                <a href="#" className="image featured">
                  <img src="images/pic07.jpg" alt="" />
                </a>
                <header>
                  <h3>
                    <a href="#">Gravida aliquam penatibus</a>
                  </h3>
                </header>
                <p>
                  Amet nullam fringilla nibh nulla convallis tique ante proin
                  sociis accumsan lobortis. Auctor etiam porttitor phasellus
                  tempus cubilia ultrices tempor sagittis. Nisl fermentum
                  consequat integer interdum.
                </p>
              </article>

              <article className="col-4 col-12-mobile special">
                <a href="#" className="image featured">
                  <img src="images/pic08.jpg" alt="" />
                </a>
                <header>
                  <h3>
                    <a href="#">Sed quis rhoncus placerat</a>
                  </h3>
                </header>
                <p>
                  Amet nullam fringilla nibh nulla convallis tique ante proin
                  sociis accumsan lobortis. Auctor etiam porttitor phasellus
                  tempus cubilia ultrices tempor sagittis. Nisl fermentum
                  consequat integer interdum.
                </p>
              </article>

              <article className="col-4 col-12-mobile special">
                <a href="#" className="image featured">
                  <img src="images/pic09.jpg" alt="" />
                </a>
                <header>
                  <h3>
                    <a href="#">Magna laoreet et aliquam</a>
                  </h3>
                </header>
                <p>
                  Amet nullam fringilla nibh nulla convallis tique ante proin
                  sociis accumsan lobortis. Auctor etiam porttitor phasellus
                  tempus cubilia ultrices tempor sagittis. Nisl fermentum
                  consequat integer interdum.
                </p>
              </article>
            </div>
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
