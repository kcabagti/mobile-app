import 'react-native-gesture-handler';
import * as React from 'react';

//Navigation Dependencies
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator }  from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import ProfileScreen from './screens/ProfileScreen';

// import Sidebar from './components/navigation/SideBar';

//Vars
const PlaceholderImage = require('./assets/images/background-image.png');
const image = {uri: 'https://www.uic.edu.ph/wp-content/uploads/2014/11/NIY_0345.jpg'};

//Initialize Navigation
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   {/* Rest of your app code */}
    //   <Stack.Navigator initialRouteName='Login'>
    //     <Stack.Screen name='Login' component={ LoginScreen } options={{ title: 'Login' }} />
    //     <Stack.Screen name='Dashboard' component={ DashboardScreen } options={{ title: 'Dashboard' }} />
        
    //   </Stack.Navigator> 
    // </NavigationContainer>
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;