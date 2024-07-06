import { View, Text, Pressable, Modal, Switch, Alert, Button } from 'react-native';

import styles from './styles';

export default function Task(props) {

    const handleRemovePress = () => {
        Alert.alert(
            "Remove Task",
            "Are you sure? This action cannot be undone!",
            [{
                text: 'Confirm',
                onPress: () => {
                    props.onTaskRemoval(props.task.id);
                }
            },
            { text: 'Cancel' }]
        );
    }


    return (
        <>
                <View style={styles.container}>
                    <Text style={[styles.textStyle, {
                        color: props.task.done ? 'darkslategray' : '#708090',
                    }]}>{props.task.description}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                         <Switch value={props.task.done} onValueChange={() => props.onStatusChange(props.task.id)} />
                         <Pressable onPress={handleRemovePress} style={styles.btnRemove}><Text style={{color:'white'}}>REMOVE</Text></Pressable>
                    </View>


                    <Pressable
                        style={[styles.statusBlock,
                        {
                            backgroundColor: props.task.done ? 'darkslategray' : '#778899',
                        }]
                        }>
                        <Text style={styles.statusTxt}>{props.task.done ? 'Done' : 'Due'}</Text>
                    </Pressable>
                </View>
        </>


    );
}