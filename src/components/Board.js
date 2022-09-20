import React from 'react';
import {observer} from "mobx-react-lite";

import field from '../store/field'
import styled from "styled-components";

const Playground = styled.div`
  width: ${props => `calc(50px * ${props.oneOf})`};
  height: ${props => `calc(50px * ${props.oneOf})`};
`

const ItemRow = styled.div`
  width: 100%;
  height: 50px;
  
  display: flex;
  align-items: center;
`

const ItemCol = styled.div`
  height: 100%;
  width: 50px;

  box-sizing: border-box;
  border: .5px solid dimgray;
  
  background-color: ${props => props.hovered ? "#253c93" : "#fff"};

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Board = observer(() => {
    function hoverHandler({row, col}) {
        field.hoverField({row, col})
        console.log(JSON.stringify(field.hoveredFields))
    }

    return (
        <Playground oneOf={field.row.length}>
            {
                field.hoveredFields.map((row, index) => {
                    return (<ItemRow key={index}>
                        {
                            row.map((col, colIndex) => {
                                return (<ItemCol key={colIndex}
                                     hovered={col.hovered}
                                     onMouseEnter={() => hoverHandler(col)}
                                >
                                    {col.row} : {col.col}
                                </ItemCol>)
                            })
                        }
                    </ItemRow>)
                })
            }
        </Playground>
    );
});
