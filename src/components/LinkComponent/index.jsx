import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import {LinkComponent} from "./styles"

const LinkApp = ({ text, url }) => {
  return (
    <LinkComponent>
      <Link className="link" to={`/${url}`}>
        {text}
      </Link>
    </LinkComponent>
  );
};

LinkApp.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default LinkApp;
