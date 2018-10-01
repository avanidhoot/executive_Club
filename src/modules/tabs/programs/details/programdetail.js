import React from 'react';
import { MainContainer, PageContainer, PageHeader, MemberCard } from '../../../../common/components';
import { View, Text, Image, FlatList } from 'react-native';
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
                    leftButtonType={BUTTON_TYPE.BACK}
                    back={true} left={true} title="PROGRAM"/>                
            </PageContainer>
            <Content showsVerticalScrollIndicator={true} style={{contentContainerStyle: {flex:1} }}>
                    <SpeakerList speakers={props.program.speaker}/>
                    <ProgramVenueDetails program={props.program} />
                    <View style={{backgroundColor:COLORS.WHITE,marginHorizontal:0}}>
                        <ProgramDescription description={props.program.description}/>
                        <ProgramPricing />
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
            <Text style={{color:COLORS.DARK_BLUE}}> Description </Text>
            <Text style={{textAlign:'justify', marginHorizontal: 5}}>
                {props.description}
            </Text>
        </View>
    )
}

const ProgramPricing = (props) => {
    return(
        <View style={{flex:1,marginHorizontal:10, marginBottom: 5}}>
            <View style={{flexDirection:'row', flex: 3}}>                
                <View>
                    <View style={{height: 30, width: 80,marginTop:5}}>

                    </View>
                    <View style={{height: 30, width: 80, backgroundColor: COLORS.LIGHT_BLUE, alignItems:'center'}}>
                            <Text>
                                TICKETS
                            </Text>
                    </View>
                    <View style={{height: 30, width: 80, backgroundColor: COLORS.LIGHT_BLUE, marginTop: 5, alignItems:'center'}}>
                        <Text>
                            TABLE
                        </Text>
                    </View>
                </View>
                <View style={{marginLeft:5,flex:7}}>
                        <View style={{height: 30, width: 80,marginTop:5}}>

                        </View>
                        <View style={{flexDirection:'row',height: 30,flex:1}}>
                            <View style={{ alignItems:'center',flex:1}}>
                                    <Text>
                                        $99 
                                    </Text>
                            </View>
                            <View style={{alignItems:'center',flex:1}}>
                                <Text>
                                    $159
                                </Text>
                            </View>
                        </View>
                </View>
            </View>         
        </View>
    )
}

export default Programdetail;