import { useEffect, useRef, useState } from "react";
import classNames from "clsx";
import dayjs from "dayjs";
import axios from "axios";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";

import { useData } from "@/hooks/useData";
import { Toast } from "@/utils/mixins/toast";
import { ItemProps } from "@/types/ItemProps";
import { CategoryProps } from "@/types/CategoryProps";
import { UppercaseFirstLetter, getCategories, getItems } from "@/helpers";

type Props = {
	filteredList: ItemProps[];
};

export function FinanceTable({ filteredList }: Props) {
	const [categories, setCategories] = useState<CategoryProps[]>([]);
	const { setData } = useData();
	const ref = useRef(true);

	async function handleDeleteItem(id: number) {
		const result = await Swal.fire({
			icon: "warning",
			title: "Tem certeza que deseja excluir?",
			showCancelButton: true,
			cancelButtonColor: "#d33",
			confirmButtonText: "Sim, excluir!",
			cancelButtonText: "Cancelar"
		});

		if (result.isConfirmed) {
			axios.delete(`http://localhost:3001/projects/${id}`);

			setData(await getItems());

			Toast.fire({ icon: "success", title: "Excluído com sucesso!" });
		}
	}

	useEffect(() => {
		if (ref.current) {
			ref.current = false;

			return;
		}

		async function fetchCategories() {
			setCategories(await getCategories());
		}

		fetchCategories();
	}, []);

	return (
		<Table hover>
			<thead>
				<tr>
					<th className="col-1">#</th>
					<th className="col-3">Nome</th>
					<th className="col-3">Categoria</th>
					<th className="col-3">Data</th>
					<th className="col-2">Custo</th>
					<th className="col-2">Ações</th>
				</tr>
			</thead>
			<tbody>
				{filteredList.map((item, index) => {
					const formattedValue = item.value.toLocaleString("pt-BR", {
						style: "currency",
						currency: "BRL"
					});
					const date = dayjs(item.date).format("DD/MM/YYYY");
					const category = categories.find((category) => category.id === item.category);

					return (
						<tr className="align-middle" key={`item-${item.id}`}>
							<td className="col-1">{index + 1}</td>
							<td className="col-3">{UppercaseFirstLetter(item.name)}</td>
							<td className="col-3 text-white">
								<div className="rounded fit-content px-2" style={{ background: category?.color }}>
									{category?.name}
								</div>
							</td>
							<td className="col-3">{date}</td>
							<td className="col-2">
								<div className={classNames(item.expense ? "expense-color" : "income-color")}>
									{formattedValue}
								</div>
							</td>
							<td className="d-flex justify-content-end">
								<Button
									onClick={() => handleDeleteItem(item.id)}
									variant="danger"
									className="d-flex justify-content-center align-items-center rounded-circle w-8 h-8 p-0"
								>
									<FaTimes />
								</Button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
}
