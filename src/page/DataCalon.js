import React, { Component } from 'react'
import { View, Text,FlatList, Image, TouchableOpacity,StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios';

export class HistoriLaporan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFlatList:{}
        }
    }

    componentDidMount() {
        // if(this.props.isLogin){
        //     this.props.navigation.navigate('Home')
        // }else{
            this.getData()
        // }
    }

    getData(){
        axios.get('http://192.168.100.88:8080/user/')
        .then((response)=>{
            let data =response.data
            console.log(data)
            this.setState({dataFlatList:data})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.dataFlatList}
                    keyExtractor={item=>parseInt(item.id)}
                    renderItem={({item})=>(
                      <TouchableOpacity style={styles.button}> 
                        <View>
                            <Image style={{width:100,height:100}}
                                source={{uri:`http://192.168.100.88:8080/user/image/${item.image}`}}
                            />
                            <View style={{flexDirection:"column",alignSelf:"center"}}>
                                <Text style={styles.text}>Nama : {item.name}</Text>
                                <Text style={styles.text}>Umur : {item.age}</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.LoginReducer.isLogin
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoriLaporan)

const styles = StyleSheet.create({
  viewStyle:{
      margin:20,
  },
  container: {
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      margin:20,
      padding: 10,
      borderWidth: 1,
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
  
