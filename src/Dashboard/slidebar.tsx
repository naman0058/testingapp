import React from "react";
const Sidebar = () => {
  return (
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title" key="t-menu">
              Menu
            </li>

            <li>
              <a href="javascript: void(0);" className="waves-effect">
                <i className="bx bx-home-circle"></i>
                <span className="badge rounded-pill bg-info float-end">04</span>
                <span key="t-dashboards">Dashboards</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="index.html" key="t-default">
                    Default
                  </a>
                </li>
                <li>
                  <a href="dashboard-saas.html" key="t-saas">
                    Saas
                  </a>
                </li>
                <li>
                  <a href="dashboard-crypto.html" key="t-crypto">
                    Crypto
                  </a>
                </li>
                <li>
                  <a href="dashboard-blog.html" key="t-blog">
                    Blog
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-title" key="t-apps">
              Apps
            </li>

            <li>
              <a href="calendar.html" className="waves-effect">
                <i className="bx bx-calendar"></i>
                <span key="t-calendar">Calendar</span>
              </a>
            </li>

            <li>
              <a href="chat.html" className="waves-effect">
                <i className="bx bx-chat"></i>
                <span key="t-chat">Chat</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
