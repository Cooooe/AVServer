function getConnData(){
	var connData =  {
		host : 'localhost',
		port : 3306,
		user : 'root',
		password : 'apmsetup',
		database : 'node',
		connectionLimit : 20,
		waitForConnections : false
	};

	console.log('===========================================S :: get Connection Data :: S===========================================');
	for(key in connData){
		console.log(key + ' : ' + connData[key]);
	}
	console.log('===========================================E :: get Connection Data :: E===========================================');
	return connData;
}

exports.getConnData = getConnData;