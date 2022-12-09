import React, {useEffect} from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { ProductItem } from '../ProductItem';
import {useDispatch, useSelector} from "react-redux";
import {LOAD_GOODS} from "../../store/modules/Goods/actions";
import {goodsListSelector} from "../../store/modules/Goods/selectors";

export const ProductList = React.memo(() => {
  const data = useSelector(goodsListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: LOAD_GOODS});
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <ProductItem product={item} />}
        keyExtractor={({id}) => id.toString()}
      />
    </SafeAreaView>
  );
});
