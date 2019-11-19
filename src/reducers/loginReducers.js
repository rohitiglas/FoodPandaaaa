import * as types from '../actions/types';
import appState from '../contants/initialState';
let categoryDataArray=[]

const loginReducer = (state = appState.login, action) => {

    switch (action.type) {
        case types.SET_USER_INFO:
            return { ...state, ...{ userInfo: action.data } }

        case types.SET_ALL_MEAL_DATA:
            let myArrayData=action.data.categories

            let categoryData = myArrayData.map(function(person) {
                return Object.assign(person, {"quantity":0})


            });

            return { ...state,  allMealData:categoryData }

        case types.SET_ITEMS_TO_CART:

            let sameItem=false;
            categoryDataArray = state.allMealData.map(function(person) {
                if(person.idCategory===action.data.idCategory)
                return action.data;
                return person
            });

            let cart =state.cart?state.cart:[];
            let currentItemObject=action.data;
            console.log('firstttttttttttttttttttttt cart' ,cart)
            console.log('firstttttttttttttttttttttt currentItemObject' ,currentItemObject)

            let isAvailableInCart=cart.findIndex(x => x.idCategory ===currentItemObject.idCategory);
            if (isAvailableInCart===-1){
                console.log('firstttttttttttttttttttttt ' ,isAvailableInCart);
                currentItemObject['tempqty']=1;
                cart.push(currentItemObject);
                return { ...state, allMealData:categoryDataArray, cart:cart }
            }else{
                console.log('firstttttttttttttttttttttt lllllllll')

                let availableItemData=cart[isAvailableInCart];
                availableItemData.tempqty=availableItemData.tempqty+1;
                cart[isAvailableInCart]=availableItemData;
                return { ...state, allMealData:categoryDataArray, cart:cart }
            }

            // categoryDataArray = state.allMealData.map(function(person) {
            //     if(person.idCategory===action.data.idCategory)
            //     return action.data;
            //     return person
            // });
            // let filterCartData = state.cart.filter(function(person) {
            //
            //
            //     return person.idCategory!==action.data.idCategory;
            //
            //
            // });
            // return { ...state, allMealData:categoryDataArray, cart:[filterCartData,action.data] }

            case types.REMOVE_ITEMS_TO_CART:


            categoryDataArray = state.allMealData.map(function(person) {
                if(person.idCategory===action.data.idCategory)
                return action.data;
                return person


            });

                let filterCart = state.cart.filter(function(person) {


                    return person.quantity!==0;


                });
            return { ...state, allMealData:categoryDataArray, cart:filterCart }




        default:return state


    }

}
export default loginReducer