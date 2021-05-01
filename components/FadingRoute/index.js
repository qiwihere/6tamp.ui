import {Route} from "react-router-dom";
import React from "react";
import {CSSTransition} from "react-transition-group";

const FadingRoute = props => <Route
    {...props}>
    {({match}) => <CSSTransition
        in={match != null}
        timeout={300}
        classNames="page"
        unmountOnExit
    >
        <div className="page">
            {props.children}
        </div>
    </CSSTransition>}
</Route>

export default FadingRoute