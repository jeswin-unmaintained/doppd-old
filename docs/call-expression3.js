/*
/songs.slice(0,10);
*/
export default {
  "type": "ExpressionStatement",
  "expression": {
    "type": "CallExpression",
    "callee": {
      "type": "MemberExpression",
      "computed": false,
      "object": {
        "type": "Identifier",
        "name": "songs"
      },
      "property": {
        "type": "Identifier",
        "name": "slice"
      }
    },
    "arguments": [
      {
        "type": "Literal",
        "value": 0,
        "raw": "0"
      },
      {
        "type": "Literal",
        "value": 10,
        "raw": "10"
      }
    ]
  }
}
