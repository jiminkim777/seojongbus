import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorite from '../screens/Favorite';
import Bus from '../screens/Bus/Bus';
import BusStation from '../screens/BusStation';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import { Screen, screensEnabled } from 'react-native-screens';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import React, { useEffect, useLayoutEffect } from 'react';

//네비게이션 바텀 탭바 생성
const Tab = createBottomTabNavigator();

//route에서 바텀탭의 인덱스를 받아옴, 없을시 favorite 표시
function getHeaderName(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Favorite';

  switch (routeName) {
    case 'Favorite':
      return 'Favorite';
    case 'Bus':
      return 'Bus';
    case 'BusStation':
      return 'BusStation';
  }
}

// route?.state?.routeNames[route.state.index] || 'favorite';

export default function Tabs({ navigation, route }) {
  //console.log(route);

  //route 상태가 변경될때마다 헤더네임 변경
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: getHeaderName(route),
    });
  }, [navigation, route]);

  return (
    // 네비게이션 탭바 설정
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
          if (route.name === 'Favorite') {
            iconName += 'star';
          } else if (route.name === 'Bus') {
            iconName += 'bus';
          } else if (route.name === 'BusStation') {
            iconName += 'pin';
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? 'white' : 'grey'}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        // showLabel: false,
        style: {
          backgroundColor: 'skyblue',
          borderTopColor: 'skyblue',
          height: 90,
        },
        labelStyle: { fontSize: 16 },
        activeTintColor: 'white',
      }}
    >
      {/* 1번 탭 */}
      <Tab.Screen name="Favorite" component={Favorite} />
      {/* 2번 탭 */}
      <Tab.Screen name="Bus" component={Bus} />
      {/* 3번 탭 */}
      <Tab.Screen name="BusStation" component={BusStation} />
    </Tab.Navigator>
  );
}
