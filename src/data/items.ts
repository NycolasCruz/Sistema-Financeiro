import dayjs from "dayjs";

import { ItemProps } from "@/types/ItemProps";

const month = new Date().getMonth();

export const items: ItemProps[] = [
	{
		date: dayjs(new Date(2023, month, 8)).format("YYYY-MM-DD"),
		category: 3,
		name: "açaí",
		value: 7.5,
		expense: true
	},
	{
		date: dayjs(new Date(2023, month, 8)).format("YYYY-MM-DD"),
		category: 1,
		name: "salário",
		value: 1500.55
	},
	{
		date: dayjs(new Date(2023, month, 14)).format("YYYY-MM-DD"),
		category: 3,
		name: "Pão de queijo",
		value: 3
	},
	{
		date: dayjs(new Date(2023, month, 25)).format("YYYY-MM-DD"),
		category: 4,
		name: "Faculdade",
		value: 183.7,
		expense: true
	},
	{
		date: dayjs(new Date(2023, month, 17)).format("YYYY-MM-DD"),
		category: 5,
		name: "cartão Itaú",
		value: 2253.75,
		expense: true
	},
	{
		date: dayjs(new Date(2023, month, 17)).format("YYYY-MM-DD"),
		category: 2,
		name: "Fundos de investimento",
		value: 780.5
	},
	{
		date: dayjs(new Date(2023, month + 1, 25)).format("YYYY-MM-DD"),
		category: 4,
		name: "Faculdade",
		value: 183.7,
		expense: true
	},
	{
		date: dayjs(new Date(2023, month + 1, 17)).format("YYYY-MM-DD"),
		category: 5,
		name: "cartão Itaú",
		value: 2253.75,
		expense: true
	},
	{
		date: dayjs(new Date(2023, month + 1, 17)).format("YYYY-MM-DD"),
		category: 2,
		name: "Fundos de investimento",
		value: 780.5
	}
];
