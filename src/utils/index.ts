import { ItemProps } from "../types/ItemProps";

export function FilterList(list: ItemProps[] , currentDate: string) {
    const newList = list.filter(item => {
        const [itemYear, itemMonth] = item.date.split("-");
        const [currentYear, currentMonth] = currentDate.split("-");

       return (itemYear === currentYear && itemMonth === currentMonth) 
    })

    return newList;
}

export function UppercaseFirstLetter(word: string) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
