import React from "react";
import Layout from "../components/layout";
import Slider from "react-slick";

const AboutMe = () => {
  const settings = {
    dots: true,
    arrows: true,
    autoplay: true
  };

  return (
    <Layout>
      <div className="bg-light-grey">
        <div className="container pt-5 pb-5 text-center">
          <h1 className="text-uppercase font-weight-bold m-0">About Me</h1>
        </div>
      </div>
      <div className="hero">
        <img src="/aboutme-heroimage.jpg" alt="About Me" className="w-100" />
      </div>
      <div className="container container-smaller pt-5 pb-5">
        <h2 className="text-uppercase font-weight-bold">Who's Luc?</h2>
        <p>
          Hi there! My name is Luc Kersbergen. I’m an{" "}
          <strong>allround UX/UI designer</strong> who is used to working in
          fast moving and constantly adapting scrum teams. I believe in a “fail
          fast, succeed sooner” mentality. People describe me as an{" "}
          <strong>seasy-going team player</strong> with an{" "}
          <strong>eye for detail</strong>. I love to come up with multiple
          solutions that can be tested for the ultimate result.
        </p>

        <p>
          During my time at GameHouse I’ve been part of multiple scrum teams,
          responsible for <strong>mobile projects</strong> like{" "}
          <strong>in-game cross-promotion</strong>, multi-app subscription and a{" "}
          <strong>games catalog app</strong>.
        </p>

        <p>
          As a UX/UI designer, I have been working on creating new ideas,
          wire-framing, designing, prototyping and testing for our projects.
          Through the years, I’ve used multiple tools like Photoshop,
          Illustrator, Axure and Adobe XD. Currently, I mainly use Sketch to
          visualise flows, designs and prototypes.
        </p>
      </div>
      <div className="testimonials container-fluid">
        <h2 className="text-uppercase font-weight-bold mb-5 text-center">
          What My Co-Workers Say About Me
        </h2>

        <Slider {...settings}>
          <div>
            <div className="row d-flex align-items-center">
              <div className="col-12 col-md-6">
                <img
                  src="/aboutme-sliderellya.jpg"
                  className="w-100"
                  alt="Ellya"
                />
              </div>
              <div className="col-12 col-md-6">
                <p>
                  "Luc is always up to innovation and try to see from all angles
                  to deliver the best result. Luc takes his time to understand
                  the goal of the task brought upon him and weigh multiple
                  options to best suited for the problem."
                </p>
                <p>- Ellya Aisyah, Front-End Developer</p>
              </div>
            </div>
          </div>

          <div>
            <div className="row d-flex align-items-center">
              <div className="col-12 col-md-6">
                <img
                  src="/aboutme-slidermark.jpg"
                  className="w-100"
                  alt="Mark"
                />
              </div>
              <div className="col-12 col-md-6">
                <p>
                  "What stands out to me is Luc his perseverance in the
                  sometimes painful path of getting to a better user experience
                  by embracing yet another failed test and really learn from it.
                  The next day he will surprise you by coming up with a new
                  solution inspired by something he found in some blogpost or
                  customer review."
                </p>
                <p>- Mark van Kessel, Product Owner</p>
              </div>
            </div>
          </div>

          <div>
            <div className="row d-flex align-items-center">
              <div className="col-12 col-md-6">
                <img
                  src="/aboutme-slidersharath.jpg"
                  className="w-100"
                  alt="Sharath"
                />
              </div>
              <div className="col-12 col-md-6">
                <p>
                  "Luc is an innovative and driven UX designer. I think his
                  greatest strength is in seeing projects through to completion.
                  His work with the internal product team on our owned-media app
                  contributed to a 3x increase revenue from earned media. The
                  app went on to exceed all expectations and is a great
                  testament to his work."
                </p>
                <p>- Sharath Kowligi, User Acquisition</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="container container-smaller pt-5 pb-5">
        <h2 className="text-uppercase font-weight-bold mb-5">My Experience</h2>

        <div className="exp mb-5">
          <h4>
            <strong>UX / UI Designer, GameHouse</strong>
          </h4>

          <p>
            2016 - 2019 | After graduating from Avans University I started
            working at GameHouse as a mobile UX/UI Designer. After finishing a
            project for a recruiting website/system and a catalog app for their
            games I got hired permanently. In the years to come I improved my
            UX-UI skills in agile projects like a multi-app subscription model,
            in-game cross-promotion and a mobile app focused on the game
            catalog. These projects all used scrum to make quick iterations
            possible.
          </p>
        </div>

        <div className="exp mb-5">
          <h4>
            <strong>UX Designer, Graduation internship, GameHouse</strong>
          </h4>

          <p>
            2015 - 2016 | I did a graduation project at GameHouse in Eindhoven.
            This project was about setting up a website where future employees
            could find out about the company’s culture and could apply for a
            job. Also a recruiting system got attached so the company’s
            recruiter could manage the applicants.
          </p>
        </div>

        <div className="exp mb-5">
          <h4>
            <strong>Web Designer, Marconcepts</strong>
          </h4>

          <p>
            2014 - 2014 | After a 5 month internship I continued working in the
            summer period for Marconcept, an online web developing company
            specialised in SEO. In both periods I was part of the design team.
            At Marconcept my web-designing skills improved big times.
          </p>
        </div>

        <div className="exp mb-5">
          <h4>
            <strong>Customs - Office employee, TNT Express</strong>
          </h4>

          <p>
            2010 - 2016 | In 2010 I started working at TNT Express. In the first
            6 months I was part of the XBB customer service team. I also got
            asked to do a lean project for that team which resulted in improving
            the pick-up speed of a package with 1 day. When I started a new
            study I continued working for TNT Express as a customs and office
            employee in the evening hours.
          </p>
        </div>

        <div className="exp mb-5">
          <h4>
            <strong>3D Visualiser / Commercial employee, 3Dimerce</strong>
          </h4>

          <p>
            2009 - 2009 | My second SintLucas internship was at 3Dimerce, a
            company focused on visualizing 3D products. My role was to get 3D
            models ready for online stores while improving my 3D modeling skills
            in 3Ds Max.
          </p>
        </div>

        <div className="exp">
          <h4>
            <strong>3D Visualiser, Pim4</strong>
          </h4>

          <p>
            2007 - 2008 | My very first internship was about 3D modeling in 3DS
            max. After finishing my personal project I mostly worked on
            visualising exhibition stands.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
