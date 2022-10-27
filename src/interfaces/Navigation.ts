import type { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  Profile: { userId: string };
};

type TabParamList = {
  Home: NavigatorScreenParams<StackParamList>;
  Profile: { userId: string };
};

export type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Profile'>,
  StackNavigationProp<StackParamList>
  >;
