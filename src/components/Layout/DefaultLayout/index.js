import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../components/Header";
import SideBar from "./Sidebar";

const cx = classNames.bind(styles);

function DefaultLayout(props) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <SideBar />
        <div className={cx("content")}>{props.children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
