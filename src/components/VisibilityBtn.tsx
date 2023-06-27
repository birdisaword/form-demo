import React from "react";
import { VisibilityBtn, VisibilityImg } from "../style";
import hide from '../assets/hide.png';
import show from '../assets/show.png';

interface EyeBtnProps {
  name: string;
  formik: any;
}

const EyeBtn: React.FC<EyeBtnProps> = ({ name, formik }) => {
  const { values, setFieldValue } = formik;

  const togglePasswordVisibility = () => {
    setFieldValue(name, !values[name]);
  };

  return (
    <VisibilityBtn type="button" onClick={togglePasswordVisibility}>
      {values[name] ? (
        <VisibilityImg src={show} alt="show" />
      ) : (
        <VisibilityImg src={hide} alt="hide" />
      )}
    </VisibilityBtn>
  );
};

export default EyeBtn;