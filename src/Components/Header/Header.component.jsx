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
    console.log(value);
    history.push({
      pathname: "/course",
      state: { id: value },
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
            src="https://design24.vn/Images/dichvu/logomenu.png"
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
                      src="https://design24.vn/Images/dichvu/logomenu.png"
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
                  <div className="megamenu clearfix halfmenu">
                    <ul className="col-lg-6 col-md-6 col-xs-12 link-list">
                      <li>
                        <a href="/lich-khai-giang/tin-hoc-van-phong">
                          <span
                            className="icon-khai-giang fa fa-calendar"
                            aria-hidden="true"
                          />
                          <div className="tieu-de-ngay-khai-giang">
                            Ngày 05-04-2021
                          </div>
                          <div className="noi-dung-nganh-hoc">
                            Tin học văn phòng
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/lich-khai-giang/thvp-chuan-quoc-te-mos">
                          <span
                            className="icon-khai-giang fa fa-calendar"
                            aria-hidden="true"
                          />
                          <div className="tieu-de-ngay-khai-giang">
                            Ngày 05-04-2021
                          </div>
                          <div className="noi-dung-nganh-hoc">
                            Chứng chỉ quốc tế MOS
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/lich-khai-giang/lap-trinh-va-csdl">
                          <span
                            className="icon-khai-giang fa fa-calendar"
                            aria-hidden="true"
                          />
                          <div className="tieu-de-ngay-khai-giang">
                            Ngày 17-05-2021
                          </div>
                          <div className="noi-dung-nganh-hoc">
                            Lập trình &amp; CSDL
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/lich-khai-giang/data-science-machine-learning">
                          <span
                            className="icon-khai-giang fa fa-calendar"
                            aria-hidden="true"
                          />
                          <div className="tieu-de-ngay-khai-giang">
                            Ngày 17-05-2021
                          </div>
                          <div className="noi-dung-nganh-hoc">
                            Data Science &amp; Machine Learning
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/lich-khai-giang/kiem-thu-phan-mem">
                          <span
                            className="icon-khai-giang fa fa-calendar"
                            aria-hidden="true"
                          />
                          <div className="tieu-de-ngay-khai-giang">
                            Ngày 17-05-2021
                          </div>
                          <div className="noi-dung-nganh-hoc">
                            Kiểm thử phần mềm
                          </div>
                        </a>
                      </li>
                    </ul>
                    <ul className="col-lg-6 col-md-6 col-xs-12 link-list">
                      <li>
                        <a href="/lich-khai-giang/internet-marketing">
                          <span
                            className="icon-khai-giang fa fa-calendar"
                            aria-hidden="true"
                          />
                          <div className="tieu-de-ngay-khai-giang">
                            Ngày 17-05-2021
                          </div>
                          <div className="noi-dung-nganh-hoc">
                            Internet Marketing
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/lich-khai-giang/do-hoa-da-truyen-thong">
                          <span
                            className="icon-khai-giang fa fa-calendar"
                            aria-hidden="true"
                          />
                          <div className="tieu-de-ngay-khai-giang">
                            Ngày 05-04-2021
                          </div>
                          <div className="noi-dung-nganh-hoc">
                            Đồ hoạ đa truyền thông
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/lich-khai-giang/thiet-ke-website">
                          <span
                            className="icon-khai-giang fa fa-calendar"
                            aria-hidden="true"
                          />
                          <div className="tieu-de-ngay-khai-giang">
                            Ngày 05-04-2021
                          </div>
                          <div className="noi-dung-nganh-hoc">
                            Thiết kế website
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/lich-khai-giang/lap-trinh-di-dong">
                          <span
                            className="icon-khai-giang fa fa-calendar"
                            aria-hidden="true"
                          />
                          <div className="tieu-de-ngay-khai-giang">
                            Ngày 17-05-2021
                          </div>
                          <div className="noi-dung-nganh-hoc">
                            Lập trình di động
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/lich-khai-giang/mang-may-tinh">
                          <span
                            className="icon-khai-giang fa fa-calendar"
                            aria-hidden="true"
                          />
                          <div className="tieu-de-ngay-khai-giang">
                            Ngày 17-05-2021
                          </div>
                          <div className="noi-dung-nganh-hoc">
                            Mạng máy tính
                          </div>
                        </a>
                      </li>{" "}
                    </ul>
                  </div>
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
                      <a
                        href="/do-hoa-da-truyen-thong"
                        onClick={() => handleClickEdu(0)}
                      >
                        <i class="fas fa-paint-brush"></i>
                        Đồ họa đa truyền thông
                      </a>
                    </li>
                    <li>
                      <a
                        href="/thiet-ke-website"
                        onClick={() => handleClickEdu(1)}
                      >
                        <i className="fa fa-globe" />
                        Thiết kế đồ họa quảng cáo
                      </a>
                    </li>
                    <li>
                      <a
                        href="/data-science-machine-learning"
                        onClick={() => handleClickEdu(2)}
                      >
                        <i className="fa fa-cogs" />
                        Thiết kế video marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/lap-trinh-va-csdl"
                        onClick={() => handleClickEdu(3)}
                      >
                        <i className="fa fa-database" />
                        Thiết kế đồ họa 3D kiến trúc, nội thất
                      </a>
                    </li>
                    <li>
                      <a
                        href="/lap-trinh-di-dong"
                        onClick={() => handleClickEdu(4)}
                      >
                        <i className="fa fa-tablet" />
                        Thiết kế TVC 3D
                      </a>
                    </li>
                    <li>
                      <a
                        href="/kiem-thu-phan-mem"
                        onClick={() => handleClickEdu(5)}
                      >
                        <i className="fa fa-check-circle" />
                        Thiết kế 3D event
                      </a>
                    </li>
                    <li>
                      <a
                        href="/mang-may-tinh"
                        onClick={() => handleClickEdu(6)}
                      >
                        <i className="fa fa-sitemap" />
                        Biên tập &amp; dựng phim
                      </a>
                    </li>
                    <li>
                      <a
                        href="/internet-marketing"
                        onClick={() => handleClickEdu(7)}
                      >
                        <i className="fa fa-bar-chart" />
                        MC &amp; dẫn chương trình thực tế
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://prokids.csc.edu.vn"
                        onClick={() => handleClickEdu(8)}
                      >
                        <i className="fa fa-wrench" />
                        Quay phim
                      </a>
                    </li>
                    <li>
                      <a
                        href="/tin-hoc-van-phong"
                        onClick={() => handleClickEdu(9)}
                      >
                        <i className="fa fa-desktop" />
                        Nhiếp ảnh
                      </a>
                    </li>
                    <li>
                      <a
                        href="/thvp-chuan-quoc-te-mos"
                        onClick={() => handleClickEdu(10)}
                      >
                        <i className="fa fa-graduation-cap" />
                        Thiết kế &amp; thi công quảng cáo
                      </a>
                    </li>
                    <li>
                      <a
                        href="/thvp-chuan-quoc-te-mos"
                        onClick={() => handleClickEdu(11)}
                      >
                        <i className="fa fa-graduation-cap" />
                        Thiết kế Website
                      </a>
                    </li>
                    <li>
                      <a
                        href="/thvp-chuan-quoc-te-mos"
                        onClick={() => handleClickEdu(12)}
                      >
                        <i className="fa fa-graduation-cap" />
                        Thiết kế App mobile
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Khóa ngắn hạn</a>
                </li>
                <li>
                  <a>Khóa Online</a>
                </li>
                <li>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <a href="https://design24.vn/ChiTietDichVu.html">Dịch vụ</a>
                </li>
                <li>
                  <a>Sản phẩm học viên</a>
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
