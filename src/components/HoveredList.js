import React from 'react';
import field from "../store/field";
import {observer} from "mobx-react-lite";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 30%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`
const Item = styled.div`
  width: 100%;
  padding: 10px 5px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 5px;
  
  background-color: antiquewhite;
`

export const HoveredList = observer(() => {
    return (
        <Wrapper>
            {
                field.hoveredFields ? field.hoveredFields.flat().filter(field => field.hovered).map(f => {
                    return <Item>
                        row {f.row} col {f.col}
                    </Item>
                }) : null

            }
        </Wrapper>
    );
});
