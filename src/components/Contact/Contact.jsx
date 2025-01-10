function Contact() {
  return (
    <div style={{ height: '75vh' }}>
      <div className="mt-5 d-flex align-items-center justify-content-center">
        <h1 className=" fw-bold " style={{ color: '#2C3E50' }}>
          CONTACT SECTION
        </h1>
      </div>
      <div className=" col-12 d-flex align-items-center justify-content-center mt-4 mb-5">
        <div
          style={{
            height: '4px',
            backgroundColor: '#2C3E50',
            flexGrow: 1,
            marginLeft: '900px',
            marginRight: '20px',
          }}
        ></div>
        <i className="fas fa-star" style={{ color: '#2C3E50' }}></i>
        <div
          style={{
            height: '4px',
            backgroundColor: '#2C3E50',
            flexGrow: 1,
            marginRight: '900px',
            marginLeft: '20px',
          }}
        ></div>
      </div>

      <div
        className=" d-flex flex-column justify-content-center align-items-center px-5 "
        style={{ maxWidth: '1000px', margin: 'auto' }}
      >
        <div className="input-group input-group-lg mt-5">
          <span
            className="input-group-text fw-bold text-center"
            id="inputGroup-sizing-lg"
            style={{
              width: '180px',
              backgroundColor: '#1ABC9C',
              color: 'white',
            }}
          >
            UserName
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            style={{
              outline: 'none',
              borderColor: '#1ABC9C',
              boxShadow: '0 0 5px #1ABC9C',
            }}
          />
        </div>
        <div className="input-group input-group-lg mt-5">
          <span
            className="input-group-text fw-bold"
            id="inputGroup-sizing-lg"
            style={{
              width: '180px',
              backgroundColor: '#1ABC9C',
              color: 'white',
            }}
          >
            UserAge
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            style={{
              outline: 'none',
              borderColor: '#1ABC9C',
              boxShadow: '0 0 5px #1ABC9C',
            }}
          />
        </div>
        <div className="input-group input-group-lg mt-5">
          <span
            className="input-group-text fw-bold"
            id="inputGroup-sizing-lg"
            style={{
              width: '180px',
              backgroundColor: '#1ABC9C',
              color: 'white',
            }}
          >
            UserEmail
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            style={{
              outline: 'none',
              borderColor: '#1ABC9C',
              boxShadow: '0 0 5px #1ABC9C',
            }}
          />
        </div>
        <div className="input-group input-group-lg mt-5">
          <span
            className="input-group-text fw-bold"
            id="inputGroup-sizing-lg"
            style={{
              width: '180px',
              backgroundColor: '#1ABC9C',
              color: 'white',
            }}
          >
            UserPassword
          </span>
          <input
            type="text"
            className="form-control "
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            style={{
              outline: 'none',
              borderColor: '#1ABC9C',
              boxShadow: '0 0 5px #1ABC9C',
            }}
          />
        </div>
        <button
          type="button"
          className="btn mt-5 me-auto py-2 px-4 fw-bold"
          style={{ backgroundColor: '#1ABC9C', color: 'white' }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
