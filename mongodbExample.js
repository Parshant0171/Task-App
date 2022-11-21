// CRUD operations
import { MongoClient, ObjectID } from 'mongodb';

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'Task-App';

MongoClient.connect(connectionURL,{ useNewUrlParser : true },(error, client) => {
    if(error) {
        return console.log(error);
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Parshant Yadav',
    //     age: 24
    // },(error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result);
    // })

    db.collection('tasks').insertMany([
           {
            description : 'New Description',
            completed : true
           },{
            description : 'New Description 1',
            completed : false
           },{
            description : 'New Description 2',
            completed : true
           }
        ], (error,result) => {
            if(error){
                console.log('NOt able to insert multiple queries')
            }

            console.log(result)
        }
    )
})