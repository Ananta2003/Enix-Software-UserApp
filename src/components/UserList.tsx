import { View, Text, StyleSheet, Pressable, } from 'react-native';

export default function UserList({ navigation, users }: any) {

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>USERS</Text>
            {users.map((user: any, id: any) => (
                <Pressable key={user.id} onPress={() => navigation.navigate("Profile", { user })}>
                    <Text key={id} style={styles.title}>
                        {user.name}
                    </Text>
                </Pressable>
            ))}
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
    title: {
        padding: 15,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',


    },
    button: {
        marginTop: 20,
        backgroundColor: '#3b82f6',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    heading: {
        fontSize: 30,
        fontWeight: 500,
        paddingBottom: 10,
        color: 'green',
    }
});
