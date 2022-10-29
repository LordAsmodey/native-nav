import type {
  CompositeNavigationProp,
  NavigatorScreenParams
} from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Product } from './Product';

type StackParamList = {
  ProductScreen: { product: Product }
};

type TabParamList = {
  MainScreen: NavigatorScreenParams<StackParamList>
  ProductScreen: { product: Product }
};

export type ProfileScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabParamList, 'ProductScreen'>,
StackNavigationProp<StackParamList>
>;
