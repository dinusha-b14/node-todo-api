const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany

    // db.collection('Todos').deleteMany({text: 'Go to sleep'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne

    // db.collection('Todos').deleteOne({text: 'Go to sleep'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete

    db.collection('Users').findOneAndDelete({
        _id: new ObjectId('5bc46e1a7397590a569d16cc')
    }).then((result) => {
        console.log(result);
    });

    // client.close();
});
