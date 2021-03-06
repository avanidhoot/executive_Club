import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { MainContainer, PageContainer, PageHeader } from '../../../common/components';
import {TAB, BUTTON_TYPE, COLORS} from '../../../common/constants';

class Forums extends Component {
    render() {
        return (
            <MainContainer>
                 <StatusBar hidden={false} backgroundColor={COLORS.DARK_BLUE} />
                    <PageContainer>
                        <PageHeader 
                            title={TAB.FORUM} 
                            leftButtonType={BUTTON_TYPE.EXPAND}
                            left={true} 
                            onLeftPress={()=>console.log("programs left button pressed")}/>
                    </PageContainer>
            </MainContainer>
        );
    }
}

export default Forums;