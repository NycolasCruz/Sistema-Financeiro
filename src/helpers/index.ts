import { ItemProps } from "../types/ItemProps";

export function GetCurrentDate() {
    const date = new Date();

    return `${date.getFullYear()}-${date.getMonth()}`;
}

export function FilterList(list: ItemProps[] , currentDate: string) {
    let newList = [] as ItemProps[];
    const [year, month] = currentDate.split('-');

    list.forEach(item => {
        const { date } = item

        if(date.getFullYear() === parseInt(year) && date.getMonth() === parseInt(month)) {
            newList.push(item)
        }
    })

    return newList;
}