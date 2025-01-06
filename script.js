function makeid(l) {
  // write your code here
	let string='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result='';
	for(let i=0;i<l;i++)
		{
			let ch=Math.floor(Math.random()*string.length);
			result+=string.charAt(ch);
		}
	return result;
}

// Do not change the code below.

const l = prompt("Enter a number.");
alert(makeid(l));
