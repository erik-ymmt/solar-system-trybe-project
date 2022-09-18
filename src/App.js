import React from 'react';
import Header from './components/Header';
import Mission from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './App.css';
import Footer from './components/Footer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedPlanet: '',
    }
  }

  selectPlanet = (planet) => {
    this.setState({selectedPlanet: planet}, () => this.scrollView());
  }

  scrollView = () => {
    const { selectedPlanet } = this.state
    if (selectedPlanet === 'Urano'|| selectedPlanet === 'Netuno') {
      const observation = document.querySelector('footer');
      observation.scrollIntoView({ behavior: 'smooth' });
    } else {
      const missionsSelected = document.querySelector('.selected');
      missionsSelected.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    const { selectedPlanet } = this.state;
    return (
      <main>
        <Header />
        <SolarSystem
          selectPlanet = { (planet) => this.selectPlanet(planet) }
        />
        <Mission
          selectPlanet = { selectedPlanet }
        />
        <Footer />
      </main>
    );
  }
}

export default App;
