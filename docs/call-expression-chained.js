/*
songs.filter(s => s.artist === "Jeff Buckley").map(s => s.artist)
*/

export default {
  "type": "ExpressionStatement",
  "expression": {
    "type": "CallExpression",
    "callee": {
      "type": "MemberExpression",
      "computed": false,
      "object": {
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
            "name": "filter"
          }
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "s"
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "s"
                },
                "property": {
                  "type": "Identifier",
                  "name": "artist"
                }
              },
              "right": {
                "type": "Literal",
                "value": "Jeff Buckley",
                "raw": "\"Jeff Buckley\""
              }
            },
            "generator": false,
            "expression": true
          }
        ]
      },
      "property": {
        "type": "Identifier",
        "name": "map"
      }
    },
    "arguments": [
      {
        "type": "ArrowFunctionExpression",
        "id": null,
        "params": [
          {
            "type": "Identifier",
            "name": "s"
          }
        ],
        "body": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "s"
          },
          "property": {
            "type": "Identifier",
            "name": "artist"
          }
        },
        "generator": false,
        "expression": true
      }
    ]
  }
}
