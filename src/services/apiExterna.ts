import axios from '../client/index';
import User from '../models/user';
import Product from '../models/product';

export async function postUserRegister(user: User) : Promise<any> {

    try {
        console.log(user);
        
        const response = await axios.post('/user/customer/add', user);
        
        return response.data;
    } catch (error) {
        console.error('Error during  user register:');        
        console.error(error);

        return null;
    }
}

export async function postUserAuth(login: string, password: string): Promise<any> {

    try {
        const response = await axios.post('/user/login', { login, password });

        return response.data;
    } catch (error) {
        console.error('Error during user authentication:');
        console.error(error);

        return null;
    }
}

export async function getProductsList(): Promise<Product[]> {

    try {
        const response = await axios.get('/product/list');

        return response.data;
    } catch (error) {
        console.error('Error during product list:');        
        console.error(error);

        return [];
    }
}