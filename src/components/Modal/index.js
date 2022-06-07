import React, { useCallback, useRef, useEffect, useState } from "react";
import {
    Background,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalWrapper,
    ButtonSalvar,
    ButtonCancelar,

} from "./styles";
import patientsService from "../../services/patientsService"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import consultService from "../../services/consultService";
export const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();
    const [findResult, setFindResult] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [consulta, setConsulta] = useState([]);
    useEffect(() => {
        const getResult = async () => {
            const patients = await patientsService.getPatients()
            setFindResult(patients)
        }
        getResult()
    }, [])
    const handleChange = (event, value = 0) => {
        const newValue = consulta

        newValue[event.target.name] = event.target.value;

        setConsulta({ ...newValue });
    };
    async function handleSubmit(publish) {
        console.log(consulta)
        // consultService([consulta])
        //     .then((res) => {
        //         alert("Ok")
        //     })
        //     .catch(err => {
        //         alert("Error: " + err.message)
        //     })
    }

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        (e) => {
            if (e.key === "Escape" && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    useEffect(() => {
        document.addEventListener("keydown", keyPress);
        return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);
    return (
        <>
            {showModal ? (
                <Background onClick={closeModal} ref={modalRef}>
                    <ModalWrapper showModal={showModal}>
                        <ModalHeader>
                            <h2>Nova Consulta</h2>
                        </ModalHeader>
                        <ModalBody>

                            <form onSubmit={handleSubmit}>
                            <label>Paciente:</label>
                                <select name="patients" onChange={handleChange}>
                                    {findResult.map((find, index) => {
                                        return (
                                            <option value={find.id}>{find.patient.first_name}</option>
                                        )
                                    })}
                            </select><br />
                                <label>Data e Hora:</label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    showTimeSelect
                                    locale="pt-BR"
                                    timeFormat="HH:mm"
                                    timeIntervals={30}
                                    timeCaption="Hora"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                />

                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <ButtonSalvar type="submit">
                                Salvar
                            </ButtonSalvar>
                            <ButtonCancelar onClick={() => setShowModal((prev) => !prev)} aria-label="Fechar">
                                Cancelar
                            </ButtonCancelar>
                        </ModalFooter>
                    </ModalWrapper>
                </Background>
            ) : null
            }
        </>
    );
};
