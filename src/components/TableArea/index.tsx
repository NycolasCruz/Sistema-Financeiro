import '../../index.css'
import { ItemProps } from "../../types/ItemProps"

type Props = {
    filteredList: Array<ItemProps>
}

export function TableArea({ filteredList }: Props) {
    return (<>
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Data</th>
                    <th>Categoria</th>
                    <th>Título</th>
                    <th className="text-end mt-10">Valor</th>
                </tr>
            </thead>
            <tbody>
                {filteredList.map((item, index) => {
                     return (
                        <tr key={`item-${index}`}>
                            <td>{index + 1}</td>
                            <td>09/08/2022</td>
                            <td>{item.category.toUpperCase()}</td>
                            <td>{item.title.toUpperCase()}</td>
                            <td className="text-end">{`R$${item.value}`}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>)
}