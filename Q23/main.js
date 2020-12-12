console.log('Problem Solving Q:23 ');

/*parseQueryString   */

/*  
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.
If the url does not contain a query string, return undefined
*/

function parseQueryString(url) {
  let desired1 = (url).replace((/https?:\/\/[^\?]+/g), '')
  let desired = desired1.replace(/[^\w\s]/gi, " ").split(" ")
return desired
}

/* 
parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
Examples:
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/