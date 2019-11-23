import Link from "next/link";
import Head from "next/head";
import "../styles/styles.scss";

export default ({ children, title = "Luc Kersbergen" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://necolas.github.io/normalize.css/latest/normalize.css"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:300,400,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <header>
      <nav>
        <div className="container d-flex align-items-center justify-content-between pt-3 pb-3">
          <div className="brand d-flex align-items-center">
            <img src="/brand.png" alt="brand" width="40" />
            <h3 className="m-0 ml-3">
              <Link href="/" as={process.env.BACKEND_URL + "/"}>
                <a>LUC</a>
              </Link>
            </h3>
          </div>

          <div className="links text-uppercase">
            <Link href="/" as={process.env.BACKEND_URL + "/"}>
              <a>Projects</a>
            </Link>
            <Link href="/about-me" as={process.env.BACKEND_URL + "/about-me"}>
              <a className="px-4">About Me</a>
            </Link>
            <a href="mailto:luckersbergen@gmail.com">Contact</a>
          </div>
        </div>
      </nav>
    </header>

    {children}

    <footer>
      <div className="container d-flex align-items-center justify-content-between pt-5 pb-5">
        <div className="links text-uppercase font-weight-normal">
          <Link href="/" as={process.env.BACKEND_URL + "/"}>
            <a>Projects</a>
          </Link>
          <Link href="/about-me" as={process.env.BACKEND_URL + "/about-me"}>
            <a className="px-4">About Me</a>
          </Link>
          <a href="mailto:luckersbergen@gmail.com">Contact</a>
        </div>

        <div className="social">
          <a href="#">
            <img src="/footer-linkedin.png" width="30" />
          </a>
        </div>
      </div>
    </footer>
  </div>
);
