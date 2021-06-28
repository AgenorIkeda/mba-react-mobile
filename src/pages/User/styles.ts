import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    scrolContainer: {
        flex: 1
    },

    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,        
        justifyContent: 'center'
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