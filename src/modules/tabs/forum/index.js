import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { MainContainer, PageContainer, PageHeader } from '../../../common/components';
import { TAB } from '../../../common/constants';

class Forums extends Component {
    render() {
        return (
            <MainContainer>
                 <StatusBar hidden={true} />
                    <PageContainer>
                        <PageHeader title={TAB.FORUM} left={true} onLeftPress={()=>console.log("programs left button pressed")}/>
                    </PageContainer>
            </MainContainer>
        );
    }
}

export default Forums;