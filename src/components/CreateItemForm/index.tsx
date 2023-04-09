import { FormEvent, useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FaPlus } from "react-icons/fa";
import Select from "react-select";
import classNames from "clsx";

import { useData } from "@/hooks/useData";
import { ReactSelectProps } from "@/types/ReactSelectProps";
import { categories } from "@/data/categories";

import "./styles.scss";

type Props = {
	currentDate: string;
};

export function CreateItemForm({ currentDate }: Props) {
	const [isIncome, setIsIncome] = useState(false);
	const [show, setShow] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(0);
	const { data, setData } = useData();

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const options: ReactSelectProps[] = categories.map((category) => {
		return {
			value: category.id,
			label: category.name
		};
	});

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		setData([
			...data,
			{
				date: currentDate,
				category: selectedCategory,
				name: String(formData?.get("description")),
				value: Number(formData.get("value")),
				expense: !isIncome
			}
		]);

		handleClose();
	}

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

						<Form.Group className="form-floating" controlId="description">
							<Form.Control
								name="description"
								autoComplete="off"
								placeholder="this-placeholder-is-very-necessary"
							/>
							<Form.Label>Adicione uma descrição</Form.Label>
						</Form.Group>

						<Select
							options={options}
							placeholder="Selecione uma categoria"
							noOptionsMessage={() => "Nenhum resultado encontrado"}
							components={{
								IndicatorSeparator: null
							}}
							onChange={(category) => setSelectedCategory(category?.value || 0)}
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

						<Form.Group className="form-floating" controlId="description">
							<Form.Control
								name="value"
								autoComplete="off"
								placeholder="this-placeholder-is-very-necessary"
							/>
							<Form.Label>Digite o valor</Form.Label>
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
