var express = require('express');
var app = express();

app.get('/', (req, res, next) => {

    res.send('Mande una expresion en la url');
    res.end();
});

app.get('/:id', (req, res, next) => {
  var expresion = req.params.id;

  try {
    result = eval(expresion);
  } catch(error) {
    result = error;
  }

  res.send(result.toString());
  res.end();
})

app.listen(process.env.PORT || '3000');
