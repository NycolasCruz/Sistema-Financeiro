import { useEffect, useState } from "react";

import { Card } from "react-bootstrap";
import dayjs from "dayjs";

import { FilterList } from "./utils"
import { FinanceTable } from "./components/FinanceTable";
import { ItemProps } from "./types/ItemProps";
import { Header } from "./components/Header";
import { items } from "./data/items";

export default function App() {
    const [list] = useState(items);
    const [filteredList, setFilteredList] = useState<ItemProps[]>([]);
    const [currentDate, setCurrentDate] = useState(dayjs().format("YYYY-MM"));

    useEffect(() => {
        setFilteredList(FilterList(list, currentDate));
    }, [list, currentDate])

    return (
        <Card.Body className="m-12">
            <div className="rounded-top bg-blue h-8">
                <div className="d-flex text-center flex-column text-white pt-8">
                    <span className="fw-bold fs-3 pt-3">SISTEMA FINANCEIRO</span>
                </div>
            </div>

            <div className="bg-white rounded mb-9 mt-n1 py-6 px-9">
                <Header currentDate={currentDate} setCurrentDate={setCurrentDate} />
                <FinanceTable filteredList={filteredList} />
            </div>
        </Card.Body>
    )
}
