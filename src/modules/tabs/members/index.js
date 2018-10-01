import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';
import { Content, Segment, Button } from 'native-base';
import { MainContainer, PageContainer, PageHeader } from '../../../common/components';
import { TAB, BUTTON_TYPE, COLORS, MARGIN_VALUE } from '../../../common/constants';
import Executive_List from './executive'
import Member_List from './members';
import { Executive_Member, NonExecutive_Member } from '../programs/data';

const SEGMENT = {
    MEMBERS: 'Members',
    EXECUTIVE: 'Executive'
}

class Members extends Component {
    state = { activeSegment: SEGMENT.EXECUTIVE, memberList: [], executiveList: [] }
    render() {
        const list = this.state.activeSegment == SEGMENT.EXECUTIVE 
                    ? <Executive_List data={Executive_Member} /> 
                    : <Member_List data={NonExecutive_Member}/>
        return (
            <MainContainer>
                <StatusBar hidden={true} />
                <PageContainer>
                    <PageHeader title={TAB.MEMBERS} 
                        type={TAB.MEMBERS} 
                        leftButtonType={BUTTON_TYPE.EXPAND}
                        right={true} 
                        left={true} 
                        onLeftPress={()=>console.log("programs left button pressed")}/>                    
                </PageContainer>
                <Segment style={{borderRadius: 8, marginHorizontal: MARGIN_VALUE.BASE_VALUE, height: 30 }}>
                        <Button style={{flex: 1, justifyContent: 'center',borderColor: COLORS.DARK_BLUE, borderWidth: 1,  backgroundColor: this.state.activeSegment == SEGMENT.EXECUTIVE ? COLORS.DARK_BLUE : COLORS.WHITE, borderTopLeftRadius:8, borderBottomLeftRadius:8}} first onPress={()=>this.setState({activeSegment:SEGMENT.EXECUTIVE})} >
                            <Text style={{color: this.state.activeSegment == SEGMENT.EXECUTIVE ? COLORS.WHITE : COLORS.DARK_BLUE }} >{SEGMENT.EXECUTIVE}</Text>
                        </Button>
                        <Button style={{flex:1, justifyContent:'center',borderColor: COLORS.DARK_BLUE, borderWidth: 1, backgroundColor: this.state.activeSegment == SEGMENT.MEMBERS ? COLORS.DARK_BLUE : COLORS.WHITE,  borderTopRightRadius:8, borderBottomRightRadius:8}} onPress={()=>this.setState({activeSegment:SEGMENT.MEMBERS})}>
                            <Text style={{textAlign:'center', color: this.state.activeSegment == SEGMENT.MEMBERS ? COLORS.WHITE : COLORS.DARK_BLUE}}>{SEGMENT.MEMBERS}</Text>
                        </Button>
                </Segment>
                <Content style={{marginHorizontal: MARGIN_VALUE.BASE_VALUE, marginTop: MARGIN_VALUE.BASE_VALUE}}>
                    {list}
                </Content>
            </MainContainer>
        );
    }
}

export default Members;