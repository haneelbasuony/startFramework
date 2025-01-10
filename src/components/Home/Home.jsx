import homeimage from '../../assets/avataaars.svg';
function Home() {
  return (
    <div
      style={{
        backgroundColor: '#1ABC9C',
        height: '100vh',
      }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="row">
        <div className="col-12">
          <img src={homeimage} alt="Home" className="w-100" />
          <div className="text-center">
            <h1 className="text-white mt-2">START FRAMEWORK</h1>
            <div className="d-flex align-items-center justify-content-center mt-3">
              <div
                style={{
                  height: '4px',
                  backgroundColor: 'white',
                  flexGrow: 1,
                  margin: '0 20px',
                }}
              ></div>
              <i className="fas fa-star text-white"></i>
              <div
                style={{
                  height: '4px',
                  backgroundColor: 'white',
                  flexGrow: 1,
                  margin: '0 20px',
                }}
              ></div>
            </div>
            <h5 className="text-white mt-3">
              Graphic Artist - Web Designer - Illustrator
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
