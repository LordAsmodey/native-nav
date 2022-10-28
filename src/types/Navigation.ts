import type {
  CompositeNavigationProp,
  NavigatorScreenParams
} from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  ProductScreen: { productId: string }
};

type TabParamList = {
  MainScreen: NavigatorScreenParams<StackParamList>
  ProductScreen: { productId: string }
};

export type ProfileScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabParamList, 'ProductScreen'>,
StackNavigationProp<StackParamList>
>;
