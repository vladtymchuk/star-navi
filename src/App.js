import React from "react";
import {Board} from "./components/Board";
import {LevelSelector} from "./components/LevelSelector";
import {HoveredList} from "./components/HoveredList";
import styled from "styled-components";

const PlayGround = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  
  padding: 10px;
`

function App() {
  return (
    <div>
        <LevelSelector/>
        <PlayGround>
            <Board/>
            <HoveredList/>
        </PlayGround>

    </div>
  );
}

export default App;
