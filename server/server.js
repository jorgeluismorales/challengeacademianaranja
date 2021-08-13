const { app, port } = require('./app')

require("./passport");
app.listen(port, () => {

    console.log(`El servidor se está ejecutando en el port ${port}`);

});