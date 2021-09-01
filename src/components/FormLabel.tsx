import styled from "@emotion/styled";
import { FC } from "react";

interface LabelProps {
  htmlFor: string;
  text: string;
}

const FormLabel: FC<LabelProps> = (props) => {
  return <Label htmlFor={props.htmlFor}>{props.text}</Label>;
};

const Label = styled.label`
  display: block;
  /* float: right; */
  width: 355px;
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: normal;
`;

export default FormLabel;