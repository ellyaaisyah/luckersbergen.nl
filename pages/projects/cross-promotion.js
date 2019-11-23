import React from "react";
import Layout from "../../components/layout";

const CrossPromotion = () => {
  return (
    <Layout>
      <div className="bg-light-grey">
        <div className="container pt-5 pb-5 text-center">
          <h1 className="text-uppercase font-weight-bold m-0">
            Cross Promotion
          </h1>
        </div>
      </div>
      <div className="hero">
        <img
          src="/crosspromotionpage-heroimage.jpg"
          alt="Cross Promotion"
          className="w-100"
        />
      </div>
      <div className="container container-smaller pt-5 pb-5">
        <h2 className="text-uppercase font-weight-bold">The Project</h2>
        <p>
          To inform single game players about our complete catalog of games, we
          created an in-game cross-promotion system. This was one of my first
          projects at GameHouse. It has improved step by step and is still up
          and running.
        </p>
        <ul className="tag-clouds pt-4 pb-4">
          <li>Subscription</li>
          <li>E-Commerce</li>
          <li>UX Design</li>
          <li>UI Design</li>
          <li>Mobile</li>
          <li>Scrum</li>
          <li>A/B-Testing</li>
          <li>Sketch</li>
          <li>Trigger-Points</li>
        </ul>
        <h2 className="text-uppercase font-weight-bold">My Contributions</h2>
        <p>
          As part of one of GameHouse’s scrum teams, I worked on in-game cross
          promotion. For this project we used a dynamic trigger-point system
          created by another team. With this system we were able to load light
          web-templates that we could use for additional communication with
          players in the game.
        </p>
        ​
        <p>
          As the UX Designer of this scrum team I designed many different
          templates. Templates then were AB-tested to determine which ones
          worked best. We created a system to determine which template to show
          in which game. First we manually switched between the dynamically
          set-up templates. Later, a recommendation system was implemented to
          automatically optimize the use templates per game.
        </p>
        ​
        <p>
          The results of this project are still up and running. I used many
          different tools for this project. In the beginning of this project I
          mainly used Photoshop, Illustrator and Axure. Later I moved to
          Adobe-XD and eventually Sketch.
        </p>
      </div>
      <div className="container pb-5">
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <img
              src="/crosspromotionpage-item1.png"
              alt="Cross Promotion"
              className="w-100"
            />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <img
              src="/crosspromotionpage-item2.png"
              alt="Cross Promotion"
              className="w-100"
            />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <img
              src="/crosspromotionpage-item3.png"
              alt="Cross Promotion"
              className="w-100"
            />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <img
              src="/crosspromotionpage-item4.png"
              alt="Cross Promotion"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CrossPromotion;
