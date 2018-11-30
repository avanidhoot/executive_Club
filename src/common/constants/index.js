import { Dimensions } from 'react-native';

export const COLORS = {
    'BACKGROUND_COLOR':'#FFFFFF',
    'LIGHT_BLUE':'#d4b005',
    'DARK_BLUE':'#d4b005',
    'WHITE':'#FFFFFF',
    'GREY' : '#b1afc0',
    'DARK_GREY' :'#5f5d70',
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
    TEN: 10,
    TWENTY:20
}

export const BUTTON_TYPE = {
    BACK: 'BACK',
    EXPAND: 'EXPAND',
    DOTS: 'DOTS',
    MESSAGE: 'MESSAGE'
}