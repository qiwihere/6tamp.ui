import {StyledPageDescription} from "./styles";
import {Row} from "react-grid-system";
import React from "react";

const PageDescription = ({children}) => {
    return <Row>
        <StyledPageDescription>{children}</StyledPageDescription>
    </Row>
}
export default PageDescription