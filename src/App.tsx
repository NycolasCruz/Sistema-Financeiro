import { useEffect, useState } from 'react';

import { ItemProps } from './types/ItemProps';
import { items } from './data/items';
import { GetCurrentYearAndMonth, FilterListBymonth } from './helpers';
import { TableArea } from './components/TableArea';


export default function App() {
    const [list] = useState(items);
    const [filteredList, setFilteredlist] = useState<ItemProps[]>([]);
    const [currentYearAndMonth] = useState(GetCurrentYearAndMonth());

    useEffect(() => {
        setFilteredlist(FilterListBymonth(list, currentYearAndMonth));
    }, [list, currentYearAndMonth])

    return (<>
        <div className="card-body m-12">
            <div className="rounded-top bg-blue" style={{height: '8rem'}}>
                <div className="d-flex text-center flex-column text-white pt-8">
                    <span className="fw-bold fs-3 pt-9">SISTEMA FINANCEIRO</span>
                </div>
            </div>

            <div className="bg-white rounded mb-9 mt-n1 py-6 px-9">
                <TableArea filteredList={filteredList} />
            </div>
        </div>
    </>)
}
