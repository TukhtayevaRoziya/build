import React from "react";
import img from "../../assets/1.jpg";
import "./History.scss";
function History() {
  return (
    <div className="History">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="intro">
              <h3>BIZNING TARIX</h3>
              <h5>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <button>Ko'proq ko'rish</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={img} alt="Image for Web" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
