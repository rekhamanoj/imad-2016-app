var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content = {
    title : 'Article One',
    heading: 'Article one',
    date : 'Nov 1',
    content : `<p> 
              Riyadh foils Daesh plot to bomb UAE-Saudi football match
             </p>
             <hr/>
             <p>
              Eight suspects arrested for planning killing while nine more on the run 
             </p>
              <p>
              Four suspects who admitted their activitie as a cell and their links with Daesh confessed they had monitored several securiy men in Riyadh ,abuk and the eastern province.Other suspects had planned to attack cvilians in the eastern city of Qatif and stage a car bob attack on a visiting football team at he stadium.
             
             </p>`
    
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res)
{res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));    });

app.get('/article-two',function(req,res)
{res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));    });

app.get('/article-three',function(req,res)
{res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));    });

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
