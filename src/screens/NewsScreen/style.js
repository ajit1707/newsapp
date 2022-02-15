import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    backgroundColor: '#4286f4',
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  flexOne: {
    flex: 1
  },
  newsContainerButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  newsText: {
    color: '#e60a60',
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  newsListContainer: {
    paddingBottom: 10
  },
  newsListView: {
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  newsContentContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center'
  },
  newsImgStyle: {
    height: 125,
    width: 100,
    borderRadius: 20,
    resizeMode: 'contain'
  },
  newsTextStyle: {
    color: 'black',
    width: 250,
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20
  },
  emptyTextMsg: {
    fontSize: 17,
    color: '#CBCBCB',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 25
  }
});

export default styles;