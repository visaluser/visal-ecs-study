const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to web.visops.online');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

