import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Left, Body, Right } from 'native-base';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DIMENSION_VALUE, COLORS, TAB } from '../../common/constants'

const headerHeight = DIMENSION_VALUE.HEIGHT/10;

const Header = (props) => {
    let leftButton, rightButton ;
    leftButton = props.left ? <TouchableOpacity onPress={()=>props.onLeftPress()}>
                                <FeatherIcon style={{fontWeight:'bold'}} size={20} color={COLORS.DARK_BLUE} name={'align-left'}/>
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
                <Text style={{fontSize:18,color:COLORS.DARK_BLUE}}>
                    {props.title}
                </Text>
            </Body>    
            <Right>
                {rightButton}
            </Right>
        </View>
    );
};

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