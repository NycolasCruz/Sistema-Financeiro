import { ItemProps } from "../../types/ItemProps";

type Props = {
    filteredList: ItemProps[];
}

export function Table({ filteredList }: Props) {
    return (<>
        <table className="table">
            <thead>
                <tr>
                    <th className="col-1">#</th>
                    <th className="col-3">Nome</th>
                    <th className="col-3">Categoria</th>
                    <th className="col-3">Data</th>
                    <th className="col-2 mt-10">Custo Total</th>
                </tr>
            </thead>
            <tbody>
                {filteredList.map((item, index) => {
                    const currentYear = item.date.getFullYear()
                    const currentMonth = item.date.getMonth() + 1
                    const currentDay = item.date.getDate()

                     return (
                        <tr key={`item-${index}`}>
                            <td className="col-1">{index + 1}</td>
                            <td className="col-3">{item.name.toUpperCase()}</td>
                            <td className="col-3">{item.category.toUpperCase()}</td>
                            <td className="col-3">{`${currentDay}/${currentMonth}/${currentYear}`}</td>
                            <td className="col-2">{`R$${item.value}`}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>)
}