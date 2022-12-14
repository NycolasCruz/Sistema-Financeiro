import Table from 'react-bootstrap/Table';

import { ItemProps } from "../../types/ItemProps";

type Props = {
    filteredList: ItemProps[];
}

export function FinanceTable({ filteredList }: Props) {
    return (
        <Table>
            <thead>
                <tr>
                    <th className="col-1">#</th>
                    <th className="col-3">Nome</th>
                    <th className="col-3">Categoria</th>
                    <th className="col-3">Data</th>
                    <th className="col-2">Custo Total</th>
                </tr>
            </thead>
            <tbody>
                {filteredList.map((item, index) => {
                    const currentYear = item.date.getFullYear();
                    const currentMonth = item.date.getMonth() + 1;
                    const currentDay = item.date.getDate();
                    const formateddValue = item.value.toLocaleString('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    });

                    function addZeroToDate(date: number) {
                        if (date < 10) {
                            return `0${date}`;
                        }

                        return date;
                    }
                    
                    function getCurrentDate() {
                        const day = addZeroToDate(currentDay);
                        const month = addZeroToDate(currentMonth);
                        
                        return `${day}/${month}/${currentYear}`;
                    }

                     return (
                        <tr key={`item-${index}`}>
                            <td className="col-1">{index + 1}</td>
                            <td className="col-3">{item.name.toUpperCase()}</td>
                            <td className="col-3">{item.category.toUpperCase()}</td>
                            <td className="col-3">{getCurrentDate()}</td>
                            <td className="col-2">{formateddValue}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}