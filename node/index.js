var http = require('http');
var url = require('url');
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "zenras"
});
http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	var query = "";
	switch (q.pathname) {
		case '/getalldata':
			query = 'SELECT user.* , asset.* , project.* ,role.* from user,asset,project,role  WHERE user.asset_no = asset.asset_no and user.role_id = role.role_id and user.project_id = project.project_id';
			break;
		case '/getroledata':
			query = 'SELECT * FROM `role`';
			break;
		case '/getprojectdata':
			query = 'SELECT * FROM `project`';
      break;
		case '/getsoftwaredata':
			query = 'SELECT * FROM `software`';
			break;
		case '/getuserdata':
			query = 'SELECT * FROM `user`';
			break;
		case '/getassetdata':
			query = 'SELECT * FROM `asset`';
			break;
		default:
	}
	if(query!=""){
		con.query(query, function (err, result, fields) {
			if (err) throw err;
			res.write(JSON.stringify({"status": 200, "error": null, "response": result}));
			res.end();
		});
	}
	else {
		res.end();
	}
}).listen(8080);
