import { ItemProps } from "../types/ItemProps";

export function GetCurrentDate() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth()}`
}

export function FilterList(list: ItemProps[] , currentDate: string): ItemProps[] {
    let newList: ItemProps[] = []
    const [year, month] = currentDate.split('-');

    list.forEach(item => {
        const itemDate = item.date

        if(itemDate.getFullYear() === parseInt(year) && itemDate.getMonth() === parseInt(month) + 1) {
            newList.push(item)
        }
    })

    return newList;
}