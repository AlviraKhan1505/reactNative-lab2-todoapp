import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginTop: 8,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'dimgray',
    backgroundColor: 'dimgray',
    marginBottom: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  errContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 9,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#C0C0C0',
    borderLeftWidth: 2,
    borderLeftColor: '#FF6347'

  },
  errMsg: {
    color: '#FF6347',
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  textInputStyle: {
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderColor: 'white',
    borderRadius: 9,
    fontSize: 20,

  },
  switchBlock: { flexDirection: Platform.OS === 'ios' ? 'row' : 'row', justifyContent: 'flex-end', marginTop: Platform.OS === 'ios' ? 20 : 5, alignItems: 'center', marginBottom: Platform.OS === 'ios' ? 10 : 2.5, marginRight: 10, },
  text2: { fontWeight: 'bold', fontSize: 20, color: 'white', marginRight: 10 },
  btnStyle: {
    width: 170,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#5F9EA0',

    paddingVertical: 12,
    marginTop: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#5F9EA0',
    borderRadius: 9,
  },
  btnTxt:
    { color: 'white', fontWeight: 'bold', fontSize: 16 },

});
export default styles;