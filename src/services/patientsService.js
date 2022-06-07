import { getRequest } from './request';


class PatientsService {

    getPatients = () =>
        new Promise((resolve, reject) => {
            getRequest(`/consultations?_expand=patient`, resolve, reject);
        });
}

export default new PatientsService();