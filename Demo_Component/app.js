const express = require('express');										
const path = require('path');										
const pageRoutes = require('./routes/pageRoutes');										
										
const app = express();										
const PORT = process.env.PORT || 4000;		
const mongoose = require('mongoose');								
										
// Cấu hình view engine										
app.set('view engine', 'ejs');										
app.set('views', path.join(__dirname, 'views'));										
										
// Cấu hình thư mục static cho CSS, JavaScript, và hình ảnh										
app.use(express.static(path.join(__dirname, 'public')));	

// Connect Database
mongoose.connect('mongodb+srv://vinhpham220212:vinh13012004@cluster0.w6qru.mongodb.net/ERD_sample?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
										
// Sử dụng các routes										
app.use('/', pageRoutes);										
								
app.use('/assets', express.static('/Users/vinhpham/Desktop/NodeJs VNUK/Demo_Component/public/assets'));

// Bắt đầu server										
app.listen(PORT, () => {										
console.log(`Server is running on http://localhost:${PORT}`);										
});										