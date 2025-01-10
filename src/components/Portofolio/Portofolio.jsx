import image1 from '../../assets/poert1.png';
import image2 from '../../assets/port2.png';
import image3 from '../../assets/port3.png';

import styles from './Portofolio.module.css';

function Portofolio() {
  return (
    <div style={{ height: '85vh' }}>
      <div className="container">
        <div className="text-center col-12 mt-5">
          <h1 className=" fw-bold " style={{ color: '#2C3E50' }}>
            PORTOFOLIO COMPONENT
          </h1>
        </div>
        <div className=" col-12 d-flex align-items-center justify-content-center mt-3 mb-4">
          <div
            style={{
              height: '4px',
              backgroundColor: '#2C3E50',
              flexGrow: 1,
              marginLeft: '450px',
              marginRight: '20px',
            }}
          ></div>
          <i className="fas fa-star" style={{ color: '#2C3E50' }}></i>
          <div
            style={{
              height: '4px',
              backgroundColor: '#2C3E50',
              flexGrow: 1,
              marginRight: '450px',
              marginLeft: '20px',
            }}
          ></div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-5 ">
          <div className="col-sm-6 col-md-4 ">
            <div className={styles.imageContainer}>
              <img
                src={image1}
                className={`${styles.image} w-100 rounded`}
                alt="Example"
              />
              <div className={styles.overlay}>
                <i className="fas fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 ">
            <div className={styles.imageContainer}>
              <img
                src={image2}
                className={`${styles.image} w-100 rounded`}
                alt="Example"
              />
              <div className={styles.overlay}>
                <i className="fas fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 ">
            <div className={styles.imageContainer}>
              <img
                src={image3}
                className={`${styles.image} w-100 rounded`}
                alt="Example"
              />
              <div className={styles.overlay}>
                <i className="fas fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 ">
            <div className={styles.imageContainer}>
              <img
                src={image1}
                className={`${styles.image} w-100 rounded`}
                alt="Example"
              />
              <div className={styles.overlay}>
                <i className="fas fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 ">
            <div className={styles.imageContainer}>
              <img
                src={image2}
                className={`${styles.image} w-100 rounded`}
                alt="Example"
              />
              <div className={styles.overlay}>
                <i className="fas fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 ">
            <div className={styles.imageContainer}>
              <img
                src={image3}
                className={`${styles.image} w-100 rounded`}
                alt="Example"
              />
              <div className={styles.overlay}>
                <i className="fas fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
