import {makeAutoObservable} from "mobx";

class Field {
    levels = []
    activeLevel = {}
    row = []
    hoveredFields = []

    constructor() {
        makeAutoObservable(this, {}, {deep: true})
    }

    fetchLevels(){
        fetch("https://demo7919674.mockable.io")
            .then(res => res.json())
            .then(json => {
                this.levels = json.map(lvl => {
                    return {
                        ...lvl,
                        selected: false
                    }
                })
            })
    }

    selectedLevel(name){
        this.levels = this.levels.map(lvl => {
                if (lvl.name === name) {
                    this.activeLevel = {...lvl, selected: true}
                    this.row = Array.from(Array(this.activeLevel.field).keys())
                    this.fillingFields()
                    console.log(JSON.stringify(this.row))
                    return {...lvl, selected: true}
                }
                return {...lvl, selected: false};
            }
        )
    }

    fillingFields() {
        this.hoveredFields = this.row.map((row, index) => {
                return this.row.map(col => {
                    return {row: row, col: col, hovered: false}
                })
            }
        )
        console.log(JSON.stringify(this.hoveredFields, null ,2))
    }


    hoverField({row, col}){
        this.hoveredFields[row][col] = {...this.hoveredFields[row][col], hovered: !this.hoveredFields[row][col].hovered}
    }
}

export default new Field()
