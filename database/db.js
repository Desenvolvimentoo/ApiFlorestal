import mongoose from 'mongoose';

async function connectDatabase(){
   await mongoose.connect(
        "mongodb+srv://desenvolvimento:-D3s3nv0lv1m3nt0-@apiflorestal.ogmavri.mongodb.net/?retryWrites=true&w=majority&appName=apiflorestal"
        )
}

export default connectDatabase;
