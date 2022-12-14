import { ItemProps } from "../types/ItemProps"

export const items: ItemProps[] = [
    {
        date: new Date(2022, 11, 8),
        category: 'Comida',
        name: 'açaí',
        value: 6.5
    },
    {
        date: new Date(2022, 11, 8),
        category: 'Pagamento',
        name: 'salário',
        value: 800
    },
    {
        date: new Date(2022, 11, 14),
        category: 'Comida',
        name: 'Pão de queijo',
        value: 3
    },
    {
        date: new Date(2022, 11, 25),
        category: 'Pagamento',
        name: 'Faculdade',
        value: 183.70
    },
    {
        date: new Date(2023, 0, 17),
        category: 'Contas',
        name: 'Itaú',
        value: 253.76
    }
]