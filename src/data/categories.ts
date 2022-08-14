import { CategoryProps } from '../types/CategoryProps'

export const categories: CategoryProps = {
    food: {
        name: 'Alimentação',
        color: 'blue',
        expense: true
    },
    payment: {
        name: 'Pagamento',
        color: 'green',
        expense: false
    },
    college: {
        name: 'Faculdade',
        color: 'gray',
        expense: true
    },
    card: {
        name: 'Cartão de crédito',
        color: 'orange',
        expense: true
    }
}
