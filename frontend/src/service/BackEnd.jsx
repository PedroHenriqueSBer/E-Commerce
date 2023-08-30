import axios from 'axios'
let ApiUrl = 'http://127.0.0.1:5000'

export let postBlob = async img  =>{
    try {
        const formData = new FormData();
        formData.append('file', img);

        const response = await axios.post(`${ApiUrl}/api/blob`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        });

        console.log('Resposta do servidor:', response.data);
    } catch (error) {
        console.error('Erro ao fazer o upload:', error);
    }
}