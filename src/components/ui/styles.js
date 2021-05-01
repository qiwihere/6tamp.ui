import styled, {css} from "styled-components";
import {Col} from "react-grid-system";
import {Link} from "react-router-dom";

export const colors = {
    normal: {
        text: "#535353",
        background: "#FFFFFF",
        border: "#535353"
    },
    normal_inverse: {
        text: "#FFFFFF",
        background: "#535353",
        border: "#FFFFFF"
    },
    normal_disabled: {
        text: "#FFFFFF",
        background: "#D2D2D2",
        border: "#D2D2D2"
    },

    primary: {
        text: "#FFFFFF",
        background: "#A342EF",
        border: "#A342EF"
    },
    primary_inverse: {
        text: "#A342EF",
        background: "#FFFFFF",
        border: "#A342EF"
    },
    primary_disabled: {
        text: "#FFFFFF",
        background: "#D2D2D2",
        border: "#D2D2D2"
    },

    flat: {
        text: "#535353",
        background: "#ffffff",
        border: "#ffffff",
    },
    flat_inverse: {
        text: "#535353",
        background: "#ffffff",
        border: "#ffffff",
    },

    flat_disabled: {
        text: "#898989",
        background: "#ffffff",
        border: "#ffffff",
    },
}

export const StyledTextInput = styled.input`
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  color: #535353;
  padding: 14px 10px;
  border: 1px solid #B4B4B4;
  border-radius: 8px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 20px;
  outline: none;
  
  ::placeholder{
    color: #979797;
  }
`
export const StyledErr = styled.span`
    display: block;
    color: #D80202;
    font-size: 14px;
    line-height: 21px;
`


const StyledButtonCss = css`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  margin: 10px 0;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  border-radius: 12px;
  padding: 15px;
  
  color: ${state=>colors[state.appearance??"normal"].text};
  background: ${state=>colors[state.appearance??"normal"].background};
  border: 1px solid ${state=>colors[state.appearance??"normal"].border};
  
  :hover{
      color: ${state=>colors[(state.appearance??"normal")+"_inverse"].text};
      background: ${state=>colors[(state.appearance??"normal")+"_inverse"].background};
      border: 1px solid ${state=>colors[(state.appearance??"normal")+"_inverse"].border};
  }
  :disabled{
      color: ${state=>colors[(state.appearance??"normal")+"_disabled"].text};
      background: ${state=>colors[(state.appearance??"normal")+"_disabled"].background};
      border: 1px solid ${state=>colors[(state.appearance??"normal")+"_disabled"].border};
  }
`
export const StyledButton = styled.button`${StyledButtonCss}`
export const StyledButtonLink = styled(Link)`
    ${StyledButtonCss};
    text-decoration: none;
    display: block;
    
    ${state=>state.disabled?`
        color: ${colors[(state.appearance??"normal")+"_disabled"].text};
        background: ${colors[(state.appearance??"normal")+"_disabled"].background};
        border: 1px solid ${colors[(state.appearance??"normal")+"_disabled"].border};
    `:null}
`

export const StyledPageHeader = styled(Col)`
  font-size: 22px;
  line-height: 33px;
  font-weight: 500;
  color: ${colors.normal.text};
  margin-bottom: 20px;
  padding: 0!important;
`
export const StyledPageDescription = styled(Col)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${colors.normal.text};
  margin-bottom: 40px;
  padding: 0!important;
`
