import React, { Component } from "react";
import Link from "next/link";

export default class Projects extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center pt-5 pb-5">
          <h2 className="text-uppercase mb-5">Projects I Worked On</h2>

          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./main-multiappsubscription.png"
                  alt="Multi app subscription"
                />
                <div className="card-body text-left">
                  <h5 className="card-title">Multi-App Subscription</h5>
                  <p className="card-text">
                    GameHouse has a collection of over 30 games in the app
                    stores. To give players the option to enjoy the entire
                    collection without purchasing every game individually, we
                    introduced a multi-app subscription. This subscription
                    unlocks all games and can be purchased in each individual
                    app.
                  </p>
                  <div className="text-right">
                    <Link href="/projects/multi-app-subscription">
                      <a className="text-uppercase">Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./main-ghosapp.jpg"
                  alt="Ghos app"
                />
                <div className="card-body text-left">
                  <h5 className="card-title">GHOS App</h5>
                  <p className="card-text">
                    My first project for GameHouse was to create an app where
                    all GameHouse games come together. The GHOS (GameHouse
                    Original Stories) app was created to cross-promote between
                    games and to build organic traffic for new games.
                  </p>
                  <div className="text-right">
                    <Link href="/projects/multi-app-subscription">
                      <a className="text-uppercase">Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./main-crosspromotion.jpg"
                  alt="Cross promotion"
                />
                <div className="card-body text-left">
                  <h5 className="card-title">Cross-Promotion</h5>
                  <p className="card-text">
                    To inform single game players about our complete catalog of
                    games, we created an in-game cross-promotion system. This
                    was one of my first projects at GameHouse. It has improved
                    step by step and is still up and running.
                  </p>
                  <div className="text-right">
                    <Link href="/projects/multi-app-subscription">
                      <a className="text-uppercase">Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./main-usertesting.jpg"
                  alt="User testing"
                />
                <div className="card-body text-left">
                  <h5 className="card-title">User Testing</h5>
                  <p className="card-text">
                    As a UX designer, I believe it is important to talk to your
                    audience. Therefore I’ve been part of GameHouse’s User
                    Testing team. Conducting interviews, running play tests and
                    giving presentations has been an important source of
                    inspiration and feedback for my projects.
                  </p>
                  <div className="text-right">
                    <Link href="/projects/multi-app-subscription">
                      <a className="text-uppercase">Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
