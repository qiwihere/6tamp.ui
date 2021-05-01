import {StyledPageHeader} from "./styles";
import {Row} from "react-grid-system";
import React from "react";

const PageHeader = ({children}) => {
    return <Row>
        <StyledPageHeader>{children}</StyledPageHeader>
    </Row>
}

export default PageHeader