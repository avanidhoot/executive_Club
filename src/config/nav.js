import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS, TAB } from '../common/constants';
import { createBottomTabNavigator, createStackNavigator  } from 'react-navigation';
import { Events, Forum, Gallery, Members, Programs, ProgramDetail } from '../modules/tabs';


const TabIcon=({focused, tintColor, iconName, type}) =>{
    const iconColor = focused ? COLORS.WHITE : COLORS.LIGHT_BLUE
    switch(type) {
        case TAB.PROGRAMS:
            return <Entypo size={18} color={iconColor} name={iconName}/>
        case TAB.EVENTS:
            return <FontAwesome size={18} color={iconColor} name={iconName}/>
        case TAB.FORUM:
            return <MaterialIcons size={18} color={iconColor} name={iconName}/>
        case TAB.GALLERY:
            return <FontAwesome size={18} color={iconColor} name={iconName}/>
        case TAB.MEMBERS:
            return <FontAwesome5 size={18} color={iconColor} name={iconName}/>
    }
}


const ProgramStack = createStackNavigator({
    'PROGRAMS_LIST': {screen: Programs},
    'PROGRAM_DETAIL': {screen: ProgramDetail,}
}, { navigationOptions: { header: null }})

ProgramStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
};

const TabNavs = createBottomTabNavigator({
    'PROGRAMS': { screen: ProgramStack, navigationOptions:{ tabBarIcon: ({focused, tintColor})=> <TabIcon type={TAB.PROGRAMS} focused={focused} tintColor={tintColor} iconName='grid'/> }},
    'MEMBERS': { screen: Members, navigationOptions:{ tabBarIcon: ({focused, tintColor})=> <TabIcon type={TAB.MEMBERS} focused={focused} tintColor={tintColor} iconName='user'/> }},
    'EVENTS': { screen: Events, navigationOptions:{ tabBarIcon: ({focused, tintColor})=> <TabIcon type={TAB.EVENTS} focused={focused} tintColor={tintColor} iconName='calendar'/> }},
    'GALLERY': { screen: Gallery, navigationOptions:{ tabBarIcon: ({focused, tintColor})=> <TabIcon type={TAB.GALLERY} focused={focused} tintColor={tintColor} iconName='image'/> }},
    'FORUM': { screen: Forum, navigationOptions:{ tabBarIcon: ({focused, tintColor})=> <TabIcon type={TAB.FORUM} focused={focused} tintColor={tintColor} iconName='comment'/> }},
},{
    tabBarOptions:{
        inactiveTintColor: COLORS.LIGHT_BLUE,
        activeTintColor: COLORS.WHITE,
        tabStyle: {paddingVertical:5},
        labelStyle: {marginVertical:5},
        style: {backgroundColor: COLORS.DARK_BLUE}
    }
})

export default TabNavs;