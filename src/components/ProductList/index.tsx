import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import { styles } from './styles';
import { ProductItem } from '../ProductItem';
import {useDispatch, useSelector} from "react-redux";
import {LOAD_GOODS} from "../../store/modules/Goods/actions";
import {
  goodsErrorSelector,
  goodsListSelector, goodsLoadingStatusSelector
} from "../../store/modules/Goods/selectors";

export const ProductList = React.memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: LOAD_GOODS});
  }, []);

  const data = useSelector(goodsListSelector);
  const error = useSelector(goodsErrorSelector);
  const isGoodsLoaded = useSelector(goodsLoadingStatusSelector);

  return (
    <SafeAreaView style={styles.container}>
      {error
        ? (<View><Text>ERROR</Text></View>)
        : null
      }
      {isGoodsLoaded
        ? (<View><Text>LOADING...</Text></View>)
        : null
      }
      {!isGoodsLoaded && data.length
        ? (
          <FlatList
            data={data}
            renderItem={({item}) => <ProductItem product={item} />}
            keyExtractor={({id}) => id.toString()}
            style={styles.goodsList}
          />
          )
        : null}
    </SafeAreaView>
  );
});
