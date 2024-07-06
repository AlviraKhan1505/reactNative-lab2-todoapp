import { doc, updateDoc, deleteDoc, collection, addDoc } from 'firebase/firestore';
import { db } from './config';
export async function save(taskDescription, taskDone) {
    console.log('Saving...')
    const dbCollection = collection(db, 'Tasks');
    await addDoc(dbCollection, {
        description: taskDescription,
        done: taskDone
    })
        .then((docRef) => {
            console.log('Success:', docRef);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
// export function update(){
//     console.log('Updating...')
// } 
export async function update(id, status) {
    // console.log("id :", id)
    // console.log("status : ", status)
    const docRef = doc(db, 'Tasks', id);
    await updateDoc(docRef, {
        done: !status
    })
        .then(() => {
            console.log('Successfully updated!');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
export async function deleteTask(id) {
    //console.log("id :", id)
    const dbDoc = doc(db, 'Tasks', id);
    await deleteDoc(dbDoc)
        .then(() => {
            console.log('Successfully deleted!');
        })
        .catch((error) => {
            console.error('Error:', error);
        });

} 