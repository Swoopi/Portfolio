import React, { useContext } from 'react';
import './toggleswitch.css';
import { ThemeContext } from '../../App';  // Adjust the import based on your file structure
import { MdDarkMode } from 'react-icons/md';
import { CiDark } from 'react-icons/ci';

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isLightTheme = theme === 'light';

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <div 
      className={`toggle-switch ${isLightTheme ? 'light-mode' : 'dark-mode'}`} 
      onClick={handleClick}
    >
      {isLightTheme ? (
        <CiDark className="toggle-icon" />
      ) : (
        <MdDarkMode className="toggle-icon" />
      )}
    </div>
  );
};

export default ToggleSwitch;
