// loads a page via ajax
function loadPage(link) {
	let request = new XMLHttpRequest();
	request.open('GET', link);
	request.send();

	request.onload = function() {
		document.getElementById('main_div').innerHTML = request.response;
	}
}

// sends a request for registration
function signUp() {
	if (isValid(true)) {
		let login = document.getElementById('login').value;
		let email = document.getElementById('email').value;
		let password = document.getElementById('password').value;

		let authorizator = new Authorizator(login, email, password, 'http://localhost:8080/task3-1/authorization');
		authorizator.doRequest('signUp').then(
			result => {
				if (result.status == 'success') {
					loadPage('main.html');
				}
			},
			error => alert(JSON.stringify(error))
		);
	}
}

// sends a request for authorization
function signIn() {
	if (isValid(false)) {
		let login = document.getElementById('login').value;
		let password = document.getElementById('password').value;

		let authorizator = new Authorizator(login, 'none', password, 'http://localhost:8080/task3-1/authorization');
		authorizator.doRequest('signIn').then(
			result => {
				if (result.status == 'success') {
					loadPage('main.html');
				}
				else {
					loadPage('registr.html');
				}
			},
			error => alert(JSON.stringify(error))
		);
	}
}

// changes windows foe reigistration/authorization
function chooseAction() {
	let action = document.getElementById('choosing_field').innerText;
	if (action == 'Login') {
		loadPage('authorization.html');
		document.getElementById('choosing_field').innerText = 'Registration';
	}
	else if (action == 'Registration') {
		loadPage('registr.html');
		document.getElementById('choosing_field').innerText = 'Login';
	}
}

// finds out whether fields are filled correctly
function isValid(emailFlag) {
	let validationStatus = true;
	let validator = new Validator();
	document.getElementById('login_status').innerText = '';
	if (!validator.validate(document.getElementById('login').value, 'login')) {
		document.getElementById('login_status').innerText = 'login is not valid';
		validationStatus = false;
	}
	if (emailFlag == true) {
		document.getElementById('email_status').innerText = '';
		if (!validator.validate(document.getElementById('email').value, 'email')) {
			document.getElementById('email_status').innerText = 'email is not valid';
			validationStatus = false;
		}
	}
	document.getElementById('password_status').innerText = '';
	if (!validator.validate(document.getElementById('password').value, 'password')) {
		document.getElementById('password_status').innerText = 'password is not valid';
		validationStatus = false;
	}
	return validationStatus;
}