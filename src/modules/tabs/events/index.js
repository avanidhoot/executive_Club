import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { MainContainer, PageContainer, PageHeader } from '../../../common/components';
import { TAB } from '../../../common/constants';

class Events extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <MainContainer>
                 <StatusBar hidden={true} />
                    <PageContainer>
                        <PageHeader type={TAB.EVENTS} title={TAB.EVENTS} right={true} left={true} onLeftPress={()=>console.log("programs left button pressed")}/>
                    </PageContainer>
            </MainContainer>
        );
    }
}

export default Events;