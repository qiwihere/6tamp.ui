import React from "react";
import {colors, StyledButton, StyledButtonLink} from "./styles";
import PropTypes from "prop-types"

const Button = props => {
    if(props.type === "link"){
        return <StyledButtonLink {...props}>{props.children}</StyledButtonLink>
    }
    return <StyledButton {...props}>{props.children}</StyledButton>
}

Button.propTypes = {
    appearance: PropTypes.oneOf(Object.keys(colors)),
    type: PropTypes.string
}

export default Button