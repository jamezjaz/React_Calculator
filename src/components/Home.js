import React from 'react';
import '../styles/Home.css';
import logo from '../assets/logo.png';

const Home = () => (
  <div className="home">
    <h2 className="heading">Hello there!</h2>
    <div className="welcome">
      <h4>
        You&apos;re welcome to our page
      </h4>
      <img src={logo} alt="logo" className="logo" />
    </div>
    <p>
      In 1642, the first true “calculator” was invented: one that performed calculations
      through a clockwork-type of mechanism. The Pascal calculator, invented by French inventor
      and mathematician Blaise Pascal, was lauded for attempting arithmetic calculations
      previously thought impossible. But unfortunately, they were difficult to produce and very
      few were ever made. The mechanical calculator then invented by Thomas de Colmar in the
      mid-nineteenth century, and subsequent others, were easier to produce, but extremely large
      and bulky–not at all the pocket calculators we know today.
    </p>
    <p>
      Curt Herzstark invented the first handheld, mechanic calculator in 1945, from a design he had
      created in 1938. Shaped like a stout pepper grinder, the Curta calculators were produced in
      large quantities until 1970, when a company in Japan invented the first digital pocket
      calculator and the demand for the antiquated device faded. Companies in the United States,
      such as Texas Instruments, adapted the design of the Japanese device, and enhanced it by
      creatingthe graphing calculators we know today.
    </p>
  </div>
);

export default Home;
