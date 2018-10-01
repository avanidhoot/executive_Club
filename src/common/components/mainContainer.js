import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../constants';
import { MARGIN_VALUE } from '../constants/'

export const MainContainer = (props) => {
    return (
        <View style={{flex: 1, backgroundColor:COLORS.BACKGROUND_COLOR}}>
            {props.children}
        </View>
    );
};

export const PageContainer = (props) => {
    return(
        <View style={{ marginHorizontal: MARGIN_VALUE.TEN}}>
            {props.children}
        </View>
    )
}