import React from 'react';
import {StatusBar, View, Text, Image} from 'react-native';
import { MainContainer, PageContainer, PageHeader } from '../../../common/components';
import { TAB, BUTTON_TYPE, MARGIN_VALUE, COLORS } from '../../../common/constants';
import { Calendar } from 'react-native-calendars';
import { Content } from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

const Events = (props) => {
    return (
        <MainContainer>
            <StatusBar hidden={false} backgroundColor={COLORS.DARK_BLUE} />
            <PageContainer>
                <PageHeader type={TAB.EVENTS} 
                    title={TAB.EVENTS} 
                    right={true} 
                    left={true} 
                    leftButtonType={BUTTON_TYPE.EXPAND}
                    rightButtonType={BUTTON_TYPE.DOTS}
                    onLeftPress={()=>console.log("programs left button pressed")}
                    onRightPress={()=>console.log("programs right button pressed")}
                />
            </PageContainer>
            <Content style={{marginHorizontal: MARGIN_VALUE.BASE_VALUE}}>
                <Calendar style={{height: 350}}
                          markedDates={{
                              "2018-09-13": { selected: true,selectedColor:COLORS.DARK_BLUE},
                              "2018-11-19": { selected: true,selectedColor:COLORS.DARK_BLUE},
                              "2018-12-10":{ marked: true,dotColor: COLORS.DARK_BLUE},
                              "2018-12-20":{ selected: true,selectedColor:COLORS.DARK_BLUE},

                          }}
                          minDate={new Date()}
                          theme={{
                              todayTextColor:COLORS.DARK_BLUE,
                              arrowColor:COLORS.DARK_BLUE,
                              textSectionTitleColor: COLORS.DARK_BLUE,
                              monthTextColor: COLORS.DARK_BLUE,
                              selectedDayTextColor: COLORS.WHITE
                          }}
                />
                <EventList/>
            </Content>
        </MainContainer>
    );
};

const EventList = (props) =>{
    return(
        <View>
            <EventCard/>
        </View>
    )
}

const EventCard = (props) => {
    return(
        <View style={{marginTop:MARGIN_VALUE.TWENTY}}>
                <Image style={{flex: 1,height:180}} source={{uri:'http://www.executivesclub.org/images/default-source/calendars/september-26-calendar-01.png?sfvrsn=0&MaxWidth=140&MaxHeight=&ScaleUp=false&Quality=High&Method=ResizeFitToAreaArguments&Signature=A77796519CD06584D8B8805DCD6B047D0FB9E455'}} />
                <View style={{marginLeft: MARGIN_VALUE.TEN, marginTop:MARGIN_VALUE.FIVE}}>
                    <View style={{flex: 1}}><Text style={{fontSize:16, fontWeight:'bold',marginTop:10}}>From Grantmaker to Changemaker: A New Direction for Helping Chicago</Text></View>
                    <View style={{flex: 1}}><Text style={{color: COLORS.GREY, fontWeight:'bold'}} >11:15 a.m. – 1:15 p.m.</Text></View>
                </View>
        </View>
    )
}

export default Events;