import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function SideBar() {
  return (
    <aside className={cx("wrapper")}>
      <h1>Side Bar</h1>
    </aside>
  );
}

export default SideBar;
