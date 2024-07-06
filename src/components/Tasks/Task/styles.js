import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {

        backgroundColor: '#fff',
        margin: 10,
        borderWidth: 1,
        borderColor: '#bcbcbc',
        padding: 10,
        height: Platform.OS === 'ios' ? hp(15) : hp(20),
        justifyContent: 'space-around'
    },
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    idTxt: {  fontSize: 16, fontWeight: 'bold' },
    idTxt2: {  fontSize: 16 },
    statusBlock: {
        alignItems: 'center',

        padding: 10
    },
    statusTxt: { fontWeight: 'bold', fontSize: 16, color: 'white' },
    statusTxt2: { fontSize: 16},
    
    modal: {    
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    cont: {
        padding: 20,
        width:wp(89),
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: "white",
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 20,
    },
    descModal: {
        flexDirection: 'column',
        //justifyContent: 'flex-start', 
        //alignItems: 'center',
    },
    toggle: {
        
        flexDirection: 'row',
        width:wp(35),
        justifyContent: 'space-between', 
        alignItems: 'center',
        //alignItems: 'center',
        marginBottom: 10,
    },
    btnRemove: {
        color: 'red',
        alignSelf:'flex-end',
        backgroundColor:'red',
        color:'white',
        padding:wp(2),
        borderRadius: 9,
        
    },
});
export default styles;