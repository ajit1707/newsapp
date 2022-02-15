import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    backgroundColor: '#4286f4',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  flexOne: {
    flex: 1
  },
  newsContainerButton: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imgView: {
    height: 35,
    width: 35,
    marginHorizontal: 5,
    resizeMode: 'contain',
  },
  newsListContainer: {
    paddingBottom: 10
  },
  newsListView: {
    marginVertical: 10
  },
  newsContentContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center'
  },
  newsImgStyle: {
    height: 200,
    width: 300,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  newsTextStyle: {
    color: 'black',
    fontSize: 17,
    marginHorizontal: 20
  },
  textBoxContainer: {
    flexDirection: 'row',
    width: '100%',
    margin: 10,
    alignItems: 'center',
    flex: 0.8,
    justifyContent: 'center',
  },
  textAreaContainer: {
    width: '70%',
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    borderColor: '#D1D1D6',
    marginLeft: 5,
    borderWidth: 1,
    borderRadius: 3,
  },
  sendButtonContainer: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  textContainer: {
    backgroundColor: '#4286f4',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  commentTexttyle: {
    fontSize: 16,
    color: 'white',
    width: '30%',
    textAlign: 'center',
    height: 40,
    padding: 8
  },
  relativeContainer: {
    position: 'relative',
    flex: 1
  },
  flexContainer: {
    flex: 1
  },
  flatListContainer: {
    flex: 9,
    backgroundColor: '#F4F4F4',
  },
  msgImgStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'
  },
});

export default styles;