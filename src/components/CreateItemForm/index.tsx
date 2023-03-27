import { FormEvent, useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FaPlus } from "react-icons/fa";
import Select from 'react-select'

export function CreateItemForm() {
    const [isIncome, setIsIncome] = useState(false);
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        handleClose();
    }
    
    return (
        // needs to be a div to keep button formatting
       <div>
            <Button
                variant="none"
                className="d-flex justify-content-center align-items-center rounded-circle button-purple w-8 h-8 p-0"
                onClick={handleShow}
            >
                <FaPlus className="text-white"/>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="d-flex" closeButton>
                    <Modal.Title style={{color: isIncome ? "#02bf02" : "#ff0505"}}>
                        {isIncome ? "Adicionar receita" : "Adicionar despesa"}
                    </Modal.Title>
                </Modal.Header>

                <Form onSubmit={handleSubmit}>
                    <Modal.Body className="d-flex flex-column gap-3">
                        <Form.Switch
                            id="isIncome"
                            label="É uma receita?"
                            onClick={(event) => setIsIncome(event.currentTarget.checked)}
                        />

                        <Form.Group className="form-floating" controlId="description">
                            <Form.Control
                                autoComplete="off"
                                placeholder="this-placeholder-is-very-necessary"
                            />
                            <Form.Label>Adicione uma descrição</Form.Label>
                        </Form.Group>
                        
                        <Select
                            options={isIncome ? options : options}
                            placeholder="Selecione uma categoria"
                            noOptionsMessage={() => "Nenhum resultado encontrado"}
                            components={{
                                IndicatorSeparator: null
                            }}
                            styles={{
                                control: (baseStyles) => ({
                                    ...baseStyles,
                                    borderColor: "#dee2e6",
                                })
                            }}
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    primary: "#7066e070"
                                }
                            })}
                        />

                        <Form.Group className="form-floating" controlId="description">
                            <Form.Control
                                type="number"
                                autoComplete="off"
                                placeholder="this-placeholder-is-very-necessary"
                            />
                            <Form.Label>Digite o valor</Form.Label>
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer
                        className="border-footer border-3px pt-0"
                        style={{borderColor: isIncome ? "#02bf02" : "#ff0505"}}
                    >
                        <Button type="submit" variant="none" className="button-purple text-white">
                            Salvar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
       </div>
    )
}