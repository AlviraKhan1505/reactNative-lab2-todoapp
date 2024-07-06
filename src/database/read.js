import { collection, getDocs } from 'firebase/firestore';
import { db } from './config'
// export function load() {
//     console.log('Loading...s')
//     const data =[]
//     const dbCollection = collection(db, 'Tasks');
//     getDocs(dbCollection)
//         .then((querySnapshot) => {
//             // console.log(doc.id, doc.data());
//             querySnapshot.forEach((doc) => {
//                 console.log(doc.id, doc.data());
//                 const task = {
//                     ...doc.data(),
//                     id: doc.id
//                 }
//                 data.push(task);
//             });
//             console.log('Data ', data)
//         })
//         .catch((error) => {
//             console.log('Error:', error);
//         });

//         return new Promise((resolve, reject) => {
//             reject("It failed");
//         })
// } 

export async function load() {
    const data =[]
    const dbCollection = collection(db, 'Tasks');
    await getDocs(dbCollection)
        .then((querySnapshot) => {
            // console.log(doc.id, doc.data());
            querySnapshot.forEach((doc) => {
                console.log(doc.id, doc.data());
                const task = {
                    ...doc.data(),
                    id: doc.id
                }
                data.push(task);
            });
            console.log('Data ', data)
        })
        .catch((error) => {
            console.log('Error:', error);
        });
        return data;
} 