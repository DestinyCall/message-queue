if (process.env.NODE_ENV !== 'production')
{
  require('dotenv').config();
}
console.log('Server running in', process.env.NODE_ENV, 'mode!');