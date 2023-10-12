//文字過長替換...
export function overReplace(text, num) {
	if(text.length>num){
		return text.substring(0, num)+'...';
	}else{
		return text;
	}
}