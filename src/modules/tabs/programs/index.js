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
                    style={{marginHorizontal: MARGIN_VALUE.FIVE}}
                    keyExtractor ={ (item, index) => item.id}
                    ItemSeparatorComponent={()=><View style={{height: MARGIN_VALUE.TEN}}></View>}
                    data={this.state.programs}
                    renderItem={({item}) => <ProgramCard program={item} onDetailPress={(program)=>this.handleDetailPress(program)} />}
                    />
                : null
        return (
            <React.Fragment>
                <MainContainer>
                    <StatusBar hidden={true} />
                    <PageContainer>
                        <PageHeader 
                            title={TAB.PROGRAMS} 
                            leftButtonType={BUTTON_TYPE.EXPAND}
                            left={true} 
                            onLeftPress={()=>console.log("programs left button pressed")}/>
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
        <View style={{height:150, flexDirection:'row', backgroundColor:COLORS.WHITE}}>            
            <Image style={{flex: 1,height:150}} source={{uri:program.img_url}} />
            <View style={{flex: 1, marginLeft: 10}}>
                <Text ellipsizeMode={'tail'} numberOfLines={2} style={{fontSize:14, fontWeight:'bold'}}>{program.title}</Text>
                <Text style={{fontSize:12}}>{program.date}</Text>
                <Text style={{fontSize:12}}>{program.location}</Text>
                <TouchableOpacity onPress={()=>props.onDetailPress(program)} style={{height:30,justifyContent:'center', alignItems:'center', width:80, backgroundColor:COLORS.DARK_BLUE, borderRadius: 5, marginTop:5 }}>
                    <Text style={{color:COLORS.WHITE}}> Register </Text>
                </TouchableOpacity>
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