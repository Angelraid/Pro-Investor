// const { lazy } = require('react')

// const swiper = new Swiper('.swiper', {
// 	// Optional parameters
// 	// direction: 'vertical',
// 	loop: true,
// })

const element = document.getElementById('phone')
const maskOptions = {
	mask: '+{7}(000)000-00-00',
	mask: Number,
	min: 0,
	max: 11,
}
const mask = IMask(element, maskOptions)

var mask3 = new IMask(document.getElementById('#oemail'), {
	mask: function (value) {
		if (/^[a-z0-9_\.-]+$/.test(value)) return true
		if (/^[a-z0-9_\.-]+@$/.test(value)) return true
		if (/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value)) return true
		if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value)) return true
		if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value)) return true
		if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value)) return true
		if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
			return true
		return false
	},
})

// const togglePassword = document.querySelector('#togglepassword')
// const password = document.querySelector('#password')

// togglePassword.addEventListener('click', function (e) {
// 	const type =
// 		password.getAttribute('type') === 'password' ? 'text' : 'password'
// 	password.setAttribute('type', type)

// 	this.classList.toggle('eye-slash')
// })

const toggleInputType = event => {
	const target = event.target
	const passwordWrapper = target.closest('.password-wrapper')
	const passwordInput = passwordWrapper.querySelector('.password-input')
	const passwordInputType = passwordInput.type

	if (passwordInputType === 'password') {
		passwordInput.type = 'text'
		target.classList.add('active')
		return
	}
	passwordInput.type = 'password'
	target.classList.remove()
}
