const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// Routes
const campaignRoutes = require('./routes/campaign');
app.use('/api', campaignRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
