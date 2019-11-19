import { all } from 'redux-saga/effects';
import { watchLogin,
    watchFetchUserInfo,
    watchFetchStoreData,watchAllMealData,watchMealDetails,
    watchFetchStoreInfoData,watchFetchProductList} from '../sagas/loginSagas';
function* rootSaga() {
    yield all([
        watchLogin(),watchAllMealData(),
        watchMealDetails(),
        watchFetchUserInfo(),
        watchFetchStoreData(),
        watchFetchStoreInfoData(),
        watchFetchProductList()
    ])
}
export default rootSaga