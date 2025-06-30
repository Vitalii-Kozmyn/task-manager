import mongoose from 'mongoose';

const URI = 'mongodb+srv://vitaliikozmyn2:wdp2vQa8seAbQma8@cluster0.dlulk4c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(URI).then(() => {
    console.log('Connect to db');
}).catch((e) => {
    console.error(e);
});