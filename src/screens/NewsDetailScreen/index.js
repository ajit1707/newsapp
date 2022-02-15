import React, { Component } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Keyboard,
} from "react-native";
import styles from "./style";
import { connect } from 'react-redux';
import { fetchUpdatedNewsDataType } from "../../apis";
import images from '../../assests/index.js'
import TextArea from '../../component/TextArea';

class NewsDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      message: '',
      bottomPadding: 0
    };
  }

  componentDidMount() {
    const { navigation } = this.props
    this.setState({ data: this.props.route.params.item });
  }

  renderPinedData(pined, publishedAt) {
    const { newsDataList, updateNewsData } = this.props;
    let details = {};
    if (pined) {
      details = Object.assign({}, this.state.data, { pined: false })
    } else {
      details = Object.assign({}, this.state.data, { pined: true })
    }
    this.setState({ data: details })
    let updatedNewsData = []
    newsDataList.map((item, index) => {
      if (item.publishedAt === publishedAt) {
        updatedNewsData.push(details)
      } else {
        updatedNewsData.push(item)
      }
    })
    updateNewsData(updatedNewsData)
  }

  renderFavouriteData(favourite, publishedAt) {
    const { newsDataList, updateNewsData } = this.props;
    let details = {};
    if (favourite) {
      details = Object.assign({}, this.state.data, { favourite: false })
    } else {
      details = Object.assign({}, this.state.data, { favourite: true })
    }
    this.setState({ data: details })
    let updatedNewsData = []
    newsDataList.map((item, index) => {
      if (item.publishedAt === publishedAt) {
        updatedNewsData.push(details)
      } else {
        updatedNewsData.push(item)
      }
    })
    updateNewsData(updatedNewsData)
  }

  /**
     * Method to accept input values from TextInput as object.
     * @param field
     */
  handleTextChange = field => (text) => {
    const newState = {};
    newState[field] = text;
    this.setState(newState);
  };
  /**
   * Method calls on the input focus to add space on bottom.
   */
  onFocus = () => {
    let bottomPadding = 0;
    if (Platform.OS === 'ios') {
      bottomPadding = (XR || X || XS) ? 90 : 60;
    }
    this.setState({ bottomPadding });
  };
  /**
   * Method calls on the input blur to remove space on bottom.
   */
  onBlur = () => {
    this.setState({ bottomPadding: 0 });
  };

  sendMessage(publishedAt) {
    const { updateNewsData, newsDataList } = this.props;
    const { data } = this.state;
    let msgsList = [];

    data.messagesData.map((item, index) => {
      msgsList.push(item);
    })
    let objs = {
      msg: this.state.message.trim()
    }
    msgsList.push(objs);

    let details = Object.assign({}, this.state.data, { messagesData: msgsList });
    let updatedNewsData = []
    newsDataList.map((item, index) => {
      if (item.publishedAt === publishedAt) {
        updatedNewsData.push(details)
      } else {
        updatedNewsData.push(item)
      }
    })
    Keyboard.dismiss();
    updateNewsData(updatedNewsData);
    this.setState({ message: '', data: details })
  }

  render() {
    const { newsDataList, navigation } = this.props;
    const { data, message, bottomPadding } = this.state;
    return (
      <SafeAreaView style={styles.relativeContainer}>
        <KeyboardAvoidingView
          style={styles.flexContainer}
          behavior={Platform.OS === 'ios' && 'padding'}
          keyboardShouldPersistTaps="always"
          alwaysBounceVertical={false}
        >
          <View style={[styles.flatListContainer, { bottomPadding: bottomPadding }]}>
            <View style={styles.mainContainer}>
              <TouchableOpacity
                style={styles.newsContainerButton}
                onPress={() => this.renderPinedData(data.pined, data.publishedAt)}>
                <Image style={[styles.imgView, { height: 40, width: 40 }]}
                  source={!data.pined ? images.unpined : images.pined}></Image>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.newsContainerButton}
                onPress={() => this.renderFavouriteData(data.favourite, data.publishedAt)}>
                <Image style={styles.imgView}
                  source={!data.favourite ? images.unfavourite : images.favourite}></Image>
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View style={{ borderBottomWidth: 0.75, borderBottomColor: 'grey' }}>
                <Text style={[styles.newsTextStyle, { fontWeight: 'bold' }]}>
                  {data.title}
                </Text>
                <Image
                  source={{ uri: data.urlToImage }}
                  style={styles.newsImgStyle}>
                </Image>
                <Text style={[styles.newsTextStyle], { marginVertical: 20, marginHorizontal: 20, color: '#CBCBCB' }}>
                  {data.description}
                </Text>
              </View>
              <FlatList
                contentContainerStyle={styles.newsListContainer}
                data={data.messagesData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                  return (
                    <View style={styles.newsListView}>
                      <View style={styles.newsContentContainer}>
                        <Image
                          source={images.user}
                          style={styles.msgImgStyle}>
                        </Image>
                        <Text style={styles.newsTextStyle}>
                          {item.msg}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </ScrollView>

          </View>
          <View style={[styles.textBoxContainer, { bottom: bottomPadding }]}>
            <View style={styles.textAreaContainer}>
              <TextArea
                placeholder={'Write your comment here..'}
                value={message}
                maxLength={2000}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onChangeText={this.handleTextChange('message')}
              />
            </View>
            <View style={styles.sendButtonContainer}>
              <TouchableOpacity style={styles.textContainer} onPress={() => this.sendMessage(data.publishedAt)} disabled={message.trim() === ''}>
                <Text
                  style={styles.commentTexttyle}>Comment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    newsDataList: state.newsDataList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewsData: (updatedNewsData) => fetchUpdatedNewsDataType(dispatch, updatedNewsData)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailScreen);
