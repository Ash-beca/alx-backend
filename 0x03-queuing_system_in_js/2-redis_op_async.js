/**
 * @module 2-redis_op_async
 */
import { createClient, print } from 'redis';
import { promisify } from 'util';

// Instantiate a redis client object
const client = createClient();

// Capture an error event and log an error message to console
client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
});

// Log connection succes to the console
console.log('Redis client connected to the server');


function setNewSchool(schoolName, value) {
  client.SET(schoolName, value, print);
}

// Promisify get method of redis client
const getAsync = promisify(client.GET).bind(client);


async function displaySchoolValue(schoolName) {
  const reply = await getAsync(schoolName);
  console.log(reply);
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
