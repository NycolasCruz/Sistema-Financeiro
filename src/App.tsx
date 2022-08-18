import { useEffect, useState } from "react";

import { GetCurrentDate, FilterList } from "./helpers"
import { ItemProps } from "./types/ItemProps";
import { items } from "./data/items";
import { Table } from "./components/Table";

export default function App() {
    const [list] = useState(items);
    const [filteredList, setFilteredList] = useState<ItemProps[]>([]);
    const [currentDate] = useState(GetCurrentDate);

    useEffect(() => {
        setFilteredList(FilterList(list, currentDate));
    }, [list, currentDate])

    return (<>
        <div className="card-body m-12">
            <div className="rounded-top bg-blue" style={{height: '8rem'}}>
                <div className="d-flex text-center flex-column text-white pt-8">
                    <span className="fw-bold fs-3 pt-3">SISTEMA FINANCEIRO</span>
                </div>
            </div>

            <div className="bg-white rounded mb-9 mt-n1 py-6 px-9">
                <Table filteredList={filteredList} />
            </div>
        </div>
    </>)
}
