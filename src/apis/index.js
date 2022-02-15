import NetInfo from "@react-native-community/netinfo";
import axios from "axios";
import { saveNewsTypeData } from '../redux/actions';

const fetchNewsDataType = (dispatch) => {
	NetInfo.fetch().then(state => {
		if (state.isConnected) {
			axios({
				method: 'GET',
				url: `https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=0cd29a0cecfe4fd0a1e58c68db397625`,
				headers: {
					'Content-Type': 'application/json',
				}
			}).then((response) => {
				let updatedNewsData = []
				response.data.articles.map((item,index)=>{
					let newsData = Object.assign({}, item,{
						pined: false,
						favourite: false,
						messagesData: []
					})
					updatedNewsData.push(newsData)
				})
				saveNewsTypeData(dispatch, updatedNewsData);
			}).catch((error) => {
				console.error(error);
			});			
		} else {
			Toast.show("No Internet Connection..Please check internet connection!!")
		}
	});
};

const fetchUpdatedNewsDataType = (dispatch, updatedNewsData) => {
	saveNewsTypeData(dispatch, updatedNewsData);
};


export { fetchNewsDataType, fetchUpdatedNewsDataType }