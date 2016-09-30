/*
  songs.push({ "title": "Lover You Should've Come Over", "artist": "Jeff Buckley" })
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
        "name": "push"
      }
    },
    "arguments": [
      {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "key": {
              "type": "Literal",
              "value": "title",
              "raw": "\"title\""
            },
            "computed": false,
            "value": {
              "type": "Literal",
              "value": "Lover You Should've Come Over",
              "raw": "\"Lover You Should've Come Over\""
            },
            "kind": "init",
            "method": false,
            "shorthand": false
          },
          {
            "type": "Property",
            "key": {
              "type": "Literal",
              "value": "artist",
              "raw": "\"artist\""
            },
            "computed": false,
            "value": {
              "type": "Literal",
              "value": "Jeff Buckley",
              "raw": "\"Jeff Buckley\""
            },
            "kind": "init",
            "method": false,
            "shorthand": false
          }
        ]
      }
    ]
  }
}
