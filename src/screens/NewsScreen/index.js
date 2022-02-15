import React, { Component } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./style";
import { connect } from 'react-redux';
import { fetchNewsDataType } from "../../apis";

class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNews: 'All News',
      newsData: []
    };
  }

  componentDidMount() {
    const { getNewsData } = this.props
    getNewsData();
  }

  navigatetoNewsDetailScreen = (item) => {
    const { navigation } = this.props;
    navigation.navigate('NewsDetailScreen', { item });
  };

  renderNewsList = (newsDataList) => {
    let updateNewsDataList = newsDataList;
    if (this.state.currentNews == 'All News') {
      updateNewsDataList = newsDataList;
    } else if (this.state.currentNews == 'Pined News') {
      let newDataList = [];
      newsDataList.map((item, index) => {
        if (item.pined) {
          newDataList.push(item);
        }
      })
      updateNewsDataList = newDataList
    } else {
      let newDataList = [];
      newsDataList.map((item, index) => {
        if (item.favourite) {
          newDataList.push(item);
        }
      })
      updateNewsDataList = newDataList
    }
    return (
      <View style={styles.flexOne}>
        {updateNewsDataList.length > 0 ? <FlatList
          contentContainerStyle={styles.newsListContainer}
          data={updateNewsDataList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.newsListView}>
                <TouchableOpacity
                  style={styles.newsContentContainer}
                  onPress={() => this.navigatetoNewsDetailScreen(item)}>
                  <Image
                    source={{ uri: item.urlToImage }}
                    style={styles.newsImgStyle}>
                  </Image>
                  <Text style={styles.newsTextStyle}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        /> : <View><Text style={styles.emptyTextMsg}>No Data Found!!</Text></View>}
      </View>
    );
  };

  renderNewsButtons = (text) => {
    return (
      <TouchableOpacity
        style={styles.newsContainerButton}
        onPress={() => this.setState({ currentNews: text })}>
        <Text style={styles.newsText}>{text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { newsDataList } = this.props;
    return (
      <View style={styles.flexOne}>
        <View style={styles.mainContainer}>
          {this.renderNewsButtons('All News')}
          {this.renderNewsButtons('Pined News')}
          {this.renderNewsButtons('Favourite News')}
        </View>
        {newsDataList.length > 0 && <View style={styles.flexOne}>
          {this.renderNewsList(newsDataList)}
        </View>}

      </View>
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
    getNewsData: () => fetchNewsDataType(dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
