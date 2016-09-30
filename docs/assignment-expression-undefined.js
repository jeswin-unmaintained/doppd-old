/*
songs[10]=undefined
*/

export default {
  "type": "ExpressionStatement",
  "expression": {
    "type": "AssignmentExpression",
    "operator": "=",
    "left": {
      "type": "MemberExpression",
      "computed": true,
      "object": {
        "type": "Identifier",
        "name": "songs"
      },
      "property": {
        "type": "Literal",
        "value": 10,
        "raw": "10"
      }
    },
    "right": {
      "type": "Identifier",
      "name": "undefined"
    }
  }
}
