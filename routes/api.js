var calledTime =0;
exports.time = function(req, res){
  calledTime +=1;
  var obj = {
  	"server name": "pu.edu.tw",
  	"now": new Date().toISOString(),
  	"count": calledTime

  };
  res.send(obj);
};