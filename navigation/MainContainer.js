import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome,faList,faGear, faClock } from '@fortawesome/free-solid-svg-icons';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import HourScreen from './screens/HoursScreen';

//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const TimeName = "Hours";

// COLOR SETTING
const BLUEDARK = "#699cd3";
const BLUELIGHT = "#a5bfe4";
const WHITE = "#FFFFFF";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              return <FontAwesomeIcon icon={faHome} size={25} color={BLUEDARK} />;

            } else if (rn === detailsName) {
              return <FontAwesomeIcon icon={faList} size={25} color={BLUEDARK} />;

            } else if (rn === settingsName) {
              return <FontAwesomeIcon icon={faGear} size={25} color={BLUEDARK} />;
              
            } else if (rn === TimeName) {
              return <FontAwesomeIcon icon={faClock} size={25} color={BLUEDARK} />;
            }
          },
        })}>
        <Tab.Screen name={homeName} component={HomeScreen} options={{ 
          headerTitle: (props) => ( // App Logo
            <Image
              style={{ width: 200, height: 100, marginLeft: 90}}
              source={require('../images/LogoFB.png')}
              resizeMode='contain'
            />
          ),
          headerTitleStyle: {},
        }}/>
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        <Tab.Screen name={TimeName} component={HourScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;