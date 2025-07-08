import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';


export default function UserDetails() {

    const route = useRoute();
    const { user } = route.params as { user: any };

    return (
        <View style={styles.container}>
            <Text style={styles.head}>Details</Text>

            <Text style={styles.heading}>Id:{user.id}</Text>
            <Text style={styles.heading}>Name:{user.name}</Text>
            <Text style={styles.heading}>Phone:{user.phone}</Text>
            <Text style={styles.heading}>Email:{user.email}</Text>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },

    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        paddingBottom: 12,
        color: '#1a1a1a',
        textAlign: 'center',
        letterSpacing: 0.5,
    },

    head:{
        fontSize: 60,
        fontWeight: 500,
        paddingBottom: 10,
        color: 'green',
    }
});
