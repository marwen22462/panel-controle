import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picture from "../Assets/profile-picture.jpg";
import {
  faUser,
  faChalkboardTeacher,
  faFolderOpen,
  faIdCard,
  faImage,
  faIdBadge,
  faCheckDouble,
  faDatabase,
  faBell,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";

import { Nav } from "react-bootstrap";
const SideBar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-header">
            <div className="picture">
          <span className="picture-circle">
            <img className="profile-picture " src={picture} />
          </span>
          </div>
        </div>

        <Nav className="flex-column pt-2">
          <p className="ml-3">
            <span>hello Admin!</span>
            <br/>
            <span className='user-name'>AKHIL</span>
          </p>

          <SubMenu
            title="Students"
            icon={faUser}
            items={["Link", "Link2", "Link3"]}
          />

          <SubMenu
            title="Teacher"
            icon={faChalkboardTeacher}
            items={["Link", "Link2", "Link3"]}
          />

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faImage} className="mr-4" />
              Gallery
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faFolderOpen} className="mr-4" />
              Timetable
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faIdCard} className="mr-4" />
              Exams
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faIdBadge} className="mr-4" />
              sylbus
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faCheckDouble} className="mr-4" />
              Results
            </Nav.Link>
          </Nav.Item>
          <SubMenu
            title="Calender events"
            icon={faDatabase}
            items={["Link", "Link2", "Link3"]}
          />

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faBell} className="mr-4" />
              relise a ticket
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faComments} className="mr-4" />
              Communication
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default SideBar;
