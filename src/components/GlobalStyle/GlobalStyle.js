import PropTypes from "prop-types";
import "./GlobalStyle.scss";

function GlobalStyle(props) {
  return props.children;
}

GlobalStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyle;
