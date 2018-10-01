import { Dimensions } from 'react-native';

export const COLORS = {
    'BACKGROUND_COLOR':'#F0F8FF',
    'LIGHT_BLUE':'#BBDFFC',    
    'DARK_BLUE':'#4B85C7',
    'WHITE':'#FFFFFF',
}

export const TAB = {
    'PROGRAMS' : 'PROGRAMS',
    'MEMBERS' : 'MEMBERS',
    'EVENTS' : 'EVENTS',
    'FORUM' : 'FORUM',
    'GALLERY' : 'GALLERY',
}

export const DIMENSION_VALUE = {
    'HEIGHT' : Dimensions.get('screen').height,
    'WIDTH' : Dimensions.get('screen').width,    
}

export const MARGIN_VALUE = {
    BASE_VALUE: 15,
    FIVE: 5,
    TEN: 10
}

export const BUTTON_TYPE = {
    BACK: 'BACK',
    EXPAND: 'EXPAND'
}