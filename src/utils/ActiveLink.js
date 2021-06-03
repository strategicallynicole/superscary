import { withRouter } from '@reach/router';
import Link from 'gatsby';
import React, { Children } from 'react';
import { Redirect } from "react-router-dom";

const ActiveLink = ({ router, children, ...props }) => {
    const child = Children.only(children);

    let className = child.props.className || '';
    if (router.pathname === props.href && props.activeClassName) {
        className = `${className} ${props.activeClassName}`.trim();
    }

    delete props.activeClassName;

    return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default Redirect(ActiveLink);