import { Item } from "../types/Item";

export function GetCurrentMonth() {
    let currentDate =  new Date();
    return `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`;
}

export function FilterListBymonth(list: Array<Item>, date: string): Array<Item> {
    let newList: Array<Item> = [];
    let [year, month] = date.split('-');

    for(let índice in list) {
        if(
            list[índice].date.getFullYear() === parseInt(year) &&
            list[índice].date.getMonth() === parseInt(month)
        ) { 
            newList.push(newList[índice]);
        }
    }

    return newList;
}