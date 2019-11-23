import React from "react";
import Layout from "../components/layout";
import Projects from "../components/projects";

const Home = () => (
  <Layout>
    <div className="bg-light-grey">
      <div className="container">
        <div className="row pt-5 pb-5 d-flex align-items-center">
          <div className="col-12 col-md-6">
            <p className="text-uppercase">Hi there, I'm Luc Kersbergen!</p>
            <h2>UX/UI Designer</h2>
            <p>
              UX Design specialist at GameHouse Europe | Previously employed by
              TNT Express, MarConcepts and 3Dimerce | Graduated from
              Communication & MultiMedia Design @ Avans University,
              s’Hertogenbosch and Interactive Media Design @ SintLucas, Boxtel
            </p>
          </div>

          <div className="col-12 col-md-6 text-center text-md-right">
            <img
              src="/main-profile-pic.png"
              alt="main profile pic"
              className="img-fluid"
              width="300"
            />
          </div>
        </div>
      </div>
    </div>

    <Projects />
  </Layout>
);

export default Home;
