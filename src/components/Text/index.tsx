import React from "react";
import { Text } from 'react-native';

import styles from './styles';

interface Props {
    label: string;
};

export default function TextField(props: Props) {
    const { label } = props;

    return (
        <>
            <Text style={styles.label}>
                { label }:
            </Text>        
        </>        
    );
}