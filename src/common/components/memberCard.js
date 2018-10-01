import React from 'react';
import { View, Image, Text } from 'react-native';
import { COLORS } from '../constants'

const MemberCard = (props) => {
    return (
    <View style={{ height: 200, width: 200, backgroundColor: COLORS.WHITE, ...props.variant}}>
        <Image style={{height:150,width:200,...props.imgVariant}} source={{uri:props.member.img_url}}/>
        <View style={{padding:5}}>
            <Text style={{color: COLORS.DARK_BLUE}}>{props.member.name}</Text>
            <Text style={{color: COLORS.DARK_BLUE, fontSize: 10}}>{"Lorem Ipsum is simply dummy text of the printing..."}</Text>
        </View>
    </View>        
    );
};

export default MemberCard;