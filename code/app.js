const timeout = (ss) => {
	return new Promise((resolve, reject)=>{
			setTimeout(()=>{
				resolve(ss)
			},10);
	})
}
timeout(`hello`).then(res=>{
	return timeout(`${res} lagou`)
}).then(res=>{
	return timeout(`${res} i love u`)
}).then(res=>{
	console.log(res)
})