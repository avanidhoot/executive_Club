import React from 'react';
import { FlatList, View } from 'react-native';
import { MemberCard } from '../../../../common/components';
import { MARGIN_VALUE } from '../../../../common/constants';

const Executive = (props) => {
    return (
        <FlatList
            data={props.data}
            numColumns={2}
            ItemSeparatorComponent={()=><View style={{width:10}}/>}
            renderItem={({item})=><MemberCard imgVariant={{height: 130, width: 150}} variant={{width: 150, marginLeft:MARGIN_VALUE.TEN, marginTop:MARGIN_VALUE.FIVE }} member={item}/>}
    />
    );
};

export default Executive;
