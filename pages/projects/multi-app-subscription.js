import React from "react";
import Layout from "../../components/layout";

const MultiAppSubscription = () => {
  return (
    <Layout>
      <div className="bg-light-grey">
        <div className="container pt-5 pb-5 text-center">
          <h1 className="text-uppercase font-weight-bold m-0">
            Multi app subscription
          </h1>
        </div>
      </div>
      <div className="hero">
        <img
          src="/subscriptionpage-heroimage.jpg"
          alt="Multi app subscription"
          className="w-100"
        />
      </div>
      <div className="container container-smaller pt-5 pb-5">
        <h2 className="text-uppercase font-weight-bold">The Project</h2>
        <p>
          GameHouse has a collection of over 30 games in the app stores. To give
          players the option to enjoy the entire collection without purchasing
          every game individually, we introduced a multi-app subscription. This
          subscription unlocks all games and can be purchased in each individual
          app.
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
          When I joined this project, my biggest challenge was to get the user
          to understand the subscription. Technically it was all set up, but
          communication with the user needed a lot of work still.
        </p>
        <p>
          First I worked on the communication at paywalls and for in-app
          purchase billing. I’ve designed and AB-tested new paywalls to optimize
          the user’s understanding of the existence of multiple games similar to
          their liking.
        </p>
        <p>
          At that point the ‘happy scenario’ up and running, but what if
          something would go wrong? I started creating screens to inform the
          user if their status was in grace or when their subscription got
          suspended or cancelled due to payment issues.
        </p>
        <p>
          With the basic flow correctly working, I moved on to creating special
          offers. With some help, I was able to show a unique offer to every
          user that had purchased any of our games in the last 3 months. I set
          up a 30-day subscription trial so that every player that had once
          bought one of our games could experience the entire catalog for free.
        </p>
      </div>
      <div className="container pb-5">
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <img
              src="/subscriptionpage-item1.png"
              alt="Multi app subscription"
              className="w-100"
            />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <img
              src="/subscriptionpage-item2.png"
              alt="Multi app subscription"
              className="w-100"
            />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <img
              src="/subscriptionpage-item3.png"
              alt="Multi app subscription"
              className="w-100"
            />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <img
              src="/subscriptionpage-item4.png"
              alt="Multi app subscription"
              className="w-100"
            />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <img
              src="/subscriptionpage-item5.png"
              alt="Multi app subscription"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MultiAppSubscription;
