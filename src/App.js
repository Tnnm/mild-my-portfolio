import "./App.scss";
import { useState } from "react";
import LoverBox from "./components/LoverBox";

function App() {
  const [isShowMILD, setIsShowMILD] = useState(false);
  const [isShowDoyoung, setIsShowDoyoung] = useState(true);
  const [textIloveYou, setTextIloveYou] = useState("");

  const handleClickDYBtn = () => {
    setIsShowMILD(!isShowMILD);
    setTextIloveYou("MILD ♡ Tong more <3");
  };

  const handleClickMtnnBtn = () => {
    setIsShowDoyoung(!isShowDoyoung);
  };

  return (
    <div className="App my-mild">
      <header className="App-header">
        {isShowDoyoung && (
          <button className="doyoung" onClick={handleClickDYBtn}>
            Kim Doyoung
          </button>
        )}
        <br />
        {isShowMILD && (
          <button className="mild" onClick={handleClickMtnnBtn}>
            Mild Thananan
          </button>
        )}
        <br />
        {isShowMILD && <p>{textIloveYou}</p>}
      </header>
      <div className="wrapper-lover">
        <LoverBox
          name="Doyoung"
          note="Mild's lover"
          wrapperBoxClassname="rose"
          noteClassName="emerald"
          nicknameClassname="sky"
        />
        <LoverBox
          name="Taeyon"
          note="Mild's lover"
          wrapperBoxClassname="salmon"
          noteClassName="weed"
          nicknameClassname="pink"
        />
        <LoverBox
          name="Thananan"
          note="Mild's lover"
          wrapperBoxClassname="lemon"
          noteClassName="azure"
          nicknameClassname="whiteline"
        />
      </div>

      {/* <div className="wrapper-not-relative">
        <div className="wrapper-lover-box">
          <h1>Name: Mild</h1>
          <p >>Note: lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
