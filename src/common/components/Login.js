import React, { Component } from 'react';
import { View, FlatList, Image, StatusBar, TouchableOpacity,TextInput } from 'react-native';
import { Text } from 'native-base';
import { MainContainer, PageContainer } from './index';
import {COLORS} from "../constants";
import SplashScreen from "react-native-smart-splash-screen";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { programs: [], email:"Email Address",pass:'Password' }
    }
    componentDidMount () {
        // SplashScreen.close(SplashScreen.animationType.scale, 850, 500)
        SplashScreen.close({
            animationType: SplashScreen.animationType.fade,
            duration: 550,
            delay: 500,
            height:100,
            width:100
        })
    }
    render() {
        return (
            <React.Fragment>
                <MainContainer>
                    <StatusBar hidden={false} backgroundColor={COLORS.DARK_BLUE}/>
                    <PageContainer>
                        <View style={{marginTop:20}}>
                            <View style={{alignSelf: 'center'}}>
                                <Image style={{height:150,width:200,resizeMode:'center', marginTop:35}} source={require('../image1.png')}/>
                            </View>
                            <View style={{alignSelf: 'center'}}>
                                <View style={{flexWrap: 'wrap',flexDirection:'row',height:70}}>
                                    <FontAwesomeIcon size={20} color={COLORS.GREY} name={'user'} />
                                    <View style={{width:10}}/>
                                    <TextInput
                                        onChangeText={(email) => this.setState({email})}
                                        value={this.state.email}
                                    />
                                </View>
                                <View style={{flexWrap: 'wrap',flexDirection:'row'}}>
                                    <FontAwesomeIcon size={20} color={COLORS.GREY} name={'unlock-alt'} />
                                    <View style={{width:10}}/>
                                    <TextInput
                                        onChangeText={(pass) => this.setState({pass})}
                                        value={this.state.pass}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity
                                style={{ marginRight:40,
                                    marginLeft:40,
                                    marginTop:15,
                                    paddingTop:10,
                                    paddingBottom:10,
                                    backgroundColor:COLORS.DARK_BLUE,
                                    borderRadius:20,
                                    borderWidth: 1,
                                    borderColor: '#fff'}}
                                onPress={()=>this.props.navigation.navigate('TABBAR') }
                                underlayColor='#fff'>
                                <Text style={{  color:'#fff',
                                    textAlign:'center',
                                    paddingLeft : 10,
                                    paddingRight : 10}}>LOGIN</Text>
                            </TouchableOpacity>
                            <View style={{alignSelf: 'center', marginTop:80}}>
                                <Text style={{color: COLORS.GREY}}>Forgot Password?</Text>
                            </View>
                            <View style={{alignSelf: 'center', marginTop:10}}>
                                <Text style={{color: COLORS.DARK_BLUE}}>New User</Text>
                            </View>
                        </View>
                    </PageContainer>
                </MainContainer>
            </React.Fragment>
        );
    }
}



