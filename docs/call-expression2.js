/*
  artists.push("Jeff Buckley")
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
        "name": "artists"
      },
      "property": {
        "type": "Identifier",
        "name": "push"
      }
    },
    "arguments": [
      {
        "type": "Literal",
        "value": "Jeff Buckley",
        "raw": "\"Jeff Buckley\""
      }
    ]
  }
}
