import { ItemProps } from "../types/ItemProps";

export function GetCurrentYearAndMonth() {
    let currentDate =  new Date();
    return `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`;
}

export function FilterListBymonth(list: Array<ItemProps>, date: string): Array<ItemProps> {
    let newList: Array<ItemProps> = [];
    let [year, month] = date.split('-');

    for(let i in list) {
        if(list[i].date.getFullYear() === parseInt(year) && list[i].date.getMonth() === parseInt(month)) {
            newList.push(list[i]);
        }
    }
    return newList;
}