import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {
  CheckBoxWrapper,
  CheckBoxLabel,
  CheckBox,
  ToggleWrapper,
  Sun,
  Moon,
} from "./ToggleElements";
import moon from "../../assests/images/moon.svg";
import sun from "../../assests/images/sun.svg";

const Toggle = () => {
  const { isDark, toggleIsDark } = useContext(ThemeContext);
  return (
    <ToggleWrapper>
      <Sun src={sun} />
      <CheckBoxWrapper>
        <CheckBox
          id="checkbox"
          type="checkbox"
          checked={isDark}
          onChange={() => toggleIsDark(!isDark)}
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
      <Moon src={moon} />
    </ToggleWrapper>
  );
};

export default Toggle;
