import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, TextInput, Switch, Button, Keyboard, TouchableHighlight } from 'react-native';
import styles from './styles';
export default function Form(props) {
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDone, setTaskDone] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const handleAddPress = () => {
        if (taskDescription) {
            props.onAddTask(taskDescription, taskDone);
            setErrorMessage(null);
            setTaskDescription('');
            setTaskDone(false);
            Keyboard.dismiss();
        }
        else {
            setErrorMessage('The description is required.');
        }
    }
    const handleDescriptionChange = (value) => {
        setTaskDescription(value);
    }
    const handleStatusChange = (value) => {
        setTaskDone(value);
    }
    return (
        <View style={styles.container}>
            {errorMessage && (
                <View style={styles.errContainer}>
                    {/* <Text style={{fontWeight:'bold',fontSize:20,color:'lightgray'}}>Attention:</Text> */}
                    <Text style={styles.errMsg}>{errorMessage}</Text>
                    <MaterialIcons name="error" size={24} color="#FF6347" />
                </View>
            )}
            <TextInput
                placeholder='Enter a task title'
                maxLength={150}
                onChangeText={handleDescriptionChange}
                defaultValue={taskDescription}
                placeholderTextColor='#C0C0C0'
                style = {styles.textInputStyle}
            />
            <View style={styles.switchBlock}>
                <Text style={styles.text2}>Done :</Text>
                <Switch
                    value={taskDone}
                    onValueChange={handleStatusChange}
                    trackColor={{false: '#767577', true: '#3e3e3e'}}
                    thumbColor={taskDone ? '#5F9EA0' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                />
            </View>
            <TouchableHighlight
                
                onPress={handleAddPress}
                style={styles.btnStyle}
                activeOpacity={0.5}
                
            >
                <Text style={styles.btnTxt}>ADD</Text>   
            </TouchableHighlight>
        </View>
    );
}