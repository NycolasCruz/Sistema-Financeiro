import { useState, useEffect } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import classNames from "clsx";
import dayjs from "dayjs";

import { ItemProps } from "@/types/ItemProps";
import { UppercaseFirstLetter } from "@/utils";
import { CreateItemForm } from "@/components/CreateItemForm";

import "./styles.scss";

type Props = {
	currentDate: string;
	setCurrentDate: (currentDate: string) => void;
	data: ItemProps[];
};

export function Header({ currentDate, setCurrentDate, data }: Props) {
	const [balanceColor, setBalanceColor] = useState("");

	const [currentYear, currentMonth] = currentDate.split("-");
	const date = new Date(Date.UTC(Number(currentYear), Number(currentMonth)));
	const translatedDate = date.toLocaleDateString("pt-br", { year: "numeric", month: "long" });

	useEffect(() => {
		data.map((item) => {
			const [, month] = item.date.split("-");

			console.log(month);
		});
	}, []);

	const totalExpenses = data
		.filter((item) => item.expense)
		.reduce((acc, item) => acc + item.value, 0);

	const totalIncome = data
		.filter((item) => !item.expense)
		.reduce((acc, item) => acc + item.value, 0);

	const result = totalIncome - totalExpenses;

	function handlePreviousMonth() {
		setCurrentDate(dayjs(currentDate).subtract(1, "month").format("YYYY-MM"));
	}

	function handleNextMonth() {
		setCurrentDate(dayjs(currentDate).add(1, "month").format("YYYY-MM"));
	}

	function handleTotalExpenses() {
		return totalExpenses.toLocaleString("pt-br", {
			style: "currency",
			currency: "BRL"
		});
	}

	function handleTotalIncomes() {
		return totalIncome.toLocaleString("pt-br", {
			style: "currency",
			currency: "BRL"
		});
	}

	function handleBalance() {
		return result.toLocaleString("pt-br", {
			style: "currency",
			currency: "BRL"
		});
	}

	useEffect(() => {
		result < 0 ? setBalanceColor("expense-color") : setBalanceColor("income-color");
	}, [result]);

	return (
		<div className="d-flex align-items-center text-center">
			<div className="d-flex gap-4">
				<Button
					variant="none"
					className="d-flex justify-content-center align-items-center rounded-circle button-gray w-8 h-8 p-0"
					onClick={handlePreviousMonth}
				>
					<FaChevronLeft />
				</Button>

				<div className="fw-semibold text-muted fs-17 w-40">
					{UppercaseFirstLetter(translatedDate)}
				</div>

				<Button
					variant="none"
					className="d-flex justify-content-center align-items-center rounded-circle button-gray w-8 h-8 p-0"
					onClick={handleNextMonth}
				>
					<FaChevronRight />
				</Button>
			</div>

			<div className="d-flex justify-content-between gap-10 mx-18 w-100">
				<div className="d-flex flex-column">
					<span className="fw-semibold text-muted fs-17">Despesa</span>
					<span className="fw-bold expense-color">{handleTotalExpenses()}</span>
				</div>

				<div className="d-flex flex-column">
					<span className="fw-semibold text-muted fs-17">Receita</span>
					<span className="fw-bold income-color">{handleTotalIncomes()}</span>
				</div>

				<div className="d-flex flex-column">
					<span className="fw-semibold text-muted fs-17">Saldo</span>
					<span className={classNames("fw-bold", balanceColor)}>{handleBalance()}</span>
				</div>
			</div>

			<CreateItemForm />
		</div>
	);
}
