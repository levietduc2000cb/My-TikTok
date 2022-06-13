import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faKeyboard,
  faCircleQuestion,
  faLanguage,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import config from "~/config";

import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Search from "../Search";
import Menu from "~/components/Popper/Menu";
import Image from "~/components/Image";
import { UploadIcon, MessageIcon, InboxIcon } from "~/components/Icons";

const cx = classNames.bind(styles);
function Header() {
  const currentUser = true;
  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faLanguage} />,
      title: "English",
      children: {
        title: "Language",
        data: [
          {
            type: "language",
            code: "en",
            title: "English",
          },
          {
            type: "language",
            code: "vi",
            title: "Vietnamese",
          },
          {
            type: "language",
            code: "ja",
            title: "Japanese",
          },
          {
            type: "language",
            code: "en",
            title: "English",
          },
          {
            type: "language",
            code: "vi",
            title: "Vietnamese",
          },
          {
            type: "language",
            code: "ja",
            title: "Japanese",
          },
          {
            type: "language",
            code: "en",
            title: "English",
          },
          {
            type: "language",
            code: "vi",
            title: "Vietnamese",
          },
          {
            type: "language",
            code: "ja",
            title: "Japanese",
          },
          {
            type: "language",
            code: "vi",
            title: "Vietnamese",
          },
          {
            type: "language",
            code: "ja",
            title: "Japanese",
          },
          {
            type: "language",
            code: "vi",
            title: "Vietnamese",
          },
          {
            type: "language",
            code: "ja",
            title: "Japanese",
          },
          {
            type: "language",
            code: "vi",
            title: "Vietnamese",
          },
          {
            type: "language",
            code: "ja",
            title: "Japanese",
          },
          {
            type: "language",
            code: "vi",
            title: "Vietnamese",
          },
          {
            type: "language",
            code: "ja",
            title: "Japanese",
          },
          {
            type: "language",
            code: "vi",
            title: "Vietnamese",
          },
          {
            type: "language",
            code: "ja",
            title: "Japanese",
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Feedback and help",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Keyboard shortcuts",
    },
  ];

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@hoaa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Setting",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  //handle Logic
  function handleMenuChange(menuItem) {
    switch (menuItem.type) {
      case "language":
        //Handle change language
        break;

      default:
        break;
    }
  }

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to={config.routes.home} className={cx("logo-link")}>
            <img src={images.logo} alt="TikTok"></img>
          </Link>
        </div>
        <Search />
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Messenger" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIfb2gF4pm2MBS61L27OHDhLoYIwBuWwLu0A&usqp=CAU"
                alt="Nguyen Van A"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
