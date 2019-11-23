import React from "react";
import Layout from "../components/layout";

const GhosApp = () => {
  return (
    <Layout>
      <div className="bg-light-grey">
        <div className="container pt-5 pb-5 text-center">
          <h1 className="text-uppercase font-weight-bold m-0">GHOS App</h1>
        </div>
      </div>
      <div className="hero">
        <img
          src="/ghossapppage-heroimage.jpg"
          alt="GHOS app"
          className="w-100"
        />
      </div>
      <div className="container container-smaller pt-5 pb-5">
        <h2 className="text-uppercase font-weight-bold">The Project</h2>
        <p>
          My first project for GameHouse was to create an app where all
          GameHouse games come together. The GHOS (GameHouse Original Stories)
          app was created to cross-promote between games and to build organic
          traffic for new games.
        </p>

        <ul className="tag-clouds pt-4 pb-4">
          <li>App Development</li>
          <li>Ionic</li>
          <li>Mini games</li>
          <li>Agile</li>
          <li>Scrum</li>
          <li>UX Design</li>
          <li>UI Design</li>
          <li>Sketch</li>
          <li>Adobe XD</li>
          <li>Axure</li>
          <li>Photoshop</li>
        </ul>

        <h2 className="text-uppercase font-weight-bold">My Contributions</h2>
        <p>
          In 2015, I teamed up with 3 other students for a 2-month summer
          project at GameHouse. Our assignment: Create a mobile app to
          (cross-)promote GameHouse’s catalog of games. In 2 months we created a
          functioning app that showed a lot of potential. After the summer
          project I was permanently hired by GameHouse.
        </p>
        <p>
          I continued working on the app as part of one of GameHouse’s scrum
          teams. Our main focus at that point was to add features to increase
          user’s retention. We added features such as mini-games, a chat box, a
          card collection game and a dress-up avatar. Some proved successful,
          some were removed. For this part of the process I mainly used
          Photoshop, Axure and Experience Design.
        </p>
        <p>
          In the 3rd phase of development, the app underwent a complete UI
          redesign. The goal: a more feminine and GameHouse look-and-feel. To
          deliver on this, I followed a UI design course at this time. I
          switched from working with Axure to Sketch.
        </p>
      </div>
      <div className="container pb-5">
        <div className="row">
          <div className="col-6 col-md-3 mb-4">
            <img
              src="/ghossapppage-item1.png"
              alt="GHOS app"
              className="w-100"
            />
          </div>
          <div className="col-6 col-md-3 mb-4">
            <img
              src="/ghossapppage-item2.png"
              alt="GHOS app"
              className="w-100"
            />
          </div>
          <div className="col-6 col-md-3 mb-4">
            <img
              src="/ghossapppage-item3.png"
              alt="GHOS app"
              className="w-100"
            />
          </div>
          <div className="col-6 col-md-3 mb-4">
            <img
              src="/ghossapppage-item4.png"
              alt="GHOS app"
              className="w-100"
            />
          </div>
          <div className="col-6 col-md-3 mb-4">
            <img
              src="/ghossapppage-item5.png"
              alt="GHOS app"
              className="w-100"
            />
          </div>
          <div className="col-6 col-md-3 mb-4">
            <img
              src="/ghossapppage-item6.png"
              alt="GHOS app"
              className="w-100"
            />
          </div>
          <div className="col-6 col-md-3 mb-4">
            <img
              src="/ghossapppage-item7.png"
              alt="GHOS app"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GhosApp;
