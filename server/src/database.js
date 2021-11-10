import mongoose from 'mongoose';

export const connectDB = async function () {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false
    });
    console.log('Database is connected ✔');
  } catch (error) {
    console.log('Database connection error: ', error.message);
  }
}