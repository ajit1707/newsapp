import { NEWS_DATA } from "./actions";

let dataState = {
	newsDataList: []
};

const MainReducer = (state = dataState, action) => {
	switch (action.type) {
		
		case NEWS_DATA:
			let newsDataList = action.data;
			dataState.newsDataList = newsDataList
			return { ...dataState, newsDataList: newsDataList };

		default:
			return dataState;
	}
};

export default MainReducer;
