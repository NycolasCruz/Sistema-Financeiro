import dayjs from "dayjs";
import { ItemProps } from "../types/ItemProps"

export const items: ItemProps[] = [
    {
        date: dayjs(new Date(2023, 1, 8),).format('YYYY-MM-DD'),
        category: 1,
        name: 'açaí',
        value: 7.5
    },
    {
        date: dayjs(new Date(2023, 1, 8)).format('YYYY-MM-DD'),
        category: 2,
        name: 'salário',
        value: 1500.55
    },
    {
        date: dayjs(new Date(2023, 1, 14)).format('YYYY-MM-DD'),
        category: 1,
        name: 'Pão de queijo',
        value: 3
    },
    {
        date: dayjs(new Date(2023, 1, 25)).format('YYYY-MM-DD'),
        category: 3,
        name: 'Faculdade',
        value: 183.7
    },
    {
        date: dayjs(new Date(2023, 1, 17)).format('YYYY-MM-DD'),
        category: 4,
        name: 'cartão Itaú',
        value: 253.75
    },
    {
        date: dayjs(new Date(2023, 1, 17)).format('YYYY-MM-DD'),
        category: 5,
        name: 'Fundo imobiliário',
        value: 780.5
    }
];
