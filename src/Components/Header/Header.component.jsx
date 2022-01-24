import React, { useState, useEffect } from "react";
import "./header.css";
import { useHistory } from "react-router-dom";
const HeaderComponent = () => {
  let history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClickOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClickEdu = (value) => {
    history.push({
      pathname: "/course",
      search: `?id=${value}`,
    });
  };

  const handleClickShortTerm = (value) => {
    history.push({
      pathname: "/course-short-term",
      search: `?id=${value}`,
    });
  };
  return (
    <div>
      <div
        className={
          "wsmenucontent overlapblackbg " +
          (menuOpen ? "menuopen" : "menuclose")
        }
      />
      <div className="wsmenuexpandermain slideRight">
        <a
          id="navToggle"
          className={
            "animated-arrow slideLeft " + (menuOpen ? "menuopen" : "menuclose")
          }
          onClick={() => handleClickOpenMenu()}
        >
          <span />
        </a>

        <a href="/" className="smallogo">
          <img
            src="https://res.cloudinary.com/serviced24/image/upload/v1633589688/logomenu_nliwks.png"
            height="34px"
            alt=""
          />
        </a>
      </div>

      <div className="header">
        <div className="wrapper clearfix">
          <div className="container hidden-xs" style={{ position: "relative" }}>
            <div className="logo clearfix" style={{ width: "100%" }}>
              <a
                style={{ textDecoration: "none", width: "32%", float: "left" }}
                title="Responsive Slide Menus"
              >
                <div className="row">
                  <div className="col-3">
                    <img
                      src="https://res.cloudinary.com/serviced24/image/upload/v1633589688/logomenu_nliwks.png"
                      width="80px"
                    />
                  </div>
                  <div className="col-9" style={{ marginLeft: "-10px" }}>
                    <div className="row">
                      <div className="col-12">
                        <span className="header-title ml-3">
                          HỌC VIỆN DESIGN 24
                        </span>
                      </div>
                      <div className="col-12" style={{ marginTop: "-4px" }}>
                        <span
                          className=" ml-4"
                          style={{
                            fontSize: "14px",
                            fontWeight: 500,
                            fontStyle: "italic",
                            color: "rgb(146 146 146)",
                          }}
                        >
                          Design & Digital Marketing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="searchdestop">
              <span
                style={{
                  fontSize: "15px",
                  fontStyle: "italic",
                  fontWeight: "500",
                  color: "rgb(146, 146, 146)",
                }}
              >
                Đơn vị liên kết đào tạo
              </span>
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://res.cloudinary.com/toantqt/image/upload/v1620209420/icon-edu-d24/537606018a637f3d2672_esthkf.jpg"
                  width="45px"
                />
                <img
                  src="https://res.cloudinary.com/toantqt/image/upload/v1620209419/icon-edu-d24/6945795ffe3d0b63522c_wockje.jpg"
                  width="55px"
                  className="ml-3"
                />
              </div>
            </div>
          </div>
        </div>
        {/*Menu chính*/}
        <div
          className="container-fluid"
          id="fix-menu"
          style={{ backgroundColor: "#0082c8" }}
        >
          <div className="container">
            <nav
              className={
                "wsmenu pm_buttoncolor blue-grdt slideLeft clearfix " +
                (menuOpen ? "menuopen" : "menuclose")
              }
            >
              <ul className="mobile-sub wsmenu-list">
                <li>
                  <a
                    className="active"
                    onClick={() => {
                      history.push("/");
                    }}
                  >
                    <i className="fa fa-home" />
                    <span className="hometext" />
                  </a>
                </li>
                <li>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <a href="#">Lịch khai giảng</a>
                </li>
                <li>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <a href="#">Đồ họa chuyên ngành</a>
                  <ul className="wsmenu-submenu">
                    <li>
                      <a onClick={() => handleClickEdu(16)}>NGÀNH DU LỊCH</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(18)}> NGÀNH SPA</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(17)}>
                        NGÀNH NHÀ HÀNG KHÁCH SẠN
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(19)}>NGÀNH KINH TẾ</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(20)}>
                        NGÀNH NÔNG NGHIỆP
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(21)}>
                        NGÀNH BẢO VỆ THỰC VẬT
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(22)}>NGÀNH THỦY SẢN</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(23)}>NGÀNH CÔNG NGHỆ</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(24)}>NGÀNH GIÁO DỤC</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <a href="#">Khóa dài hạn</a>
                  <ul className="wsmenu-submenu">
                    <li>
                      <a onClick={() => handleClickEdu(0)}>
                        Thiết kế đồ họa quảng cáo
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(1)}>
                        Thiết kế video marketing
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(2)}>
                        Thiết kế 3D kiến trúc - nội thất
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(3)}>Thiết kế TVC 3D</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(4)}>
                        Thiết kế hoạt hình 2D
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(5)}>Thiết kế 3D event</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(6)}>
                        Biên tập &amp; dựng phim
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(7)}>
                        MC &amp; dẫn chương trình thực tế
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(8)}>Quay phim</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(9)}>Nhiếp ảnh</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(10)}>Thiết kế Website</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(11)}>
                        Thiết kế App Mobile
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(12)}>
                        Thiết kế & thi công Công Trình Quảng cáo
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(13)}>Tổ chức sự kiện</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(14)}>
                        Livestream bán hàng online
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(15)}>
                        Đồ họa cho thiếu nhi
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Khóa ngắn hạn</a>
                  <ul className="wsmenu-submenu">
                    <li>
                      <a onClick={() => handleClickShortTerm(0)}>
                        ADOBE PHOTOSHOP
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(1)}>
                        ADOBE ILLUSTRATOR
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(2)}>
                        ADOBE PREMIERE
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(3)}>
                        ADOBE AFTER EFFECT
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(4)}>COREL DRAW</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(5)}>SKETCHUP</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(6)}>NUKE STUDIO</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(7)}>BLENDER</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(8)}>
                        AUTODESK 3DS MAX
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(9)}>
                        AUTODESK MAYA
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(10)}>CINEMA 4D</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(11)}>
                        UNREAL ENGINE
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Digital Marketing</a>
                  <ul className="wsmenu-submenu">
                    <li>
                      <a>
                        Khóa Học Livestream Facebook Bán Hàng Online Cao Cấp
                      </a>
                    </li>
                    <li>
                      <a>Khoá Học Bán Hàng Trên Các Sàn Thương Mại Điện Tử</a>
                    </li>
                    <li>
                      <a>Quảng Cáo Google Ads</a>
                    </li>
                    <li>
                      <a>Khóa Học Quảng Cáo Facebook</a>
                    </li>
                    <li>
                      <a>Khóa Học Quảng Cáo Facebook Chuyên Sâu</a>
                    </li>
                    <li>
                      <a>Khóa Học Content Marketing</a>
                    </li>
                    <li>
                      <a>Khóa Học SEO</a>
                    </li>
                    <li>
                      <a>Khóa Học Email Marketing</a>
                    </li>
                    <li>
                      <a>Khóa Học Chatbot</a>
                    </li>
                    <li>
                      <a>Khóa Học Video Bán Hàng</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <a href="https://design24.vn/">Dịch vụ</a>
                </li>
                <li>
                  <a href="https://www.behance.net/design2cngty?tracking_source=search_projects_recommended%7Cdesign24">
                    Dự án
                  </a>
                </li>

                <li>
                  <a href="/tin-tuc/tin-tuc-trung-tam-tin-hoc/Huong-dan-thanh-toan-hoc-phi-959">
                    Việc làm
                  </a>
                </li>
                <li>
                  <a href="/tin-tuc/gioi-thieu-ve-trung-tam-tin-hoc/lien-he-342">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
