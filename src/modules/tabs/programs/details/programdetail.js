import React from 'react';
import { MainContainer, PageContainer, PageHeader, MemberCard } from '../../../../common/components';
import { View, Text, Image, FlatList,Button,TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import { BUTTON_TYPE, COLORS, MARGIN_VALUE } from '../../../../common/constants/';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'


const venuItemArray = [
    {'iconName':"calendar", 'title':"Date"},
    {'iconName':"clock-o", 'title':"Registration Time"},
    {'iconName':"clock-o", 'title':"Program Duration"},
    {'iconName':"map-marker", 'title':"Location"},
]

const Programdetail = (props) => {
    return (
        <Container style={{flex:1,backgroundColor: COLORS.BACKGROUND_COLOR }}>        
            <PageContainer>
                <PageHeader 
                    onLeftPress={()=>props.navigation.goBack()}
                    onRightPress={()=>console.log("programs right button pressed")}
                    leftButtonType={BUTTON_TYPE.BACK}
                    rightButtonType ={BUTTON_TYPE.DOTS}
                    back={true} left={true} right={true} title="Programs"/>
            </PageContainer>
            <Content marginLeft={MARGIN_VALUE.BASE_VALUE} marginRight={MARGIN_VALUE.BASE_VALUE} style={{contentContainerStyle: {flex:1} }}>
                    {/*<SpeakerList speakers={props.program.speaker}/>*/}
                <Image style={{flex: 1,height:150, marginTop:5}} source={{uri:props.program.img_url}} />
                <Text numberOfLines={2} style={{fontSize:16, fontWeight:'bold',marginTop:10}}>{props.program.title}</Text>
                <View style={{flex: 1, flexDirection:'row',marginTop:MARGIN_VALUE.TEN}}>
                    <View  style={{flex: 1, flexDirection:'row'}}>
                        <View style={{backgroundColor:COLORS.DARK_GREY,padding:10, marginRight: 10}}>
                            <FontAwesomeIcon size={18} color={COLORS.WHITE} name={'calendar'} style={{justifyContent:'center'}}/>
                        </View>
                        <Text style={{flex: 1, flexWrap: 'wrap', color: COLORS.GREY}}>{props.program.date}</Text>
                    </View>
                    <View style={{flex: 1, flexDirection:'row'}}>
                        <View style={{backgroundColor:COLORS.DARK_GREY, padding:10, marginRight: 10}}>
                            <FontAwesomeIcon size={18} color={COLORS.WHITE} name={'clock-o'} style={{justifyContent:'center'}}/>
                        </View>
                        <Text style={{flex: 1, flexWrap: 'wrap', color: COLORS.GREY}}>{props.program.time}</Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection:'row', marginTop:MARGIN_VALUE.TEN}}>
                    <View style={{flex: 1, flexDirection:'row'}}>
                        <View style={{backgroundColor:COLORS.DARK_GREY,padding:10, marginRight: 10}}>
                            <FontAwesomeIcon size={18} color={COLORS.WHITE} name={'clock-o'} style={{justifyContent:'center'}}/>
                        </View>
                        <Text style={{flex: 1, flexWrap: 'wrap', color: COLORS.GREY}}>{props.program.duration}</Text>
                    </View>
                    <View style={{flex: 1, flexDirection:'row'}}>
                        <View style={{backgroundColor:COLORS.DARK_GREY, padding:12, marginRight: 10}}>
                            <FontAwesomeIcon size={18} color={COLORS.WHITE} name={'map-marker'} style={{justifyContent:'center'}}/>
                        </View>
                        <Text style={{flex: 1, flexWrap: 'wrap', color: COLORS.GREY}}>{props.program.location}</Text>
                    </View>
                </View>
                {/*<ProgramVenueDetails program={props.program} />*/}
                    <View style={{backgroundColor:COLORS.WHITE,marginTop:MARGIN_VALUE.BASE_VALUE}}>
                        <ProgramDescription description={props.program.description}/>
                        <ProgramPricing />
                    </View>
                    <View>
                        <TouchableOpacity
            style={{marginRight:40,
            marginLeft:40,
            marginTop:10,
            paddingTop:10,
            paddingBottom:10,
            backgroundColor:COLORS.DARK_BLUE,
            borderRadius:20,
            borderWidth: 1,
            borderColor: '#fff'}}
                    onPress={()=>console.log("Register")}
                    underlayColor='#fff'>
            <Text style={{color:'#fff',
            textAlign:'center',
            paddingLeft : 10,
            paddingRight : 10}}>Register</Text>
                    </TouchableOpacity>
            </View>
            </Content>    
        </Container>
    );
};

const SpeakerList = (props) => {
    return(
        <FlatList
            showsHorizontalScrollIndicator={false}
            data={props.speakers}
            horizontal={true}
            renderItem={({item})=><MemberCard variant={{marginLeft:MARGIN_VALUE.BASE_VALUE}} member={item}/>}
        />
    )
}

const ProgramVenueDetails = (props) =>{
    return(
        <View style={{marginTop: 10, backgroundColor:COLORS.WHITE, height:100 }}>
            <FlatList
                data={venuItemArray}
                numColumns={2}
                renderItem={({item})=><VenueItem {...item}/>}
            />
        </View>
    )
}

const VenueItem = (props) => {
    return(
        <View style={{flexDirection:'row',flex: 1, height:50,alignItems:'center', borderColor:COLORS.LIGHT_BLUE, borderWidth:1}}>
            <View style={{flex:1,alignItems:'center'}}>
                <FontAwesomeIcon size={18} color={COLORS.DARK_BLUE} name={props.iconName}/>
            </View>
            <Text style={{flex:1, color: COLORS.DARK_BLUE}}>
                {props.title}
            </Text>
        </View>
    )
}

const ProgramDescription = (props) =>{
    return(
        <View>
            <Text style={{fontWeight: 'bold', fontSize:16, marginBottom: MARGIN_VALUE.FIVE}}> Description </Text>
            <Text style={{textAlign:'justify', marginHorizontal: 5, color:COLORS.GREY}}>
                {props.description}
            </Text>
        </View>
    )
}

const ProgramPricing = (props) => {
    return(
        <View style={{flex:1,marginTop:MARGIN_VALUE.BASE_VALUE,marginBottom: MARGIN_VALUE.TEN}}>
            <View style={{marginLeft:5,flex:3,flexDirection:'row',marginTop:MARGIN_VALUE.FIVE}}>
            <View style={{height: 30, width: 80}}/>
                <View style={{ alignItems:'center',flex:1, marginRight:10, backgroundColor:COLORS.DARK_GREY}}>
                        <Text style={{color:COLORS.WHITE}}>
                            Member
                        </Text>
                </View>
                <View style={{alignItems:'center',flex:1, backgroundColor:COLORS.DARK_GREY}}>
                        <Text style={{color:COLORS.WHITE}}>
                            Non-Member
                        </Text>
                </View>
            </View>
            <View style={{marginLeft:5,flex:3,flexDirection:'row',marginTop:MARGIN_VALUE.TEN}}>
                <View style={{height: 20, width: 80}}>
                    <Text>
                        Tickets
                    </Text>
                </View>
                <View style={{ alignItems:'center',flex:1, marginRight:10}}>
                    <Text>
                       $166
                    </Text>
                </View>
                <View style={{alignItems:'center',flex:1}}>
                    <Text>
                        $1222
                    </Text>
                </View>
            </View>
            <View style={{marginLeft:5,flex:3,flexDirection:'row',marginTop:MARGIN_VALUE.TEN}}>
                <View style={{height: 20, width: 80}}>
                    <Text>
                        Table
                    </Text>
                </View>
                <View style={{ alignItems:'center',flex:1, marginRight:10}}>
                    <Text >
                        $199
                    </Text>
                </View>
                <View style={{alignItems:'center',flex:1}}>
                    <Text>
                        $44
                    </Text>
                </View>
            </View>

        </View>

    )
}

export default Programdetail;
