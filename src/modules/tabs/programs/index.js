import React, { Component } from 'react';
import { View, FlatList, Image, StatusBar } from 'react-native';
import { List, Text, Content } from 'native-base';
import { PageHeader, MainContainer, PageContainer } from '../../../common/components';
import programService from './service';
import { TAB, MARGIN_VALUE, COLORS } from '../../../common/constants';

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

    render() {
    const prg = Array.isArray(this.state.programs) && this.state.programs.length > 0 
                ? <FlatList
                    style={{marginHorizontal:MARGIN_VALUE.FIVE}}
                    keyExtractor ={ (item, index) => item.id}
                    ItemSeparatorComponent={()=><View style={{height: MARGIN_VALUE.TEN}}></View>}
                    data={this.state.programs}
                    renderItem={({item}) => <ProgramCard program={item} />}
                    />
                : null
        return (
            <React.Fragment>
                <MainContainer>
                    <StatusBar hidden={true} />
                    <PageContainer>
                        <PageHeader title={TAB.PROGRAMS} left={true} onLeftPress={()=>console.log("programs left button pressed")}/>
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
            <View style={{flex: 1, marginLeft:5}}>
                <Text ellipsizeMode={'tail'} numberOfLines={2} style={{fontSize:16, fontWeight:'bold'}}>{program.title}</Text>
                <Text >{program.date}</Text>
                <Text >{program.location}</Text>
            </View>
        </View>
    )
}

export default Programs;