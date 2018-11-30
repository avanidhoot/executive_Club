import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Left, Body, Right } from 'native-base';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DIMENSION_VALUE, COLORS, TAB, BUTTON_TYPE } from '../../common/constants'
import {MARGIN_VALUE} from "../constants";

const headerHeight = DIMENSION_VALUE.HEIGHT/10;

const Header = (props) => {
    let leftButton, rightButton ;
    leftButton = props.left ? <TouchableOpacity onPress={()=>props.onLeftPress()}>
                                {LeftIcon(props.leftButtonType)}
                              </TouchableOpacity>                                
                            : null;
    rightButton = props.right ?  <TouchableOpacity onPress={()=>props.onRightPress()}>
                                    {RigtIcon(props.rightButtonType)}
                                </TouchableOpacity>
                               : null;
        
    return (
        <View style={{flexDirection: 'row',height: headerHeight,backgroundColor:COLORS.DARK_BLUE}}>
            <Left style={{marginLeft: MARGIN_VALUE.TEN, color:COLORS.WHITE}}>
                {leftButton}
            </Left>
            <Body>
                <Text style={{fontSize:16,color:COLORS.WHITE,fontWeight:'bold'}}>
                    {props.title}
                </Text>
            </Body>    
            <Right  style={{marginRight: MARGIN_VALUE.TEN, color:COLORS.WHITE}}>
                {rightButton}
            </Right>
        </View>
    );
};

function LeftIcon (type='') {
    switch(type){
        case BUTTON_TYPE.BACK:
            return <FeatherIcon style={{fontWeight:'bold'}} size={20} color={COLORS.WHITE} name={'arrow-left'}/>
        case BUTTON_TYPE.EXPAND:
            return <FeatherIcon style={{fontWeight:'bold'}} size={20} color={COLORS.WHITE} name={'align-left'}/>
    }
}

function RigtIcon (type='') {
    switch(type) {
        case BUTTON_TYPE.DOTS:
            return <MaterialCommunityIcons size={20} color={COLORS.WHITE} name={'dots-vertical'}/>
        // case TAB.EVENTS:
        //     return <MaterialCommunityIcons size={20} color={COLORS.WHITE} name={'dots-vertical'}/>
        case BUTTON_TYPE.MESSAGE:
            return <MaterialCommunityIcons size={20} color={COLORS.WHITE} name={'message-processing'}/>
        default :
        return null
    }
}
// message-processing

export default Header;