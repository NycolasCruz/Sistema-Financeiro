import axios from "axios";

import { ItemProps } from "@/types/ItemProps";
import { CategoryProps } from "@/types/CategoryProps";

export function FilterList(list: ItemProps[], currentDate: string) {
	return list.filter((item) => {
		const [itemYear, itemMonth] = item.date.split("-");
		const [currentYear, currentMonth] = currentDate.split("-");

		return itemYear === currentYear && itemMonth === currentMonth;
	});
}

export function uppercaseFirstLetter(word: string) {
	return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export async function getCategories() {
	const { data } = await axios.get<CategoryProps[]>("http://localhost:3001/categories");

	return data;
}

export async function getItems() {
	const { data } = await axios.get<ItemProps[]>("http://localhost:3001/projects");

	return data;
}
