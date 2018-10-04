import React, { Component } from 'react';
import DetailComponent from './programdetail';
import programService from '../../programs/service';

class ProgramDetail extends Component {
    static navigationOptions = {
        tabBarVisible: false,
    };
    state = { program: {} }
    async componentWillMount() {    
        try {
            let program = this.props.navigation.state.params.program
            program= await programService.getProgramDetail(program.id)
            this.setState({program});
        } catch (error) {
            console.log('error',error)
        }
    }

    render() {
        return (
            <DetailComponent 
                program={this.state.program}
                navigation={this.props.navigation}/>
        );
    }
}

export default ProgramDetail;
