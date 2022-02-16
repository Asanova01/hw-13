export const validEmailRegex = RegExp(
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
	);
export const validateUserName = RegExp(/[0-9]/)
export const validatPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/