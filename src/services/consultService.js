import { postRequest } from './request';


class ConsultService {

    postConsult = data =>
        new Promise((resolve, reject) => {
            postRequest(`/consultations`, data, resolve, reject);
        });
}

export default new ConsultService();