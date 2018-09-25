import { createBottomTabNavigator  } from 'react-navigation';
import { Events, Forum, Gallery, Members, Programs } from '../modules/tabs';

const TabNavs = createBottomTabNavigator({
    'Programs' : Programs,
    'Members' : Members,
    'Events' : Events,
    'Gallery' : Gallery,
    'Forum': Forum
})

export default TabNavs;