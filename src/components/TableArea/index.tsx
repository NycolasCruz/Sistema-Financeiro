import '../../index.css'
import { Item } from "../../types/Item"

type Props = {
    list: Array<Item>
}

export function TableArea({list}: Props) {
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
                {list.map((item, index) => {
                    console.log(item)
                     return (
                        <tr key={`item-${index}`}>
                            {/* <td>{index + 1}</td>
                            <td>09/08/2022</td>
                            <td>{item.category.toUpperCase()}</td>
                            <td>{item.title.toUpperCase()}</td>
                            <td className="text-end">{`R$${item.value}`}</td> */}
                            <td>cu</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>)
}