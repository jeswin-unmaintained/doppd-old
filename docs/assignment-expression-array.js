/*
  songs.schema=[["title", "string"], ["artist", "string"]]
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
        "type": "Identifier",
        "name": "songs"
      },
      "property": {
        "type": "Identifier",
        "name": "schema"
      }
    },
    "right": {
      "type": "ArrayExpression",
      "elements": [
        {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "title",
              "raw": "\"title\""
            },
            {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\""
            }
          ]
        },
        {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "artist",
              "raw": "\"artist\""
            },
            {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\""
            }
          ]
        }
      ]
    }
  }
}
