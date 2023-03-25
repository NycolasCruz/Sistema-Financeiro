import Button from "react-bootstrap/Button";
import { FaPlus } from "react-icons/fa";

import "./styles.scss";

export function CreateItemForm() {
    return (
       <div>
            <Button
                variant="none"
                className="d-flex justify-content-center align-items-center rounded-circle rounded-button-purple p-0" 
            >
                <FaPlus className="text-white"/>
            </Button>
       </div>
    )
}