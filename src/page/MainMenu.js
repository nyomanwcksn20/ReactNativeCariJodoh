import React, { Component } from 'react'
import { View, Text, TouchableOpacity,StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LoginAction } from '../Redux/Action'

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state={
            counter:1,
        }
    }

    componentDidMount(){
        if(!this.props.dataRedux.isLogin){
            this.props.navigation.navigate('Home')
        }
    }

    handleSignOut(){
        alert("Anda berhasil sign out")
        this.props.LoginAction(false,"isLogin")
        this.props.navigation.navigate("Home")
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('DataCalon')}}>
                    <Text style={styles.textBtn}>Data Calon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Pilih')}}>
                    <Text style={styles.textBtn}>Pilih Calon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.handleSignOut()}}>
                    <Text style={styles.textBtn}>Sign Out</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataRedux:state.LoginReducer
})

const mapDispatchToProps = {
    LoginAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)

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
    
