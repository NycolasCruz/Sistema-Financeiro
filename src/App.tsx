import { useEffect, useState } from "react";
import dayjs from "dayjs";

import Card from "react-bootstrap/Card";

import { FilterList } from "./helpers";
import { useData } from "./hooks/useData";
import { ItemProps } from "./types/ItemProps";
import { FinanceTable } from "./components/FinanceTable";
import { Header } from "./components/Header";

export default function App() {
	const [filteredList, setFilteredList] = useState<ItemProps[]>([]);
	const [currentDate, setCurrentDate] = useState(dayjs().format("YYYY-MM-DD"));
	const { data } = useData();

	useEffect(() => {
		setFilteredList(FilterList(data, currentDate));
	}, [data, currentDate]);

	return (
		<Card.Body className="mt-8 mx-12 mb-12">
			<div className="rounded shadow bg-blue h-14">
				<div className="d-flex text-center flex-column text-white pt-8">
					<span className="fw-bold fs-3 pt-3">SISTEMA FINANCEIRO</span>
				</div>
			</div>

			<div className="d-flex flex-column bg-white rounded shadow gap-3 mb-9 mx-5 mt-n25 py-6 px-9">
				<Header currentDate={currentDate} setCurrentDate={setCurrentDate} data={data} />
				<FinanceTable filteredList={filteredList} />
			</div>
		</Card.Body>
	);
}
