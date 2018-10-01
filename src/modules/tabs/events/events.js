import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import { MainContainer, PageContainer, PageHeader } from '../../../common/components';
import { TAB, BUTTON_TYPE, MARGIN_VALUE, COLORS } from '../../../common/constants';
import { Calendar } from 'react-native-calendars';
import { Content } from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

const Events = (props) => {
    return (
        <MainContainer>
            <StatusBar hidden={true} />
            <PageContainer>
                <PageHeader type={TAB.EVENTS} 
                    title={TAB.EVENTS} 
                    right={true} 
                    left={true} 
                    leftButtonType={BUTTON_TYPE.EXPAND}
                    onLeftPress={()=>console.log("programs left button pressed")}/>
            </PageContainer>
            <Content style={{marginHorizontal: MARGIN_VALUE.BASE_VALUE}}>
                <Calendar style={{height: 350}}
                    markedDates={{ "2018-09-13": { selected: true } }}
                    minDate={new Date()}   
                />
                <EventList/>
            </Content>
        </MainContainer>
    );
};

const EventList = (props) =>{
    return(
        <View style={{marginVertical:MARGIN_VALUE.BASE_VALUE}}>
            <EventCard/>
        </View>
    )
}

const EventCard = (props) => {
    return(
        <View style={{flexDirection:'row', height: 60}}>
            <View style={{flex: 3, backgroundColor: COLORS.LIGHT_BLUE, flexDirection:'row'}}>
                <View style={{flex:2, justifyContent:'center',alignItems:'center'}}>
                    <FontAwesomeIcon name="clock-o" size={20} color={COLORS.DARK_BLUE}/>                    
                </View>
                <View style={{flex: 5}}>
                    <View style={{flex: 1}}><Text style={{color: COLORS.DARK_BLUE}} >11:00 AM</Text></View>
                    <View style={{flex: 1}}><Text style={{color: COLORS.DARK_BLUE}} >04:00 PM</Text></View>
                </View>
            </View>
            <View style={{flex:7, marginLeft:MARGIN_VALUE.TEN, borderColor:COLORS.LIGHT_BLUE, borderWidth:1, backgroundColor: COLORS.WHITE}}>
                    <Text style={{paddingHorizontal: MARGIN_VALUE.TEN ,color: COLORS.DARK_BLUE, fontSize:16}}>Event Title</Text>
                    <Text style={{paddingHorizontal: MARGIN_VALUE.TEN}} EventList={'tail'} numberOfLines={2} >Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
            </View>
        </View>
    )
}

export default Events;