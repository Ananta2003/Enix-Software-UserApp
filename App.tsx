import React, { useEffect, useState } from 'react';
import UserList from './src/components/UserList';
import UserDetails from './src/components/UserDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserSummary } from './types/User';


export default function App() {
  
  const Stack = createNativeStackNavigator();

  const [users, setUsers] = useState<UserSummary[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        const simplified: UserSummary[] = data.map((user: any) => ({
          id: user.id,
          name: user.username,
          email: user.email,
          phone: user.phone,
    
        }));

        setUsers(simplified);
      })
      .catch((err) => {
        console.error('Error fetching users:', err);
      });
  }, []);

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home">
          {props => <UserList {...props} users={users} />}
        </Stack.Screen>

        {/* <Stack.Screen name='Profile'>
          {props => <UserDetails {...props} users={users} />}
        </Stack.Screen> */}

        <Stack.Screen name='Profile' component={UserDetails} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
