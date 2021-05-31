import React, { Component } from 'react'
import { Text, TouchableOpacity, View,StyleSheet } from 'react-native'

import { connect } from 'react-redux'

export class Home extends Component {
    handlerLogin(){
        if(this.props.isLogin){
            this.props.navigation.navigate('MainMenu')
        }else{
            this.props.navigation.navigate('Login')
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.button} onPress={()=>{this.handlerLogin()}}>
                    <Text style={styles.textBtn}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Register')}}>
                    <Text style={styles.textBtn}>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin:state.LoginReducer.isLogin    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


const styles=StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
      },
      button: {
        padding: 10,
      },
      textBtn: {
        textAlign: "center",
        borderWidth: 3,
        padding: 5,
        marginLeft: 100,
        marginRight: 100,
        borderRadius: 20,
        borderColor: "slateblue",
      },
      img: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
      },
    
      textInput: {
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        padding: 5,
      },
    
      text: {
        fontSize: 20,
        paddingLeft: 5,
      },
    });
    
