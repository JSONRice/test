import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
// import { ArrowLeftRight } from "@entrata/common/lib/portals/icons/line_icons";
// import { Pencil } from "@entrata/common/lib/portals/icons";

export const Button = ({ icon, label, onClickCallback }) => {
  return (
    <StyledButton onClick={onClickCallback}>
      {/*{icon === "pencil" && <Pencil />}*/}
      {/*{icon === "compare" && <ArrowLeftRight />}*/}

      <Label>{label}</Label>
    </StyledButton>
  );
};

Button.propTypes = {
  onClickCallback: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

const Label = styled.span`
  padding-left: 5px;
`;

// TODO: use theme based variables for colors instead of hardcoded hex codes
const StyledButton = styled.button`
  color: #333;
  background: #f7f7f7;
  border: 1px solid #d1d1d1;
  font-size: 12px;
  line-height: 26px;
  min-height: 24px;
  padding: 0 9px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  svg {
    height: 15px;
    width: 15px;
    margin-right: 4px;
  }
`;
