import React from "react";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
      <div className="bg-light-grey">
        <div className="container pt-5 pb-5 text-center">
          <h1 className="text-uppercase font-weight-bold m-0">Contact</h1>
        </div>
      </div>
      <div className="container container-smaller pt-5 pb-5">
        <p>
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </p>
        <p className="mb-1">
          Email:{" "}
          <a
            class="font-weight-normal"
            href="mailto:luckersbergen@gmail.com?subject=Contact luckersbergen.nl"
          >
            luckersbergen@gmail.com
          </a>
        </p>
        <p>
          Linkedin:{" "}
          <a
            class="font-weight-normal"
            href="https://www.linkedin.com/in/luckersbergen/"
          >
            linkedin.com/in/luckersbergen
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default Contact;
