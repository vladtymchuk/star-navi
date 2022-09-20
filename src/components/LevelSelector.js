import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import styles from './LevelSelector.module.css'

import field from "../store/field";

export const LevelSelector = observer(() => {

    useEffect(() => {
        field.fetchLevels()
    }, [])

    return (
        <div className={styles.main}>
            {
                field.levels ? field.levels.map(lvl => <div
                        className={`${styles.level} ${lvl.selected ? styles.selected : ""}`}
                        onClick={() => field.selectedLevel(lvl.name)}
                        key={lvl.name}>
                    <p className={styles.lvlTxt}>{lvl.name}</p>
                </div>) : null
            }
        </div>
    );
});

