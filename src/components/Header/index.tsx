import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { Button } from 'react-bootstrap';

import { UppercaseFirstLetter } from '../../utils';

import "./styles.scss"

type Props = {
    currentDate: string;
}

export function Header({ currentDate }: Props) {
    const [currentYear, currentMonth] = currentDate.split('-');
    const  date = new Date(Date.UTC(Number(currentYear), Number(currentMonth)));
    const translatedDate = date.toLocaleDateString('pt-br', { year: 'numeric', month: 'long' });

    return (
        <div className="d-flex align-items-center gap-4">
            <Button
                variant="none"
                className="d-flex justify-content-center align-items-center rounded-circle rounded-button p-0"
            >
                <FaChevronLeft />
            </Button>

            <div className="fw-semibold text-muted fs-17">
                {UppercaseFirstLetter(translatedDate)}
            </div>

            <Button
                variant="none"
                className="d-flex justify-content-center align-items-center rounded-circle rounded-button p-0"
            >
               <FaChevronRight />
            </Button>
        </div>
    )
}
