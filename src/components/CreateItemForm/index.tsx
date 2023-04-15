import { FormEvent, useState, useEffect, useRef } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FaPlus } from "react-icons/fa";
import Select from "react-select";
import classNames from "clsx";
import axios from "axios";

import { useData } from "@/hooks/useData";
import { Toast } from "@/utils/mixins/toast";
import { getCategories, getItems } from "@/helpers";
import { CategoryProps } from "@/types/CategoryProps";
import { ReactSelectProps } from "@/types/ReactSelectProps";
import { MaskedFormControl } from "@/components/MaskedFormControl";

import "./styles.scss";

type Props = {
	currentDate: string;
};

export function CreateItemForm({ currentDate }: Props) {
	const INITIAL_CATEGORY_IF_NO_OTHER_IS_SELECTED = 1;
	const [isIncome, setIsIncome] = useState(false);
	const [show, setShow] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(
		INITIAL_CATEGORY_IF_NO_OTHER_IS_SELECTED
	);
	const [categories, setCategories] = useState<CategoryProps[]>([]);
	const { setData } = useData();
	const ref = useRef(true);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const options: ReactSelectProps[] = categories.map((category) => {
		return {
			value: category.id,
			label: category.name
		};
	});

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		try {
			event.preventDefault();
			const formData = new FormData(event.currentTarget);
			const description = String(formData.get("description"));
			const value = Number(String(formData.get("value")).replace(",", "."));

			await axios.post("http://localhost:3001/projects", {
				date: currentDate,
				category: selectedCategory,
				name: description,
				value: value,
				expense: !isIncome
			});

			handleClose();
			setData(await getItems());

			Toast.fire({ icon: "success", title: "Item adicionado com sucesso!" });
		} catch (error) {
			console.error(error);

			Toast.fire({ icon: "error", title: "Erro ao adicionar item!" });
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
		// needs to be a div to keep button formatting
		<div className="pe-2">
			<Button
				variant="none"
				className="d-flex justify-content-center align-items-center rounded-circle button-success w-8 h-8 p-0"
				onClick={handleShow}
			>
				<FaPlus className="text-white" />
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header className="d-flex" closeButton>
					<Modal.Title className={classNames(isIncome ? "income-color" : "expense-color")}>
						{isIncome ? "Adicionar receita" : "Adicionar despesa"}
					</Modal.Title>
				</Modal.Header>

				<Form onSubmit={handleSubmit}>
					<Modal.Body className="d-flex flex-column gap-3">
						<Form.Switch
							id="isIncome"
							label="É uma receita?"
							onClick={(event) => setIsIncome(event.currentTarget.checked)}
						/>

						<Form.Group controlId="description">
							<Form.Label>Adicione uma descrição</Form.Label>
							<Form.Control
								name="description"
								placeholder="Adicione uma descrição"
								autoComplete="off"
								required
							/>
						</Form.Group>

						<div>
							<Form.Label htmlFor="category">Selecione uma categoria</Form.Label>
							<Select
								inputId="category"
								noOptionsMessage={() => "Nenhum resultado encontrado"}
								options={options}
								defaultValue={options[0]}
								onChange={(category) => setSelectedCategory(Number(category?.value))}
								components={{
									IndicatorSeparator: null
								}}
								styles={{
									control: (baseStyles) => ({
										...baseStyles,
										borderColor: "#dee2e6"
									})
								}}
								theme={(theme) => ({
									...theme,
									colors: {
										...theme.colors,
										primary: "#7066e070"
									}
								})}
							/>
						</div>

						<Form.Group controlId="value">
							<Form.Label>Digite o valor</Form.Label>
							<MaskedFormControl
								mask={Number}
								name="value"
								placeholder="Digite o valor"
								autoComplete="off"
								required
							/>
						</Form.Group>
					</Modal.Body>

					<Modal.Footer className="border-0 pt-0">
						<Button type="submit" variant="none" className="button-purple text-white">
							Salvar
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</div>
	);
}
