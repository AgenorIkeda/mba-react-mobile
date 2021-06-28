import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        height: Dimensions.get('window').width - 40,
        justifyContent: 'center',
        width: Dimensions.get('window').width
    },

    logo: {
        marginBottom: 22
    },

    button: {
        backgroundColor: 'green',
        borderRadius: 25,
        marginTop: 12,        
        paddingVertical: 12,
        paddingHorizontal: 12,
        width: 120     
    },

    text: {
        alignSelf: 'center',
        color: 'yellow',
        fontSize: 14,        
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});