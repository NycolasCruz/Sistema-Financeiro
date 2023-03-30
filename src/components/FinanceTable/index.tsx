import Table from "react-bootstrap/Table";
import dayjs from "dayjs";

import { ItemProps } from "@/types/ItemProps";
import { UppercaseFirstLetter } from "@/utils";
import { categories } from "@/data/categories";

type Props = {
    filteredList: ItemProps[];
}

export function FinanceTable({ filteredList }: Props) {
    return (
        <Table hover>
            <thead>
                <tr>
                    <th className="col-1">#</th>
                    <th className="col-3">Nome</th>
                    <th className="col-3">Categoria</th>
                    <th className="col-3">Data</th>
                    <th className="col-2">Custo</th>
                </tr>
            </thead>
            <tbody>
                {filteredList.map((item, index) => {
                    const formatedValue = item.value.toLocaleString("pt-BR", {
                        style: "currency", currency: "BRL"
                    });
                    const date = dayjs(item.date).format("DD/MM/YYYY")
                    const category = categories.find(category => category.id === item.category)
                    const colorValue = item.expense ? "#ff0505" : "#02bf02";

                    return (
                        <tr key={`item-${index}`}>
                            <td className="col-1">{index + 1}</td>
                            <td className="col-3">{UppercaseFirstLetter(item.name)}</td>
                            <td className="col-3 text-white">
                                <div
                                    className="rounded px-2"
                                    style={{background: category?.color, width: "fit-content"}}
                                >
                                    {category?.name}
                                </div>
                            </td>
                            <td className="col-3">{date}</td>
                            <td className="col-2">
                                <div style={{color: colorValue}}>
                                    {formatedValue}
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}
