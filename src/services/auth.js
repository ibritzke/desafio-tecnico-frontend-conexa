import axiosIntegration from './axiosAuth';

class AuthService {

    login = async (email, password) =>
        new Promise((resolve, reject) => {
            const dataPost = {
                email: email,
                password: password,
            };

            axiosIntegration.post('/login', dataPost
            )
                .then(response => {
                    const { name, token } = response.data;
                    localStorage.setItem('token', token);
                    localStorage.setItem('name', name);
                    resolve({name, token});
                })
                .catch(error => {
                    const { status } = error.response;
                    if (status === 500) {
                        reject('API não instalada corretamente.');
                    }
                    if (status === 404) {
                        reject('Configuração de caminho da API incorreta.');
                    }
                    reject(error.response.data);
                });



        });


}
export default new AuthService();
