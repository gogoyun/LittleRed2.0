//計算字元長度(中文=2bytes)
export function getLength(str) {
	let totLength = str ? str.replace(/[\u4e00-\u9fff]/g,'xx').length : 0;
	return  totLength;
}
//文字過長替換...
export function overReplace(text, num) {
	const totLen = getLength(text);
	if(totLen>num){
		return text.substring(0, num)+'...';
	}else{
		return text;
	}
}