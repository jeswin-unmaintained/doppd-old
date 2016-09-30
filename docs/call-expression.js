/*
  doppd.com/keys.push([\"poole\", "pooles_public_key"])"
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
        "name": "keys"
      },
      "property": {
        "type": "Identifier",
        "name": "push"
      }
    },
    "arguments": [
      {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": "poole",
            "raw": "\"poole\""
          },
          {
            "type": "Literal",
            "value": "pooles_public_key",
            "raw": "\"pooles_public_key\""
          }
        ]
      }
    ]
  }
}
