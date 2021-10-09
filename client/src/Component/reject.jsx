import React from 'react'
import "./reject.css";
const Reject = () => {
    return (
      <>
        <div className="cont">
          <div class="card text-center">
            <div class="card-header">Status</div>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">Sorry you are not eligible</p>

              <div class="d-grid gap-2 col-6 mx-auto">
                <button
                  style={{ marginLeft: "0px", color: "black", width: "200px" }}
                  class="btn btn-primary"
                  type="button"
                >
                  Go to dashboard
                </button>
              </div>
            </div>
            <div class="card-footer text-muted"></div>
          </div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="red"
              fill-opacity="1"
              d="M0,288L60,266.7C120,245,240,203,360,176C480,149,600,139,720,144C840,149,960,171,1080,160C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </>
    );
}

export default Reject
