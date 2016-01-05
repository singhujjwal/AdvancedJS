
function add(x, y){

	function parseArg(n){

		if(Array.isArray(n)) return arrayValue(n);

		if ( typeof n === 'function') return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n,10);
	}

	function arrayValue(arr){
		var result = 0;
		for(var i =0; i < arr.length; i++){
			result +=  parseArg(arr[i]);
		}
		return result;
	}

	

	var val = 0;
	for( var i =0; i < arguments.length; i ++)
		val += parseArg(arguments[i]);
	return val;
}


