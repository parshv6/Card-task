import React from  "react";
import './App.css';
import Card from "./Card";

function App() {
  return (
    <div className="app">
     <div className="header">
      <h3>Testimonial</h3>
      <h2>What Clients Says?</h2>
      <hr className="line"/>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p> <br/> <p>doloremque laudantium, totam rem aperiam</p>
      </div>
      <div className="home__card">
      <Card
        info='"Minions are small, yellow creatures who have existed since the beginning of time, evolving from yellow."'
        profile="https://i.pinimg.com/originals/7f/75/6b/7f756bcb3481db56650768cc5fc0cf50.jpg"
        name="Minions"
        desc="Creezy"
      />
      <Card
        info='"Kohli is regarded as one of the best contemporary batsmen in the world."'
        profile="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
        name="Virat Kohli"
        desc="King Kohli"
      />
      <Card
        info='"He is widely regarded as one of the greatest wicket-keeper batsmen and captains in the history of the game."'
        profile="https://m.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/08/16/Pictures/_4939b302-df5b-11ea-b1b0-f6d177b03796.jpg"
        name="M.S.Dhoni"
        desc="Captain Cool"
      />
      </div>
      <hr className="footer__line"/>
    </div>
  );
}

export default App;
