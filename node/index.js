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
			query = "select u.user_id,CONCAT(u.first_name, ' ', u.last_name) as name,s.asset_no,s.software,s.eform_no,s.type,s.expiry from software s,user u where s.asset_no=u.asset_no and s.asset_no in (select asset_no from user where project_id='ATVIAMS')";
			break;
		case '/getuserdata':
			query = 'SELECT * FROM `user`';
			break;
		case '/getassetdata':
			query = "select u.user_id,CONCAT(u.first_name, ' ', u.last_name) as name,a.asset_no,a.purchase_date,a.allocate_date,a.expiry_date,a.model_num from asset a,user u where a.asset_no=u.asset_no and a.asset_no in (select asset_no from user where project_id='ATVIAMS')";
			break;
      case '/getpeople':
    			query = 'select user_id,first_name,last_name,Email,DOB,mobile from user where project_id="ATVIAMS"';
    	break;
    case '/authentication':
  			query = 'select user_id,role_id,project_id from user where user_id="AN48808" and PASSWORD="anitha@123"';
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
