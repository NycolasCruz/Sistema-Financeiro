import { CategoryProps } from '../types/CategoryProps'

export const categories: CategoryProps = {
    food: {
        title: 'Alimentação',
        color: 'blue',
        expense: true
    },
    payment: {
        title: 'Pagamento',
        color: 'green',
        expense: false
    },
    college: {
        title: 'Faculdade',
        color: 'gray',
        expense: true
    },
    card: {
        title: 'Cartão de crédito',
        color: 'orange',
        expense: true
    }
}
