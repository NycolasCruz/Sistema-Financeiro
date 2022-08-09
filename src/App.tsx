import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Category } from './types/Category';
import { Item } from './types/Item';
import { categories } from './data/categories';
import { items } from './data/items';
import { GetCurrentMonth, FilterListBymonth } from './helpers';
import { TableArea } from './components/TableArea';


export default function App() {
    const [list, setList] = useState(items);
    const [filteredList, setFilteredlist] = useState<Item[]>([]);
    const [currentMonth, setCurrentMonth] = useState(GetCurrentMonth());

    useEffect(() => {
        setFilteredlist(FilterListBymonth(list, currentMonth));
    }, [list, currentMonth])

    return (<>
        <div className="card-body m-12">
            <div className="rounded-top bg-blue" style={{height: '8rem'}}>
                <div className="d-flex text-center flex-column text-white pt-8">
                    <span className="fw-bold fs-3 pt-9">SISTEMA FINANCEIRO</span>
                </div>
            </div>

            <div className="bg-white rounded mb-9 mt-n1 py-6 px-9">
                <TableArea list={filteredList} />
            </div>
        </div>
    </>)
}
