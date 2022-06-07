import React, { useState } from "react";
import { BarFooter, ButtonNovaConsulta, ButtonAjuda } from './styles'
import { Modal } from "../Modal";

export function Footer() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };
    return (
        <>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <BarFooter>
                <ButtonAjuda disabled={true} >
                    Ajuda
                </ButtonAjuda>
                <ButtonNovaConsulta onClick={openModal}>
                    Agendar Consulta
                </ButtonNovaConsulta>
            </BarFooter>
        </>
    )
}