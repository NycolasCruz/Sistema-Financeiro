import { ItemProps } from "../../types/ItemProps";

type Props = {
    filteredList: ItemProps[];
}

export function Table({ filteredList }: Props) {
    return (<>
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Data</th>
                    <th className="text-end mt-10">Valor</th>
                </tr>
            </thead>
            <tbody>
                {filteredList.map((item, index) => {
                    const currentYear = item.date.getFullYear()
                    const currentMonth = item.date.getMonth() + 1
                    const currentDay = item.date.getDate()

                     return (
                        <tr key={`item-${index}`}>
                            <td>{index + 1}</td>
                            <td>{item.name.toUpperCase()}</td>
                            <td>{item.category.toUpperCase()}</td>
                            <td>{`
                                ${currentDay}/${currentMonth}/${currentYear}
                            `}</td>
                            <td className="text-end">{`R$${item.value}`}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>)
}