import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import '../../node_modules/react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
  // const percentage = 4.52;
  const value = 70;
  return (
    <>
      <nav className="my-4">
        <div className="container d-flex justify-content-between align-items-center">
          <img src={require('../img/logo.svg').default} alt="" />
          <button className="btn primary-btn text-white px-4 py-1">
            Logout
          </button>
        </div>
      </nav>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="data-wrapper p-5 d-flex align-items-center postion-relative">
                <CircularProgressbar
                  value={value}
                  text={``}
                  className=" custom-width"
                  styles={buildStyles({
                    // Text size
                    // textSize: '16px',

                    // Colors
                    pathColor: `#7265C9`,
                    // textColor: '#fff',
                    trailColor: '#332F53',
                    backgroundColor: 'transparent',
                  })}
                />

                <div className="position-absolute data-circle-content w-25 ">
                  <h1 className="tertiary-color font-weight-bolder fs-36">
                    4.52
                  </h1>
                  <h4 className="primary-color fs-13">GB Remaining</h4>
                </div>
                <div className="ml-5">
                  <h2 className="tertiary-color fs-20 ">
                    Residential Proxy Usage
                  </h2>
                  <div className="d-flex">
                    <div>
                      <h4 className="primary-color fs-13 mb-1">Used Today</h4>
                      <h2 className="fs-24 tertiary-color">
                        2.25 <span className="secondary-color">GB</span>
                      </h2>
                    </div>
                    <div className="ml-4">
                      <h4 className="primary-color fs-13 mb-1">Total</h4>
                      <h2 className="fs-24 tertiary-color">
                        4.52 / <span className="secondary-color">7 GB</span>
                      </h2>
                    </div>
                  </div>
                  <button className=" px-4 py-2 mt-4 font-weight-bold secondary-btn fs-13 tertiary-color">
                    Purchase More
                  </button>
                </div>
              </div>
              {/* graph area */}
              <div className="d-flex justify-content-between fs-13 mt-3">
                <h3 className="fs-13 tertiary-color ">Data Usage (GB)</h3>
                <ul className="list-unstyled d-flex">
                  <li className="tertiary-color underline mx-3">Home</li>
                  <li className="primary-color mx-3">Day</li>
                  <li className="primary-color ml-3">Weak</li>
                </ul>
              </div>
              <img
                src={require('../img/Data.svg').default}
                alt=""
                className="w-100 "
              />
            </div>
            {/* right side */}
            <div className="col-12 col-md-6">
              <div className="generate-wrapper p-5">
                <h1 className="fs-20 tertiary-color mb-3">Generate Proxies</h1>
                <div className="d-flex">
                  <select
                    name=""
                    id=""
                    className="custom-select text-white mr-3 "
                  >
                    <option value="">Select Region</option>
                  </select>
                  <select name="" id="" className="custom-select text-white ">
                    <option value="">Select Region</option>
                  </select>
                </div>
                <h3 className="tertiary-color fs-13 my-3">Proxy Count (50)</h3>
                <div className="proxy-count w-100 position-relative">
                  <div className="proxy-circle"></div>
                </div>
                <button className="tertiary-btn px-4 py-1 font-weight-bold mt-4">
                  Generate
                </button>
              </div>
              <div className="right-bottom p-4">
                <div className="d-flex justify-content-between">
                  <p className="font-weight-bold tertiary-color fs-13">
                    Proxy List
                  </p>
                  <p className="font-weight-bold secondary-color fs-13">
                    Copy All
                  </p>
                </div>
                <div className="border-div w-100"></div>
                <div className="scrollable my-3">
                  <p className="mb-1 secondary-color fs-13 w-50">
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                    98.876.5432.2345:lsakjasfk:lkajsfakeiw
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
