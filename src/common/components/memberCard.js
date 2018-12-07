import React from 'react';
import { View, Image, Text } from 'react-native';
import { COLORS } from '../constants'

const MemberCard = (props) => {
    return (
    <View style={{ height: 200, width: 250, backgroundColor: COLORS.WHITE, ...props.variant}}>
        <View style ={{width:250}}>
            <Image style={{...props.imgVariant}} source={{uri:props.member.img_url}}/>
        </View>
            <View style={{padding:5}}>
            <Text>{props.member.name}</Text>
            <Text style={{color: COLORS.GREY, fontSize: 10}}>{"Lorem Ipsumng..."}</Text>
        </View>
    </View>        
    );
};

export default MemberCard;