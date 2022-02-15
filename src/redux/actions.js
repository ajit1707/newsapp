export const NEWS_DATA = 'NEWS_DATA';

export const saveNewsTypeData = (dispatch, newsDataList) => {
	dispatch({ type: NEWS_DATA, data: newsDataList });
}







