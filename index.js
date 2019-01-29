const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//IMPORTANTE: Se registran los middlewares. Deben registrarse antes de las rutas ya que el orden afecta
require('./2_middleware')(app)
.then(() => {
    app.use(bodyParser.json());
    app.use('/routing', require('./1_routing'));
    require('./1_routing/2_static')(app, express);

    return require('./3_errors')(app);
})
.then(() => {
    app.listen(3000, () => {
        console.log('Express is listening on port 3000');
    });
});