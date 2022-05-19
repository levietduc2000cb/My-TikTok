import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/05496783f9979e53b890158a4850cc49~c5_100x100.jpeg?x-expires=1653123600&x-signature=W6Dd7L%2Fd2nU6FsXR25dkiYCH3cI%3D"
        alt="avatar"
      ></img>
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>NguyenvanA</span>
      </div>
    </div>
  );
}

export default AccountItem;
