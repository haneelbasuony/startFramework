function Footer() {
  return (
    <footer>
      <div
        className=" text-white"
        style={{ backgroundColor: '#2C3E50', height: '20vh' }}
      >
        <div className="row">
          <div className=" p-5 col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-center ">
            <h3>LOCATION</h3>
            <h6>2215 John Daniel Drive</h6>
            <h6>Clark, MO 65243</h6>
          </div>
          <div className=" p-5 col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-center ">
            <h1>AROUND THE WEB</h1>
            <div className="d-flex flex-row justify-content-between gap-5">
              <div>
                <i
                  className="fs-4 fa-brands fa-facebook p-3"
                  style={{
                    color: '#ffffff',
                    borderRadius: '50%',
                    border: '2px solid #ffffff',
                  }}
                />
                <i
                  className="fs-4 fa-brands fa-twitter p-3"
                  style={{
                    color: '#ffffff',
                    borderRadius: '50%',
                    border: '2px solid #ffffff',
                  }}
                />
                <i
                  className="fs-4 fa-brands fa-linkedin p-3"
                  style={{
                    color: '#ffffff',
                    borderRadius: '50%',
                    border: '2px solid #ffffff',
                  }}
                />
                <i
                  className="fs-4 fa-solid fa-globe p-3"
                  style={{
                    color: '#ffffff',
                    borderRadius: '50%',
                    border: '2px solid #ffffff',
                  }}
                />
              </div>
            </div>
          </div>
          <div className=" p-5 col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-center ">
            <h3>ABOUT FREELANCER</h3>
            <h6>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </h6>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center text-white "
        style={{ backgroundColor: '#1A252F', height: '5vh' }}
      >
        <h6>Copyright © Your Website 2021</h6>
      </div>
    </footer>
  );
}

export default Footer;
