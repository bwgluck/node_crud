import mongoose from 'mongoose'

const connection: any = {}

async function connectDb() {
    if (connection.isConnected) {
        // Use existing db connection if connected
        console.log('Using existing db connection')
        return;
    }

    // Use new db connection
    const mongoSrv: any = process.env.MONGO_SRV
    const db = await mongoose.connect(mongoSrv)
    console.log('DB connected')
    connection.isConnected = db.connections[0].readyState
}

export default connectDb
