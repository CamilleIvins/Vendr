import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnacksService.js";
import { setHTML } from "../utils/Writer.js";



export class SnackController {

    constructor() {
        console.log("Controller up")

        this.drawSnacks()
    }


    // methods go here, will be taken up by AppState

    drawSnacks() {
        const snacks = AppState.snacks
        console.log('draw working');
        let listSnacks = ``
        // for each item, add a template from the Snacks.js page
        snacks.forEach(snackItem => listSnacks += snackItem.snackTemplate)
        // from lecture, req ('id', HTML from template)
        setHTML('listSnacks', listSnacks)
    }
    // We see snacks -- now we need a way to BUY them
    // do we have money? where is it? every time $ changes//moon miner, draw total from total starting amount




    addMoney() {
        console.log('can we even think about adding quarters?')

    }

}

AppState