import mongoose from 'mongoose';

const setupChangeStreams = () => {
  const db = mongoose.connection;
  const usersCollection = db.collection('users');
  const changeStream = usersCollection.watch();

  changeStream.on('change', (change) => {
    if (change.operationType === 'insert') {
      console.log('change stream called');
    }
  });
};

export default setupChangeStreams;