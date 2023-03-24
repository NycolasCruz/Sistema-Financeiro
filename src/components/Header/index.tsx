import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import dayjs from "dayjs";

import { ItemProps } from "../../types/ItemProps";
import { UppercaseFirstLetter } from "../../utils";

import "./styles.scss"

type Props = {
    currentDate: string;
    setCurrentDate: (currentDate: string) => void;
    data: ItemProps[]
}

export function Header({ currentDate, setCurrentDate, data }: Props) {
    const [currentYear, currentMonth] = currentDate.split("-");
    const  date = new Date(Date.UTC(Number(currentYear), Number(currentMonth)));
    const translatedDate = date.toLocaleDateString("pt-br", { year: "numeric", month: "long" });

    function handlePreviousMonth() {
        setCurrentDate(dayjs(currentDate).subtract(1, "month").format("YYYY-MM"))
    }
    
    function handleNextMonth() {
        setCurrentDate(dayjs(currentDate).add(1, "month").format("YYYY-MM"))
    }

    return (
        <div className="d-flex text-center">
            <div  className="d-flex align-items-center gap-4">
                <Button
                    variant="none"
                    className="d-flex justify-content-center align-items-center rounded-circle rounded-button p-0"
                    onClick={handlePreviousMonth}
                >
                    <FaChevronLeft />
                </Button>

                <div className="fw-semibold text-muted fs-17 w-10">
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

            <div className="d-flex justify-content-between gap-10 mx-24 w-100">
                <div className="d-flex flex-column">
                    <span className="fw-semibold text-muted fs-17">Despesa</span>
                    <span className="fw-bold" style={{color: "#ff0505"}}>
                        R$ 1000,00
                    </span>
                </div>

                <div className="d-flex flex-column">
                    <span className="fw-semibold text-muted fs-17">Receita</span>
                    <span className="fw-bold" style={{color: "#02bf02"}}>
                        R$ 250,00
                    </span>
                </div>

                <div className="d-flex flex-column">
                    <span className="fw-semibold text-muted fs-17">Balanço</span>
                    <span className="fw-bold" style={{color: "#ff0505"}}>
                        R$ -750,00
                    </span>
                </div>
            </div>
        </div>
    )
}
