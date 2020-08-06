import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink({ className, href, children }) {
  // props => { className: "", href="/"}
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

ButtonLink.defaultProps = {
};

ButtonLink.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ButtonLink;
