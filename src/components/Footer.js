import '../css/Footer.css';

function Footer() {
  return (
    <>
        <footer className="footer p-4 row">
          <div className="col-lg-1 col-m-12 d-flex-row pb-3">
                    <span className="pb-3">SOCIALS</span>
                    <div className="social-icons col-12">
                        <div className="left m-1">
                            <a className="github-link" href="https://github.com/Bcruise">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                        <div className="center m-1">
                            <a href="https://www.linkedin.com/in/ben-cruise-9820a4168/">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </div>
                        <div className="right m-1">
                                <i className="fa fa-file"></i>
                        </div>
                    </div>
          </div>
          <div className="col-lg-9 col-md-12 name pe-5">
            <span className="pb-3">BEN CRUISE</span>
            <span>ben_cruise@hotmail.co.uk</span>
            <span>07972 045 233</span>
            <span>User-Focused Developer with advanced skills in Javascript, HTML and CSS, amongst other languages and frameworks.</span>
          </div>
      </footer>
    </>    
  );
}

export default Footer;