import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContenxt';

// class ThemeToggle extends Component {
//   static contextType = ThemeContext;

//   render() {
//     const { toggleTheme } = this.context;
//     return <button onClick={toggleTheme}>Toggle theme</button>;
//   }
// }

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button type="button" onClick={toggleTheme}>
      Toggle theme
    </button>
  );
};

export default ThemeToggle;
