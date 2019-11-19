import React, { Component } from 'react';
import {  FlatList,ActivityIndicator,Image,TouchableOpacity,ImageBackground,
    StyleSheet, Text, View,Alert } from 'react-native';
import {connect} from "react-redux";
import * as loginActions from '../actions/loginActions';
import {bindActionCreators} from "redux";
import Card from "../utils/Card";
import styles from './styles';
import {fetchAllMealData} from "../actions/loginActions";
import MealList from "./MealDataList";


 class Home extends Component {
     constructor()
     {
         super();
         this.state={
             mealData:[],
             isLoading:false,
         }
     }
    componentDidMount() {
        this.setState({ isLoading: true })
        this.props.actions.fetchAllMealData(this.onSuccess, this.onError)

    }


     onSuccess = (data) => {

         this.setState({ mealData:data.categories,isLoading: false })
         // const { navigation } = this.props;
         // navigation.navigate('home');
     }
     onError = (error) => {
         this.setState({ isLoading: false });
         Alert.alert('',"Some error in api")


         // console.log(error)

     }






    render() {
        if(this.state.isLoading)
        {
            return (
                <ActivityIndicator size="large" color="#0000ff" />
            )
        }
        return (
            <View style={styles.container}>
                <View style={{alignItems:'center',
                    backgroundColor:'#858d8c',height:60,width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>Home</Text>



                        <Image
                            style={{marginRight:20,width: 40, height: 40}}
                            source={require('../images/cart.png')}
                        />
                    {this.props.cartList && this.props.cartList.length>0 &&
                    <View style={{backgroundColor:'#FFFFFF',height:25,width:25,borderRadius:12.5,borderColor:'#FFFFFF',
                        borderWidth:1,
                        justifyContent:'center',
                        bottom:30,
                        position:'absolute',right:18}}>
                        <Text style={{textAlign:'center'}} >{this.props.cartList.length}</Text>
                    </View>
                    }




                </View>
                
               <MealList mealData={this.state.mealData} navigation={this.props.navigation}/>
            </View>
        );
    }
}




const mapStateToProps = (state) => {
     console.log("SKKSKSKSKKSKSKSKSKSTSTSTSTTTS",state.login.cart)

    return {
        cartList:state.login.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            fetchAllMealData: bindActionCreators(fetchAllMealData, dispatch),

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);