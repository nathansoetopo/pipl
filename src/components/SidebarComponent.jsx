// import { Avatar, Menu, MenuHandler, MenuList, MenuItem, Button, Tooltip } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import React, { useRef } from "react";
import { Avatar, ListGroup, Tooltip } from "flowbite-react";
import { HiOutlineUserCircle, HiOutlineAdjustments, HiInbox, HiCloudDownload } from "react-icons/hi";
import Profile from "../assets/avatar.png";
import '../index.css';

const Sidebar = () => {
  const profileAvatar = useRef();
  const pathName = useLocation().pathname;
  // const mystyle = {
  //   // color: "white",
  //   backgroundUrl: "/themes/images/sidebar.png",
  //   // padding: "10px",
  //   // fontFamily: "Arial"
  // };
  return (
    <>
      <div className="w-[100px] h-screen pr-1">
        <aside className="flex flex-col justify-around h-screen h-fixed">
          <div className="flex justify-center md:justify-end py-3">
            <h1 className="font-bold text-[#1F1F1F] text-[32px]">
              pipl<span className="text-[#FF3D00]">.ai</span>
            </h1>
          </div>
          <nav className="flex flex-col h-screen justify-around border-r-4 h-sidebar">
            <div className="flex ml-auto flex-col gap-y-14 w-[90%]">
              <Tooltip content="Overview" placement="right">
                <Link
                  to="/dashboard"
                  className={pathName === "/dashboard" ? "active nav-link py-3 pl-7 pr-4" : "nav-link py-3 pl-7 pr-4"}
                  title="Overview"
                >
                  <svg
                    className="w-[44px] h-[35px] scale-90"
                    xmlns="http://www.w3.org/2000/svg"
                    // width="44"
                    // height="35"
                    // fill="#000"
                  >
                    <rect
                      width="10.733"
                      height="33.733"
                      x="32.886"
                      y=".638"
                      //   fill="#fff"
                      rx="5.367"
                    />
                    <rect
                      width="10.733"
                      height="23"
                      x="16.786"
                      y="11.371"
                      //   fill="#fff"
                      rx="5.367"
                    />
                    <rect
                      width="10.733"
                      height="13.8"
                      x=".687"
                      y="20.571"
                      //   fill="#fff"
                      rx="5.367"
                    />
                  </svg>
                </Link>
              </Tooltip>
              <Tooltip content="Warmup" placement="right">
                <Link
                  to="/warmup"
                  className={pathName === "/warmup" ? "active nav-link py-1 pl-8 pr-5" : "nav-link py-1 pl-8 pr-5"}
                  title="Warmup"
                >
                  <svg
                    className="w-[37px] h-[52px] scale-90"
                    // width="37"
                    // height="52"
                    // fill="none"
                    viewBox="0 0 37 52"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.873 51.6275C25.2688 51.3524 25.6407 51.1148 25.9894 50.8478C27.7177 49.5258 28.7851 47.7877 29.2527 45.6797C29.585 44.1821 29.5895 42.6719 29.3936 41.1591C29.1159 39.0162 28.4981 36.9688 27.6082 35.0005C27.588 34.9556 27.5659 34.911 27.5435 34.8668C27.5383 34.8564 27.5289 34.8483 27.5013 34.8137C27.4605 35.1297 27.4288 35.4207 27.385 35.7096C27.2699 36.4702 27.0995 37.2164 26.7467 37.9088C26.5534 38.2882 26.3146 38.6357 25.9465 38.8696C25.8156 38.9528 25.6616 39.0003 25.5181 39.0645C25.44 38.5113 25.3985 37.9916 25.2894 37.486C24.6708 34.6162 23.3832 32.1178 21.1373 30.1513C19.7563 28.9421 19.042 27.4007 18.8985 25.5868C18.8062 24.4189 18.962 23.281 19.3093 22.1442C19.2588 22.1535 19.2184 22.1554 19.1822 22.1687C16.4646 23.1796 14.8559 25.1001 14.422 27.955C14.339 28.5 14.3473 29.065 14.3701 29.6182C14.4471 31.5071 14.231 33.3392 13.3269 35.0346C13.0959 35.4682 12.7756 35.8551 12.496 36.2627C12.4617 36.3132 12.4243 36.3618 12.3738 36.4316C11.5878 35.0116 10.6871 33.7895 8.97674 33.4505C9.07877 33.7438 9.19165 33.9963 9.25444 34.2606C9.43683 35.0305 9.27499 35.769 9.01187 36.4951C8.64932 37.4945 8.22773 38.4783 7.94517 39.5C7.33482 41.7085 7.25446 43.943 7.88312 46.1687C8.57532 48.6189 10.0875 50.4413 12.2733 51.7347C12.357 51.7841 12.44 51.8346 12.5065 51.9252C12.0685 51.773 11.6263 51.6312 11.1927 51.4674C8.99468 50.6373 6.99021 49.4835 5.24813 47.905C2.68976 45.5869 1.13829 42.7161 0.46777 39.3496C0.0308472 37.1533 0.0263621 34.9563 0.272295 32.7403C0.515237 30.55 1.1581 28.4747 1.95757 26.4347C2.30927 25.5371 2.66397 24.6375 2.94803 23.7176C3.2803 22.6417 3.33823 21.5391 2.9768 20.4491C2.87477 20.1414 2.72527 19.8488 2.57801 19.5036C2.89719 19.5763 3.19807 19.6235 3.48474 19.7137C4.6262 20.0727 5.54676 20.7658 6.35071 21.626C7.08029 22.4067 7.65887 23.2914 8.15185 24.2344C8.18287 24.2934 8.21726 24.3506 8.26921 24.4426C8.47553 24.2021 8.67362 23.9901 8.85003 23.7618C9.98439 22.295 10.6882 20.6288 11.1262 18.845C11.6069 16.8878 11.7089 14.9023 11.5942 12.895C11.405 9.59353 12.3155 6.63174 14.4855 4.0965C15.775 2.58998 17.4091 1.55607 19.2491 0.830651C19.4483 0.752318 19.6501 0.680297 19.8673 0.599365C19.7481 1.04894 19.6225 1.46771 19.5268 1.89279C18.9946 4.25539 18.9508 6.61243 19.6486 8.95351C20.2552 10.989 21.3769 12.7035 23.0016 14.0756C24.6951 15.5056 26.0186 17.2226 27.1219 19.123C28.3684 21.27 29.3077 23.5379 29.7849 25.9759C29.9591 26.8654 30.0342 27.7742 30.1546 28.6744C30.1609 28.722 30.1658 28.7695 30.1751 28.8508C30.3254 28.8036 30.4641 28.7736 30.5915 28.7179C31.1477 28.4762 31.5465 28.0548 31.8799 27.5674C32.4618 26.7154 32.7866 25.7568 33.0307 24.7675C33.262 23.829 33.3977 22.8748 33.4833 21.913C33.4881 21.8599 33.4986 21.8075 33.5154 21.6965C33.5868 21.8454 33.6358 21.9427 33.6806 22.041C35.0385 25.0247 36.0043 28.1276 36.5361 31.3604C36.809 33.0184 36.9368 34.6886 36.8777 36.3689C36.7798 39.1525 36.1855 41.8084 34.7828 44.2497C33.5464 46.4014 31.829 48.0921 29.7341 49.4171C28.2559 50.3519 26.6723 51.0635 25.0065 51.5974C24.9773 51.6063 24.9474 51.6104 24.873 51.6275Z"
                      // fill="#5271FF"
                    />
                  </svg>
                </Link>
              </Tooltip>
              <Tooltip content="Campaign" placement="right">
                <Link
                  to="/campaign"
                  className={pathName === "/campaign" ? "active nav-link py-1 pl-7 pr-4" : "nav-link py-1 pl-7 pr-4"}
                  title="Campaign"
                >
                  <svg
                    className="w-[49px] h-[50px] scale-90"
                    // width="49"
                    // height="50"
                    // fill="none"
                    viewBox="0 0 49 50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.7288 9.57604L32.9234 45.605C32.7599 46.2151 32.4189 46.7582 31.9468 47.1605C31.4747 47.5627 30.8944 47.8046 30.2849 47.8532H30.0229C29.459 47.8519 28.9069 47.6857 28.4302 47.3737C27.9535 47.0616 27.5715 46.6165 27.3283 46.0896L20.648 31.4764C20.5824 31.3297 20.5616 31.1657 20.5883 31.0064C20.6151 30.8471 20.6881 30.7001 20.7977 30.5849L30.3972 20.6425C30.5475 20.5015 30.6685 20.3303 30.753 20.1393C30.8375 19.9484 30.8836 19.7417 30.8886 19.5317C30.8936 19.3217 30.8573 19.1129 30.782 18.9179C30.7067 18.7228 30.594 18.5457 30.4506 18.3972C30.3072 18.2487 30.1361 18.1319 29.9478 18.0539C29.7595 17.9759 29.5579 17.9384 29.3552 17.9435C29.1524 17.9487 28.9528 17.9965 28.7685 18.084C28.5841 18.1715 28.4188 18.2968 28.2827 18.4525L18.6831 28.4142C18.5719 28.5277 18.4299 28.6033 18.2761 28.631C18.1223 28.6587 17.964 28.6372 17.8224 28.5693L3.78796 21.6891C3.23866 21.4204 2.77749 20.9907 2.46153 20.4534C2.14557 19.916 1.98867 19.2944 2.01026 18.6657C2.04339 18.0183 2.27281 17.3982 2.66589 16.8936C3.05896 16.3891 3.59567 16.0258 4.19963 15.8554L39.0611 5.68049C39.6708 5.50014 40.3201 5.52495 40.9154 5.75135C41.5106 5.97775 42.0211 6.39405 42.3732 6.94024C42.6095 7.32838 42.7634 7.76412 42.8247 8.21854C42.886 8.67297 42.8533 9.1357 42.7288 9.57604Z"
                      // fill="#5271FF"
                    />
                  </svg>
                </Link>
              </Tooltip>
              <Tooltip content="Inbox" placement="right">
                <Link
                  to="/inbox"
                  className={pathName === "/inbox" ? "active nav-link py-3 pl-7 pr-4" : "nav-link py-3 pl-7 pr-4"}
                  title="Inbox"
                >
                  <svg
                    className="w-[47px] h-[38px] scale-90"
                    // width="47"
                    // height="38"
                    // fill="none"
                    viewBox="0 0 47 38"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44.9927 0.347412H2.00737C1.53235 0.347412 1.07679 0.544562 0.740897 0.89549C0.405009 1.24642 0.216309 1.72238 0.216309 2.21867V34.03C0.216309 35.0226 0.593709 35.9745 1.26549 36.6763C1.93726 37.3782 2.84839 37.7725 3.79842 37.7725H43.2017C44.1517 37.7725 45.0629 37.3782 45.7346 36.6763C46.4064 35.9745 46.7838 35.0226 46.7838 34.03V2.21867C46.7838 1.72238 46.5951 1.24642 46.2592 0.89549C45.9233 0.544562 45.4678 0.347412 44.9927 0.347412ZM16.9403 19.06L3.79842 31.6441V6.47577L16.9403 19.06ZM19.5821 21.6095L22.2911 24.1825C22.6213 24.4981 23.0526 24.6731 23.5001 24.6731C23.9476 24.6731 24.3788 24.4981 24.709 24.1825L27.418 21.6095L40.3808 34.03H6.61934L19.5821 21.6095ZM30.0598 19.06L43.2017 6.47577V31.6441L30.0598 19.06Z"
                      // fill="#5271FF"
                    />
                  </svg>
                </Link>
              </Tooltip>
            </div>
            <div className="relative">
              <Avatar
                img={Profile}
                rounded
                bordered
                status="online"
                // statusPosition="top-right"
                className="cursor-pointer"
                onClick={() => {
                  profileAvatar.current.classList.contains("hidden")
                    ? profileAvatar.current.classList.remove("hidden")
                    : profileAvatar.current.classList.add("hidden");
                }}
              />
              <div className="w-48 absolute left-20 top-0 hidden" ref={profileAvatar}>
                <ListGroup>
                  <ListGroup.Item active={true} icon={HiOutlineUserCircle}>
                    Profile
                  </ListGroup.Item>
                  <ListGroup.Item icon={HiOutlineAdjustments}>Settings</ListGroup.Item>
                  <ListGroup.Item icon={HiInbox}>Messages</ListGroup.Item>
                  <ListGroup.Item icon={HiCloudDownload}>Download</ListGroup.Item>
                </ListGroup>
              </div>
            </div>
            {/* <Menu placement="right-end">
              <MenuHandler>
                <Button variant="text" className="hover:bg-white active:bg-white" ripple={false}>
                  <Avatar src={Profile} alt="avatar" variant="circular" />
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem className="font-semibold">Balance</MenuItem>
                <MenuItem className="font-semibold">Notification</MenuItem>
                <MenuItem className="font-semibold">Settings</MenuItem>
              </MenuList>
            </Menu> */}
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
