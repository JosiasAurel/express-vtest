const app = require("express")()

app.get("/api", (req, res) => {
	res.send(`
		<!DOCTYPE html>
		<html lang="en">
		
		<head>
		  <meta charset="UTF-8">
		  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
		  <meta name="viewport" content="width=device-width, initial-scale=1">
		  <title>JA λ </title>
		  <!-- HTML -->
		  <!-- Custom Styles -->
		  <style type="text/css" media="all">
		    body {
		    font-size: 15pt;
		    font-family: sans-serif;
		    background-color: #818BF5;
		}
		
		h2 {
		  text-align: center;
		  color: white;
		}
		  </style>
		</head>
		
		<body>
		  <div>
		    <h2>A serverless  λ on vercel</h2>
		  </div>
		  
		  <h2>Yay! It works</h2>
		  
		</body>
		
		</html>
	`)
})

app.get("/api/name/:name", (req, res) => {
	res.send(`
		<!DOCTYPE html>
		<html lang="en">
		
		<head>
		  <meta charset="UTF-8">
		  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
		  <meta name="viewport" content="width=device-width, initial-scale=1">
		  <title>JA λ </title>
		  <!-- HTML -->
		  <!-- Custom Styles -->
		  <style type="text/css" media="all">
		    body {
		    font-size: 15pt;
		    font-family: sans-serif;
		    background-color: #818BF5;
		}
		
		h2 {
		  text-align: center;
		  color: white;
		}
		  </style>
		</head>
		
		<body>
		  <div>
		    <h2>A serverless  λ on vercel</h2>
		  </div>
		  
		  <h2>Hi ${req.params.name}</h2>
		  
		</body>
		
		</html>
	`)
})

app.listen(4000, () => console.log("Running"))

module.exports = app
