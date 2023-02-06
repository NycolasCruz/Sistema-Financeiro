import dayjs from "dayjs";
import { ItemProps } from "../types/ItemProps";

export function GetCurrentDate() {
    return dayjs().format('YYYY-MM')
}

export function FilterList(list: ItemProps[] , currentDate: string) {
    const newList = list.filter(item => {
        const [itemYear, itemMonth] = item.date.split('-');
        const [currentYear, currentMonth] = currentDate.split('-');

       return (itemYear === currentYear && itemMonth === currentMonth) 
    })

    return newList;
}
