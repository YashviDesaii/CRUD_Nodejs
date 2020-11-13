/**
 *
 * @author arman
 * @since 25/2/2016.
 *
 */
'use strict';

const config = {
	local: {
		mode: 'local',
		port: 3000,
		mysql: {
      host: 'localhost',
      driver: 'mysql',
      user: 'root',
      database: 'node_crud',
      password: ''
		}
	},
	staging: {
		mode: 'staging',
		port: 4000,
		mysql: {
      host: 'HOST_NAME',
      driver: 'mysql',
      user: 'USER_NAME',
      database: 'DB_NAME',
      password: ''
		}
	},
	production: {
		mode: 'production',
		port: 5000,
		mysql: {
      host: 'HOST_NAME',
      driver: 'mysql',
      user: 'USER_NAME',
      database: 'DB_NAME',
      password: ''
		}
	}
};

module.exports = (mode) => {
	return config[mode || process.argv[2] || 'local'] || config.local;
};