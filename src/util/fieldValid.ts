import { Alert } from 'react-native';

export function fieldValid(value: string, errorMessage: string): boolean {
    const requiredField: string = 'Preenchimento obrigatório';

    if (value.trim().length < 1) {
        Alert.alert(requiredField, errorMessage);
        
        return false;
    }

    return true;
}