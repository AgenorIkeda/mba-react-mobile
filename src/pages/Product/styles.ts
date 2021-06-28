import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',        
        flex: 1,
        paddingTop: 10
    },

    block: {
        backgroundColor: 'yellow',        
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        padding: 10,        
        width: Dimensions.get('window').width - 10
    },    

    title: {
        color: 'green',
        fontSize:18,        
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 5
    },
    
    section: {
        flexDirection: 'row',
    },

    bold: {
        color: 'black',
        fontWeight: 'bold',
    },

    logoutButton: {
        marginRight: 10
    }
});