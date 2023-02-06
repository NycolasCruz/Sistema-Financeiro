import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { FilterList } from "./helpers"
import { ItemProps } from "./types/ItemProps";
import { items } from "./data/items";
import { FinanceTable } from "./components/FinanceTable";
import { Header } from "./components/Header";

export default function App() {
    const [list] = useState(items);
    const [filteredList, setFilteredList] = useState<ItemProps[]>([]);
    const [currentDate] = useState(dayjs().format('YYYY-MM'));

    useEffect(() => {
        setFilteredList(FilterList(list, currentDate));
    }, [list, currentDate])

    return (
        <div className="card-body m-12">
            <div className="rounded-top bg-blue h-8">
                <div className="d-flex text-center flex-column text-white pt-8">
                    <span className="fw-bold fs-3 npt-4">SISTEMA FINANCEIRO</span>
                </div>
            </div>

            <div className="bg-white rounded mb-9 mt-n1 py-6 px-9">
                <Header currentDate={currentDate}/>
                <FinanceTable filteredList={filteredList} />
            </div>
        </div>
    )
}
