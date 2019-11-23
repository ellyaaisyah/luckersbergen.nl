import React from "react";
import Layout from "../components/layout";

const MultiAppSubscription = () => {
  return (
    <Layout>
      <div className="bg-light-grey">
        <div className="container pt-5 pb-5 text-center">
          <h1 className="text-uppercase font-weight-bold m-0">User Testing</h1>
        </div>
      </div>
      <div className="hero">
        <img
          src="/usertestingpage-heroimage.jpg"
          alt="User Testing"
          className="w-100"
        />
      </div>
      <div className="container container-smaller pt-5 pb-5">
        <h2 className="text-uppercase font-weight-bold">The Project</h2>
        <p>
          As a UX designer, I believe it is important to talk to your audience.
          Therefore I’ve been part of GameHouse’s User Testing team. Conducting
          interviews, running play tests and giving presentations has been an
          important source of inspiration and feedback for my projects.
        </p>

        <ul className="tag-clouds pt-4 pb-4">
          <li>User Interviews</li>
          <li>User Testing</li>
          <li>Fans</li>
          <li>Design Feedback</li>
          <li>Project Feedback</li>
          <li>Public Speaking</li>
          <li>Play Tests</li>
        </ul>

        <h2 className="text-uppercase font-weight-bold">My Contributions</h2>
        <p>
          I have been part of a specialized team that interviewed our fans.
          Those interviews had different goals. Sometimes is was to get to know
          our user a bit better, sometimes to get feedback on work from
          colleagues or work of my own.
        </p>
        <p>
          To make sure the rest of the company would also benefit from the user
          interviews we created videos to share with the rest of the company.
          I’ve also given presentations to share the findings of this user
          testing team.
        </p>
      </div>
      <div className="container pb-5">
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <img
              src="/usertestingpage-item1.jpg"
              alt="User Testing"
              className="w-100"
            />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <img
              src="/usertestingpage-item2.jpg"
              alt="User Testing"
              className="w-100"
            />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <img
              src="/usertestingpage-item3.jpg"
              alt="User Testing"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MultiAppSubscription;
