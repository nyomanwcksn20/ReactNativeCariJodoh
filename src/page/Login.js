import axios from 'axios'
import React, { Component } from 'react'
import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { LoginAction } from '../Redux/Action'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state={
            name:"",
            phone:""
        }
    }

    handleLogin(){
        axios.get('http://192.168.100.88:8080/user/login/',{
            params:{
                name:this.state.name,
                phone:this.state.phone,
            }
        })
        .then((response) =>{
            let data=response.data;
            if(data !== ""){
                this.props.LoginAction(true,"isLogin")
                this.props.LoginAction(data,"dataUser")
                alert("Login berhasil")
                this.props.navigation.navigate('MainMenu')
            }else{
                alert("login gagal")
                this.props.LoginAction(false,"isLogin")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.text}> Name </Text>
                <TextInput style={styles.textInput} placeholder="masukan nama" onChangeText={(value)=>{this.setState({name:value})}}/>
                <Text style={styles.text}> Phone </Text>
                <TextInput style={styles.textInput} placeholder="masukan phone" onChangeText={(value)=>{this.setState({phone:value})}}/>
                <TouchableOpacity style={styles.button} onPress={()=>{this.handleLogin()}}><Text style={styles.textBtn}>Login</Text></TouchableOpacity>

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataMapping:state.LoginReducer
})

const mapDispatchToProps = {
    LoginAction   
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    viewStyle:{
        margin:20,
    },
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
    
