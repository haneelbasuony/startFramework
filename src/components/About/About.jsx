function About() {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-center  flex-column"
      style={{ backgroundColor: '#1ABC9C', height: '85vh' }}
    >
      <h1 className="text-white">ABOUT COMPONENT</h1>
      <div className=" col-12 d-flex align-items-center justify-content-center mt-3 mb-4">
        <div
          style={{
            height: '4px',
            backgroundColor: 'white',
            flexGrow: 1,
            marginLeft: '900px',
            marginRight: '20px',
          }}
        ></div>
        <i className="fas fa-star text-white"></i>
        <div
          style={{
            height: '4px',
            backgroundColor: 'white',
            flexGrow: 1,
            marginRight: '900px',
            marginLeft: '20px',
          }}
        ></div>
      </div>

      <div className=" container ">
        <div className="row">
          <p className="col-sm-12 col-md-6 text-white text-start fs-5">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="col-sm-12 col-md-6 text-white text-start fs-5 ">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
