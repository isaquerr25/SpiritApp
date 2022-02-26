import styled from 'styled-components/native';
import theme from './theme.json';
import background from '../assets/background.png';

import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native';

const image = { uri: 'https://reactjs.org/logo-og.png' };

export const BackGroundImage = () => (

	<ImageBackground source={background} resizeMode="cover" style={LogoImgae.image}/>
);

interface ContainerProps { 
    color?:'primary'|'light'|'info'|'info50'|'dark'|'black'|'muted'|'muted50'|'bottonL'|'transparent'|'grayN';
    flexP?:boolean;
    row?: boolean;
    justify?: string;
    padding?: number;
    align?: string;
    width?: number;
    height?: number;
    position?: string;
    top?: string;
    zIndex?: number;
    heightM?: number;
    gap?: number;
    radius?: string;
}
export const Container = styled.View<ContainerProps>`
    
    background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
    flex : ${(props) => props.flexP ? '0 1 auto' : '1 1 auto'};
    flex-direction : ${(props) => (props.row ? 'row' : 'column')};
    justify-content : ${(props) => props.justify || 'center'};
    padding : ${(props) => (props.padding || 0)}px;
    width: 100%;
    align-items : ${(props) => (props.align || 'center')};
    max-width : ${(props) => (props.width != null ? (props.width + 'px') : '100%')};
    max-height : ${(props) => (props.height ?  props.height + 'px' : 'auto')};
    min-height: ${(props) => (props.heightM ?  props.heightM + 'px' : '0px')};
    position : ${(props) => (props.position || 'relative')};
    top : ${(props) => (props.top || '0px')};
    

    z-index : ${(props) => (props.zIndex || 1)};
    border-radius: ${(props) => (props.radius || '0px')};
    border: ${(props) => props.borderCo ? '1px '+ theme.colors[props.borderCo] :'0px'};
`;  

export const ContainerImage = styled.View<ContainerProps>`
    
    background-image: url(${background});
    flex : ${(props) => props.flexP ? '0 1 auto' : '1 1 auto'};
    flex-direction : ${(props) => (props.row ? 'row' : 'column')};
    justify-content : ${(props) => props.justify || 'center'};
    padding : ${(props) => (props.padding || 0)}px;
    width: 100%;
    align-items : ${(props) => (props.align || 'center')};
    max-width : ${(props) => (props.width != null ? (props.width + 'px') : '100%')};
    max-height : ${(props) => (props.height ?  props.height + 'px' : 'auto')};
    min-height: ${(props) => (props.heightM ?  props.heightM + 'px' : '0px')};
    position : ${(props) => (props.position || 'relative')};
    top : ${(props) => (props.top || '0px')};
    z-index : ${(props) => (props.zIndex || 1)};
    
`;  

export const ContainerMax = styled.View<ContainerProps>`
    
    background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
    flex : ${(props) => props.flexP ? '0 1 auto' : '1 1 auto'};
    flex-direction : ${(props) => (props.row ? 'row' : 'column')};
    justify-content : ${(props) => props.justify || 'center'};
    padding : ${(props) => (props.padding || 0)}px;
    width: 100%;
    height : 100%;
    max-width : ${(props) => (props.width != null ? (props.width + 'px') : '100%')};
    max-height : ${(props) => (props.height ?  props.height + 'px' : 'auto')};
    align-items : ${(props) => (props.align || 'center')};
    position : ${(props) => (props.position || 'relative')};
    top : ${(props) => (props.top || '0px')};
    z-index : ${(props) => (props.zIndex || 1)};
    
`;  

export const Button = styled.TouchableOpacity<{marginD?:number;compact?:boolean; borderCo?:'primary'|'light'|'info'|'info50'|'dark'|'black'|'muted'|'muted50'|'bottonL'; type?:'primary'|'light'|'info'|'info50'|'dark'|'black'|'muted'|'muted50'|'bottonL';}>`
    justify-content : ${(props) => props.justify || 'center'};
    align-items : ${(props) => (props.align || 'stretch')};
    width: ${(props) => (props.width != null ? (props.width ) : ' 100%')};
    padding: ${(props) => (props.compact ? 0 : 5)}px;
    opacity: ${(props) => props.disabled ? 0.5 : 1};
    background: ${(props) => props.type ? theme.colors[props.type] : theme.colors.primary};
    margin: ${(props) => props.marginD!=null ? props.marginD :'5'}px;
    border: ${(props) => props.borderCo ? '3px '+ theme.colors[props.borderCo] :'0px'};
    border-radius: ${(props) => (props.radius || '0px')};
`;

export const ButtonIcon = styled.TouchableOpacity<{marginD?:number;compact?:boolean; borderCo?:'primary'|'light'|'info'|'info50'|'dark'|'black'|'muted'|'muted50'|'bottonL'; type?:'primary'|'light'|'info'|'info50'|'dark'|'black'|'muted'|'muted50'|'bottonL';}>`
    max-width: 100%;
    justify-content : ${(props) => props.justify || 'center'};
    align-items : ${(props) => (props.align || 'center')};
    width: ${(props) => (props.width != null ? (props.width + 'px') : 'auto')};
    height: ${(props) => (props.height ?  props.height + 'px' : 'auto')};
    max-height :100%;
    padding: ${(props) => (props.compact ? 5 : 5)}px;
    opacity: ${(props) => props.disabled ? 0.5 : 1};
    background: ${(props) => props.type ? theme.colors[props.type] : theme.colors.primary};
    margin: ${(props) => props.marginD!=null ? props.marginD :'5'}px;
    border-radius: 40px;
`;

export const ButtonText = styled.Text<{color?:boolean}>`

    @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
    font-family: 'Roboto';   
    text-align: center;
    font-size: ${(props) => (props.big ? '30px' : '27px')};
    font-weight: bold;
    color: ${(props) => (props.color ? theme.colors[props.color] : '#000')}
    
`;
export const Title = styled.Text`
    width: ${(props) => (props.width ?  props.width : '100%')};;
    font-size: ${(props) => (props.Fsize ? props.Fsize+'px' : '20px')};;
    color: ${theme.colors.whiteT};
    text-align: ${(props) => (props.textL ? 'left' : 'center')};
    font-weight: bold;
`;
export const SubTitle = styled.Text<{ textL?:boolean; padding?:boolean;  small?:boolean;  bold?:boolean; color?:string; }>`
    
    width: ${(props) => (props.width ?  props.width : '100%')};;
    text-align: ${(props) => (props.textL ? 'left' : 'center')};
    font-size: ${(props) => (props.small ? '13px' : '15px')};
    opacity: 0.7;
    font-weight: ${(props) =>(props.bold ? 'bold': 'normal')};
    color: ${(props) => props.color ? theme.colors[props.color] : theme.colors.dark};
    padding-left:  ${(props) => (props.padding ? '20px' : '0px')};
    height : ${(props) => (props.height ?  props.height : 'auto')};
`;

export const PickerButton = styled.TouchableOpacity<{ active?:boolean; }>`
    width: 100%;
    height: 40%;
    margin-top: 2.5%;
    border-width: 3px ;
    border-style: solid;
    justify-content: space-around;
    align-items: center;
    border-color: ${(props) => props.active ? theme.colors.primary : theme.colors.muted50};
    background-color: ${(props) => props.active ? theme.colors.primary + '80' : theme.colors.muted50};
`;

export const Input = styled.TextInput.attrs({
	placeholderTextColor: theme.colors.grayW 
})`
    color:${ theme.colors.grayW };
    background-color: ${ theme.colors.ground };
    border: 1px solid ${ theme.colors.grayW };
    width: 100%;
    padding: 7px 15px;
    borderRadius: 16px;
    opacity: 0.60;
    @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
    font-family: 'Roboto'; 
    `;

export const Spacer = styled.View<ContainerProps>`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 10}px;
`;

export const AddressList = styled.FlatList`
    flex: 1;
    height: auto;
    padding-top: 10;
    width: 100%;
    background : ${props => props.destination ? '#ff2929' : '#FF655000'};
`;

export const AddressItem = styled.TouchableOpacity`
    justify-content : ${(props) => props.justify || 'center'};
    padding:2px 7px;
    align-items: center;
    width: 100%;
    height: auto;

`;

export const Avatar = styled.Image.attrs({elevation:50,})<{small?:boolean;}>`
    width: ${(props) => props.small ? '35px' : '50px'};
    height: ${(props) => props.small ? '35px' : '50px'};
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    background: ${theme.colors.muted};
    border-radius: ${(props) => (props.small ? '35px' : '50px')};
`;

export const AvatarSize = styled.Image.attrs({elevation:50,})<{small?:boolean;}>`
    width: ${(props) => props.size ? props.size : '50px'};
    height: ${(props) => props.size ? props.size : '50px'};
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    background: ${theme.colors.muted};
    border-radius: ${(props) => (props.size  ? props.size  : '50px')};
`;

export const VerticalSeparator = styled.View`
    width: ${(props) => props.width || '1px'};
    height: ${(props) => props.height || '40px'};
    background: ${(props) => props.color ? theme.colors[props.color] : theme.colors.dark};
    border-radius: ${(props) => (props.radius || '0px')};
`;
export const Bullet = styled.View<{destination?:boolean}>`
    width: 8px;
    height: 8px;
    border-radius: 7px;
    margin-top: 2px;
    background : ${props => props.destination ? '#ff2929' : '#3ffd05'};
`;
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
export const LogoImgae = StyleSheet.create({
    
	logo: {
		flexGrow:0,
		flexShrink:0,
		flexBasis:'50%',
		height: undefined,
		width: undefined,
		alignSelf: 'stretch'
	},
	logoHalf: {
		flexGrow:0,
		flexShrink:0,
		flexBasis:'25%',
		height: undefined,
		width: undefined,
		alignSelf: 'stretch'
	},
	logoGraph: {
		flexGrow:0,
		flexShrink:0,
		flexBasis:'30%',
		height: undefined,
		width: undefined,
		alignSelf: 'stretch'
	},
	transformRotateImage: {
		flexGrow:0,
		flexShrink:0,
		flexBasis:'30%',
		height: undefined,
		width: undefined,
		alignSelf: 'stretch',
		transform: [{rotateY: '180deg'}]
	},
	container: {
		flex: 1,
	}, 
	image: {
		height: undefined,
		width: ScreenWidth,
		flexGrow:0,
		flexShrink:0,
		flexBasis:'30%',
		alignSelf: 'stretch',
	},
	text: {
		color: 'white',
		fontSize: 42,
		lineHeight: 84,
		fontWeight: 'bold',
		textAlign: 'center',
		backgroundColor: '#000000c0'
	},
	imagePos: {
		position: 'absolute',
		zIndex: -1,
	},
	shadowtext: {

		fontWeight: 'bold',
		textAlign: 'center',
		textShadowOffset: {width: 4, height: 3},
		textShadowRadius: 20,
		textShadowColor: 'black',
    
	},
});


