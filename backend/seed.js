const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/amazonclone', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch(err => {
  console.error('❌ Connection failed', err);
});

const sampleProducts = [
  {
    name: 'Apple iPhone 14',
    price: 999,
    image: 'https://via.placeholder.com/200',
    description: 'The latest iPhone with A16 Bionic chip.'
  },
  {
    name: 'Samsung Galaxy S22',
    price: 899,
    image: 'https://via.placeholder.com/200',
    description: 'Powerful Android flagship phone.'
  },
  {
    name: 'Sony Headphones',
    price: 299,
    image: 'https://via.placeholder.com/200',
    description: 'Noise-cancelling over-ear headphones.'
  }
];

async function seedDB() {
  await Product.deleteMany({});
  await Product.insertMany(sampleProducts);
  console.log('✅ Database seeded');
  mongoose.disconnect();
}

seedDB();
