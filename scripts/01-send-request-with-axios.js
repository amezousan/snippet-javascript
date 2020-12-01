/***
 * https://docs.postman-echo.com/
 * https://www.npmjs.com/package/axios#request-config
 * https://www.npmjs.com/package/axios#response-schema
 */

const axios = require('axios');

var config = {
  headers: { 'DummyHeader': 'DummyHeaderValue' }
};

var url = 'https://postman-echo.com/get?foo1=bar1&foo2=bar2'

const getURL = async () => {
  return await axios.get(url, config).then((response) => response.data)
}

const getResult = async () => {
  let result;
  await getURL()
  .then((data) => {
    console.log("===getURL: ", data)
    result = data;
  })

  console.log("===result: ", result)
  return result
}

function main() {
  // ===getURL:
  // ===result:  {
  //   args: { foo1: 'bar1', foo2: 'bar2' },
  //   headers: {
  //     'x-forwarded-proto': 'https',
  //     'x-forwarded-port': '443',
  //     host: 'postman-echo.com',
  //     'x-amzn-trace-id': 'Root=1-5fc6541f-341ffa107c78e7f05831c75b',
  //     accept: 'application/json, text/plain, */*',
  //     dummyheader: 'DummyHeaderValue',
  //     'user-agent': 'axios/0.21.0'
  //   },
  //   url: 'https://postman-echo.com/get?foo1=bar1&foo2=bar2'
  // }
  getResult();
}

main();