import Link from "next/link";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
          <div className="brand">
            <Link href="/">
              <a className="d-flex align-items-center">
                <img src="/brand.png" alt="brand" width="40" />
                <h3 className="m-0 ml-3 font-weight-bold d-none d-md-block">
                  LUC
                </h3>
              </a>
            </Link>
          </div>

          <div className="links text-uppercase">
            <Link href="/">
              <a className="d-block d-md-inline">Projects</a>
            </Link>
            <Link href="/about-me">
              <a className="d-block d-md-inline px-md-4">About Me</a>
            </Link>
            <a
              href="mailto:luckersbergen@gmail.com"
              className="d-block d-md-inline"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>

    {children}

    <footer>
      <div className="container d-flex align-items-center justify-content-between pt-5 pb-5">
        <div className="links text-uppercase">
          <Link href="/">
            <a className="d-block d-md-inline font-weight-normal">Projects</a>
          </Link>
          <Link href="/about-me">
            <a className="d-block d-md-inline px-md-4 font-weight-normal">
              About Me
            </a>
          </Link>
          <a
            href="mailto:luckersbergen@gmail.com"
            className="d-block d-md-inline font-weight-normal"
          >
            Contact
          </a>
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
