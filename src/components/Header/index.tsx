import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import dayjs from 'dayjs';

import { UppercaseFirstLetter } from '../../utils';

import "./styles.scss"

type Props = {
    currentDate: string;
    setCurrentDate: (currentDate: string) => void;
}

export function Header({ currentDate, setCurrentDate }: Props) {
    const [currentYear, currentMonth] = currentDate.split('-');
    const  date = new Date(Date.UTC(Number(currentYear), Number(currentMonth)));
    const translatedDate = date.toLocaleDateString('pt-br', { year: 'numeric', month: 'long' });

    function handlePreviousMonth() {
        setCurrentDate(dayjs(currentDate).subtract(1, "month").format("YYYY-MM"))
    }
    
    function handleNextMonth() {
        setCurrentDate(dayjs(currentDate).add(1, "month").format("YYYY-MM"))
    }

    return (
        <div className="d-flex align-items-center gap-4 mb-3">
            <Button
                variant="none"
                className="d-flex justify-content-center align-items-center rounded-circle rounded-button p-0"
                onClick={handlePreviousMonth}
            >
                <FaChevronLeft />
            </Button>

            <div className="fw-semibold text-center text-muted fs-17 w-10">
                {UppercaseFirstLetter(translatedDate)}
            </div>

            <Button
                variant="none"
                className="d-flex justify-content-center align-items-center rounded-circle rounded-button p-0"
                onClick={handleNextMonth}
            >
               <FaChevronRight />
            </Button>
        </div>
    )
}
