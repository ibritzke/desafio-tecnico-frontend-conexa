import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer"
import { BoxFrame, Container, TitleConsult, BoxResult, Result, DataHora, Nome, ButtonAtender, Row, Col, Consultas } from "./styles"
import patientsService from "../../services/patientsService"
import * as moment from "moment";

export const Consult = () => {
    const [findResult, setFindResult] = useState([]);


    useEffect(() => {
        const getResult = async () => {
            const patients = await patientsService.getPatients()
            setFindResult(patients)
        }
        getResult()
    }, [])


    return (
        <Container>
            <BoxFrame>
                <TitleConsult>
                    <h1>Consultas</h1>
                </TitleConsult>
            </BoxFrame>
            <BoxResult>
                <Result>
                    <Consultas>{findResult.length === 1 ? findResult.length + " consulta agendada" : findResult.length >= 2 ? findResult.length + " consultas agendadas" : null}</Consultas>
                    {findResult !== undefined
                        ?
                        (findResult.map((find, index) => {
                            return (
                                <><Row>
                                    <Col>
                                        <Nome>{find.patient.first_name} {find.patient.last_name} </Nome>
                                        <DataHora>{moment(find.date).format("DD/MM/YYYY")} às {moment(find.date).format("HH:mm")}</DataHora>
                                    </Col>
                                    <Col>
                                        <ButtonAtender>Atender</ButtonAtender>
                                    </Col>
                                </Row>
                                </>
                            )
                        })
                        )

                        : (<>Sem Resultado</>)}
                </Result>
            </BoxResult>
            <Footer />
        </Container>
    )
}