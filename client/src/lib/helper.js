const bophans = [
	{ number: 1, name: "HB1" },
	{ number: 2, name: "HB2" },
	{ number: 3, name: "HB3" },
	{ number: 4, name: "HB4" },
];
const roles = [
	{ number: 0, name: "Staff" },
	{ number: 1, name: "Manager" },
	{ number: 2, name: "Admin" },
]

export const changeBophanToName = (num) => {
	return bophans.filter(bophan => bophan.number === Number(num))[0].name;
}

export const changeRoleToName = (num) => {
	return roles.filter(role => role.number === Number(num))[0].name;
}
