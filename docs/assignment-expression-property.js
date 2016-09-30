/*
  songs[10].title="Lover, You Should've Come Over"
*/
export default {
  "type": "ExpressionStatement",
  "expression": {
    "type": "AssignmentExpression",
    "operator": "=",
    "left": {
      "type": "MemberExpression",
      "computed": false,
      "object": {
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
      "property": {
        "type": "Identifier",
        "name": "title"
      }
    },
    "right": {
      "type": "Literal",
      "value": "Lover, You Should've Come Over",
      "raw": "\"Lover, You Should've Come Over\""
    }
  }
}
