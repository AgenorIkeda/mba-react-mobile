import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 5,        
        color: 'black',        
        fontSize: 18,
        height: 40,
        marginBottom: 1,
        paddingHorizontal: 10,
        width: Dimensions.get('screen').width - 40,
    },
});