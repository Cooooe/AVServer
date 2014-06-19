function getConnData(){
	var connData =  {
		host : '222.111.30.154',
		port : 3306,
		user : 'avsuser',
		password : 'avs123#',
		database : 'avsuser',
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