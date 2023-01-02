module.exports = {
    async checkPermissions(userPermissions, requiredPermissions) {

        if (userPermissions == null) return false

		const allOrEvery = requiredPermissions.every(perm => userPermissions.includes(perm)) || userPermissions.includes('*')

		if (allOrEvery) return true

		const userPermissionsArray = userPermissions.map(perm => perm.split('.'))
		const requiredPermissionsArray = requiredPermissions.map(perm => perm.split('.'))
		const userPermissionsArrayLength = userPermissionsArray.length
		const requiredPermissionsArrayLength = requiredPermissionsArray.length

		for (let i = 0; i < userPermissionsArrayLength; i++) {
			for (let j = 0; j < requiredPermissionsArrayLength; j++) {
				if (userPermissionsArray[i][0] === requiredPermissionsArray[j][0] && userPermissionsArray[i][1] === '*' && requiredPermissionsArray[j][1] !== '*') {
					return true
				}
			}
		}

		return false
	}
}