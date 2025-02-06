import './App.css';
import Cricketers from './Components/Cricketers/Cricketers';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { useState } from 'react';
import Subscribe from './Components/Subscribe/Subscribe';

function App() {
  const [coin, setCoin] = useState(0) // increase the navbar coin section
  const [chosePlayer, setChosePlayer] = useState([]); // select the player from Cricketer

  // handle the banner section button to increase amount in every
  const handleFreeCredit = () => {
    const newAmount = coin + 50000;
    setCoin(newAmount);
    alert('Coin Added to your Account');
  }

  // handle the chose player event handler function
  const handleChosePlayer = player => {

    const existingPlayer = chosePlayer.find(
      (selectedPlayer) => selectedPlayer.id === player.id
    );

    if (coin < player.price_usd) {
      alert("You do not have enough coins");
      return;
    }

    if (chosePlayer.length >= 6) {
      alert('You can not select more than 6 players');
      return;
    }

    if (existingPlayer) {
      alert(`${player.name} is already in your team!`);
      return;
    }

    const totalPlayer = [...chosePlayer, player];
    const availableCoin = coin - player.price_usd;

    setCoin(availableCoin);
    setChosePlayer(totalPlayer);

    alert(`Congratulation ${player.name} add to your team`);

  }

  const handleRemovePlayer = (p) => {
    setChosePlayer(chosePlayer.filter(player => player.id !== p.id));
    const availableBalance = coin + p.price_usd;
    setCoin(availableBalance);
    
  };

  return (
    <>
      <Header coin={coin} handleFreeCredit={handleFreeCredit}></Header>
      <Cricketers chosePlayer={chosePlayer} handleChosePlayer={handleChosePlayer} handleRemovePlayer={handleRemovePlayer}></Cricketers>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  )
}

export default App
