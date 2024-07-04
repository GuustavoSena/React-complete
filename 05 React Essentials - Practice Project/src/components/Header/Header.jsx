import logo from '/investment-calculator-logo.png'
import './Header.css'

export default function Header() {
  return (
    <header id="header">
      <img
        src={logo}
        alt="Investment Calculator Logo"
      />
      <h1>Investment Calculator</h1>
    </header>
  );
}
