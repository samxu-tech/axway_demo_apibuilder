/*
 * Use this file to configure you mysql data connector
 *
 * By default, MYSQL username and password are environment variables.
 * username MYSQL_USER, password MYSQL_PASSWORD
 * Example setting of environment variables:
 * linux/mac: export MYSQL_PASSWORD=password
 * windows: setx MYSQL_PASSWORD 'password'
 */
module.exports = {
	connectors: {
		mysql: {
			connector: '@axway/api-builder-plugin-dc-mysql',
			connectionPooling: true,
			connectionLimit: 10,
			host: 'mysqlserver',
			port: 3306,
			database: 'oms',
			user: 'root',
			password: 'Axway123!',

			// Create models based on your schema that can be used in your API.
			generateModelsFromSchema: true,

			// Whether or not to generate APIs based on the methods in generated models.
			modelAutogen: false
		}
	}
};
