import React, { Component } from 'react';
import { View, FlatList, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import { PageHeader, MainContainer, PageContainer } from '../../../common/components';
import programService from './service';
import { TAB, MARGIN_VALUE, COLORS, BUTTON_TYPE } from '../../../common/constants';

class Programs extends Component {
    constructor(props) {
        super(props)
        this.state = { programs: [] }
    }
    async componentWillMount() {
        try {
            const response = await programService.getPrograms();
            console.log('program fetch',response);
            this.setState({ programs: response });
        } catch (error) {
            console.log('program fetch error',error);
        }
    }   

    handleDetailPress (program) {
        this.props.navigation.navigate('PROGRAM_DETAIL',{program})
    }
    render() {
    const prg = Array.isArray(this.state.programs) && this.state.programs.length > 0 
                ? <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{marginHorizontal: MARGIN_VALUE.FIVE, marginBottom: 80}}
                    keyExtractor ={ (item, index) => item.id}
                    ItemSeparatorComponent={()=><View style={{height: MARGIN_VALUE.FIVE}}></View>}
                    data={this.state.programs}
                    renderItem={({item}) => <ProgramCard program={item} onDetailPress={(program)=>this.handleDetailPress(program)} />}
                    />
                : null
        return (
            <React.Fragment>
                <MainContainer>
                    <StatusBar hidden={false} backgroundColor={COLORS.DARK_BLUE}/>
                    <PageContainer>
                        <PageHeader 
                            title={TAB.PROGRAMS} 
                            leftButtonType={BUTTON_TYPE.EXPAND}
                            rightButtonType={BUTTON_TYPE.DOTS}
                            left={true}
                            right={true}
                            onLeftPress={()=>console.log("programs left button pressed")}
                            onRightPress={()=>console.log("programs right button pressed")}
                        />
                        {prg}
                    </PageContainer>
                </MainContainer>
            </React.Fragment>
        );
    }
}

const ProgramCard = (props) => {
    const program = props.program;
    return(
        <View style={{height:290, padding: 5,backgroundColor:COLORS.WHITE, marginLeft:10, marginRight: 10}}>
            <View style={{height:190}}>
                <Image style={{flex: 1}} source={{uri:program.img_url}} />
            </View>
                <View style={{flex: 1, marginLeft: 10}}>
                <Text ellipsizeMode={'tail'} numberOfLines={2} style={{fontSize:16, fontWeight:'bold',marginTop:10}}>{program.title}</Text>
                <View style={{flex: 1,flexDirection: 'row',marginTop:10}}>
                    <Text style={{fontSize:14, color:COLORS.GREY,fontWeight:'bold'}}>On {program.date}</Text>
                    <TouchableOpacity onPress={()=>props.onDetailPress(program)} style={{height:20,justifyContent:'center',alignItems:'center', width:80}}>
                        <Text style={{fontSize:14, color:COLORS.GREY, fontWeight:'bold'}}> Register </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Programs;

/**
 * 
#FFFFFF
#F0F8FF
#BBDFFC
#2599FA
#DDDD
 */
