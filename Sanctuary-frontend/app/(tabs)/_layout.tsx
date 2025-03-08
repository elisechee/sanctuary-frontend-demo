// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Tabs as ExpoTabs, Tabs } from "expo-router";
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Map from './map';
// import ReportForm from './report-form';
// import SafeWalk from './safe-walk';
// import Profile from './profile';
// import { Ionicons } from "@expo/vector-icons"; // Import icons

// const Tab = createBottomTabNavigator();


// export default function TabLayout() {
//   return (
//     <Tab.Navigator id={undefined}
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         // tabBarIcon: ({ color, size }) => {
//         //   let iconName;

//         //   if (route.name === 'map') {
//         //     iconName = 'map';
//         //   } else if (route.name === 'report-form') {
//         //     iconName = 'report';
//         //   } else if (route.name === 'safe-walk') {
//         //     iconName = 'directions-walk';
//         //   } else if (roaute.name === 'profile') {
//         //     iconName = 'person-outline';
//         //   }

//         //   // You can return any component that you like here!
//         //   return <Icon name={iconName} size={size} color={color} />;
//         // },
//         tabBarActiveTintColor: '#F2E9D8',
//         tabBarInactiveTintColor: '#B0ABA2',
//         tabBarStyle: {
//           backgroundColor: '#184040',
//           borderTopWidth: 0,
//           elevation: 5,
//         },
//       })}
//     >
//       <Tab.Screen name="map" component={Map} options={{ title: "Incident Map" }} />
//       <Tab.Screen name="report-form" component={ReportForm} options={{ title: "Report Form" }} />
//       <Tab.Screen name="safe-walk" component={SafeWalk} options={{ title: "Safe Walk" }} />
//       <Tab.Screen name="profile" component={Profile} options={{ title: "Profile" }} />
//     </Tab.Navigator>
//   );
// }

// // import { Tabs } from "expo-router";
// // import { Ionicons } from "@expo/vector-icons"; // Import icons


// // export default () => {
// //     return (
// //         <Tabs
// //             screenOptions={{
// //                 tabBarStyle: {
// //                     backgroundColor: '#184040',
// //                     height: 100,
// //                     paddingBottom: 50,
// //                     paddingTop: 10,
// //                 },
// //                 tabBarActiveTintColor: '#F2E9D8',
// //                 tabBarInactiveTintColor: '#B0ABA2',
// //                 headerShown: false,
// //                 // tabBarShowLabel: false,
// //             }}>
// //             <Tabs.Screen 
// //                 name="home" 
// //                 options={{
// //                     tabBarIcon: ({color, size}) => (
// //                         <Ionicons name="location-outline" size={30} color={color} style={{ justifyContent: 'center', height: '100%' }}/>
// //                     ),
// //                 }}
// //             />
// //              <Tabs.Screen 
// //                 name="report" 
// //                 options={{
// //                     tabBarIcon: ({color, size}) => (
// //                         <Ionicons name="megaphone-outline" size={30} color={color} />
// //                     ),
// //                 }}
// //             />
// //             <Tabs.Screen 
// //                 name="safewalk" 
// //                 options={{
// //                     tabBarIcon: ({color, size}) => (
// //                         <Ionicons name="walk-outline" size={30} color={color} />
// //                     ),
// //                 }}
// //             />
           
// //         </Tabs>
// //     );
// // };

import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Import icons

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#184040',
                    height: 100,
                    paddingBottom: 50,
                    paddingTop: 10,
                },
                tabBarActiveTintColor: '#F2E9D8',
                tabBarInactiveTintColor: '#B0ABA2',
                headerShown: false,
                tabBarLabelStyle: {
                  marginTop: 5, // Adjust the margin as needed
              },
                // tabBarShowLabel: false,
            }}>
            <Tabs.Screen 
                name="map" 
                options={{
                    title: "Map",
                    tabBarIcon: ({color, size, focused}) => (
                        <Ionicons 
                          name={focused ? "location" : "location-outline"}
                          size={30} color={color} 
                          style={{ justifyContent: 'center', height: '100%' }}/>
                    ),
                }}
            />
             <Tabs.Screen 
                name="report-form" 
                
                options={{
                    title: "Report",
                    tabBarIcon: ({color, size, focused}) => (
                        <Ionicons 
                          name={focused ? "megaphone" : "megaphone-outline" }
                          size={30} 
                          color={color} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="safe-walk" 
                options={{
                    title: "Safe Walk",
                    tabBarIcon: ({color, size, focused}) => (
                        <Ionicons 
                          name={focused ? "walk" : "walk-outline" }
                          size={30} 
                          color={color} />
                    ),
                }}
            />
             <Tabs.Screen 
                name="profile" 
                options={{
                    title: "Profile",
                    tabBarIcon: ({color, size, focused}) => (
                        <Ionicons 
                          name={focused ? "person" : "person-outline" }
                          size={30} 
                          color={color} />
                    ),
                }}
            />
           
        </Tabs>
    );
};