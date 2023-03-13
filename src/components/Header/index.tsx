import Pagination from 'react-bootstrap/Pagination';

type Props = {
    currentDate: string;
}

export function Header({ currentDate }: Props) {
    const [currentYear, currentMonth] = currentDate.split('-');
    const  date = new Date(Date.UTC(Number(currentYear), Number(currentMonth)));
    const translatedDate = date.toLocaleDateString('pt-br', {  year: 'numeric', month: 'long' });

    return (
        <div>
             <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{translatedDate.toUpperCase()}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </div>
    )
}
