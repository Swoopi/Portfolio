import React, { useContext } from 'react';
import './toggleswitch.css';
import { ThemeContext } from '../../App';  // Adjust the import based on your file structure
import toggleOn from '../../assets/toggle-on.png';
import toggleOff from '../../assets/toggle-off.png';

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isLightTheme = theme === 'light';

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <div className="toggle-switch" onClick={handleClick}>
      <img src={isLightTheme ? toggleOn : toggleOff} alt="Toggle Switch" className="toggle-switch-img" />
    </div>
  );
};

export default ToggleSwitch;
