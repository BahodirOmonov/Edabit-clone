let select = document.querySelector('select')
let condition = document.querySelector('.condition')
let check = document.querySelector('.check')
let textFunction = document.querySelector('#function')
let testDiv = document.querySelector('.test')

let selectCheck = 0

function renderTasks(data) {
	for(let i = 0; i < data.length; i++) {
		let option = document.createElement('option')
		option.value = i
		option.textContent = `Task-${i + 1}`
		select.append(option)
	}
}

renderTasks(masalalar)

textFunction.value = 'function' + masalalar[0]['returns'].slice(8) + ' {}'

condition.innerHTML = `
	<p>${masalalar[0]["task"]}</p>
	<img src='./img/1-masala.png' alt="Examples">
`

select.onclick = event => {
	textFunction.innerHTML = null
	textFunction.value ='function' + masalalar[event.target.value]['returns'].slice(8) + ' {}'
	testDiv.innerHTML = null
	condition.innerHTML = ""
	condition.innerHTML = `
	<p>${masalalar[event.target.value]["task"]}</p>
	<img src=${masalalar[event.target.value]["imgSrc"]} alt="Examples">
	`
	selectCheck = event.target.value
}	


check.onclick = () => {
	try {
		let isFunction = new Function(...masalalar[selectCheck]["argument"], textFunction.value + masalalar[selectCheck]['returns'])
		testDiv.innerHTML = null
		for(let i = 0; i < masalalar[selectCheck]["checkValue"].length; i++) {
			let p = document.createElement('p')
			if (isFunction(masalalar[selectCheck]['checkValue'][i]) === masalalar[selectCheck]['value'][i]) {
				p.innerHTML = `
				<img src="./img/complete.png" alt="complete" class="complete">
				<span style = "color: green">Test Passed: Value == ${masalalar[selectCheck]['value'][i]}</span>
				`
			}
			else {
				p.innerHTML = `
				<img src="./img/failed.png" alt="complete" class="failed">
				<span style = "color: red;">FAILED: Expected: ${masalalar[selectCheck]['value'][i]}, instead got: ${isFunction(masalalar[selectCheck]['checkValue'][i])}</span>
				`
			}
			testDiv.append(p)
		}
	} catch (error) {
		let p = document.createElement('p')
		p.innerHTML = `
			<img src="./img/failed.png" alt="complete" class="failed">
			<span style = 'color:red;'>${error}</span>
		`
		testDiv.append(p)
	}
}
