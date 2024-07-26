import React, { createContext, useState, useEffect } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';

export const ThemeContext = createContext("light");

const App = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-bg', `var(--color-bg-${theme})`);
    root.style.setProperty('--color-bg-variant', `var(--color-bg-variant-${theme})`);
    root.style.setProperty('--color-primary', `var(--color-primary-${theme})`);
    root.style.setProperty('--color-primary-variant', `var(--color-primary-variant-${theme})`);
    root.style.setProperty('--color-text', `var(--color-text-${theme})`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header />
        <Nav />
        <Footer />
        <Portfolio />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
