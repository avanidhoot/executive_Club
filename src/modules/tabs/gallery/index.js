import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { MainContainer, PageContainer, PageHeader } from '../../../common/components';
import { TAB } from '../../../common/constants';

class Gallery extends Component {
    render() {
        return (
            <MainContainer>
                    <StatusBar hidden={true} />
                    <PageContainer>
                        <PageHeader title={TAB.GALLERY} left={true} onLeftPress={()=>console.log("programs left button pressed")}/>
                    </PageContainer>
            </MainContainer>
        );
    }
}

export default Gallery;