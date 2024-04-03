import express from 'express';
import router from './router';
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router);

export default app
const port = 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
