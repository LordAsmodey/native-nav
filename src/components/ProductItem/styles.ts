import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20
  },
  image: {
    width: 210,
    height: 210,
    borderRadius: 12,
  },
  price: {
    fontSize: 24,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priseAndButton: {
    flex: 1,
    justifyContent: 'space-around',
    marginLeft: 15,
  }
});
