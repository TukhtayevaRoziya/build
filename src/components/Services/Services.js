import React from "react";
import "./Services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHive } from "@fortawesome/free-brands-svg-icons";
import {
  faUserGroup,
  faRulerCombined,
  faCity,
  faHouseChimneyWindow,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
// import {
//   SqueareFootIcon,
//   PeopleOutlineIcon,
//   ViewQuiltIcon,
//   ApartmentIcon,
//   HouseIcon,
//   EditTwoToneIcon,
// } from "@material-ui/icons";

function Services() {
  const map = [
    {
      id: 1,
      icon: faRulerCombined,
      title1: "PRE_CONSTRACTION SERVICES",
      title2: ` Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy`,
    },
    {
      id: 2,
      icon: faUserGroup,
      title1: "PRE_CONSTRACTION SERVICES",
      title2: ` Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy`,
    },
    {
      id: 3,
      icon: faHive,
      title1: "PRE_CONSTRACTION SERVICES",
      title2: ` Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy`,
    },
  ];
  const map2 = map.map((a) => (
    <div className="col-md-4">
      <div className="icon">
        <FontAwesomeIcon icon={a.icon} />
      </div>
      <div className="info">
        <h5>{a.title1}</h5>
        <p>{a.title2}</p>
      </div>
    </div>
  ));
  return (
    <div className="Services">
      <div className="container">
        <div className="intro">
          <h2>Bizning ximatlar</h2>
        </div>
        <div className="row">{map2}</div>
        <div className="row the_second">
          <div className="col-md-4">
            <div className="icon">
              <FontAwesomeIcon icon={faCity}></FontAwesomeIcon>
            </div>
            <div className="info">
              <h5>PRE_CONSTRACTION SERVICES</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon">
              <FontAwesomeIcon icon={faHouseChimneyWindow}></FontAwesomeIcon>
            </div>
            <div className="info">
              <h5>PRE_CONSTRACTION SERVICES</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon">
              <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
            </div>
            <div className="info">
              <h5>PRE_CONSTRACTION SERVICES</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
