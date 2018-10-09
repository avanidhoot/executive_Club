import React from 'react';
import { View, TouchableOpacity, Text, Platform } from 'react-native';
import { Left, Body, Right } from 'native-base';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DIMENSION_VALUE, COLORS, TAB, BUTTON_TYPE } from '../../common/constants'

const headerHeight = DIMENSION_VALUE.HEIGHT/10;

const Header = (props) => {
    let leftButton, rightButton ;
    leftButton = props.left ? <TouchableOpacity onPress={()=>props.onLeftPress()}>
                                {LeftIcon(props.leftButtonType)}
                              </TouchableOpacity>                                
                            : null;
    rightButton = props.right ?  <TouchableOpacity onPress={()=>onRightPress()}>                                    
                                    {RigtIcon(props.type)}
                                </TouchableOpacity>
                               : null;
        
    return (
        <View style={{flexDirection: 'row',height: headerHeight}}>
            <Left> 
                {leftButton}
            </Left>
            <Body>
                <Text style={{fontSize:16,color:COLORS.DARK_BLUE}}>
                    {props.title}
                </Text>
            </Body>    
            <Right>
                {rightButton}
            </Right>
        </View>
    );
};

function LeftIcon (type='') {
    switch(type){
        case BUTTON_TYPE.BACK:
            return Platform.OS == 'ios' ? <EntypoIcons style={{fontWeight:'bold'}} size={20} color={COLORS.DARK_BLUE} name={'chevron-left'}/> : <FeatherIcon style={{fontWeight:'bold'}} size={20} color={COLORS.DARK_BLUE} name={'arrow-left'}/>
        case BUTTON_TYPE.EXPAND:
            return <FeatherIcon style={{fontWeight:'bold'}} size={20} color={COLORS.DARK_BLUE} name={'align-left'}/>
    }
}

function RigtIcon (type='') {
    switch(type) {
        case TAB.EVENTS:
            return <MaterialCommunityIcons size={20} color={COLORS.DARK_BLUE} name={'dots-vertical'}/>
        case TAB.MEMBERS:
            return <MaterialCommunityIcons size={20} color={COLORS.DARK_BLUE} name={'message-processing'}/>
        default :
        return null
    }
}
// message-processing

export default Header;