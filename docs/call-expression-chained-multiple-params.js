/*
songs.filter(s => s.artist === "Jeff Buckley").sort((a, b) => a.title > b.title)
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
        "name": "sort"
      }
    },
    "arguments": [
      {
        "type": "ArrowFunctionExpression",
        "id": null,
        "params": [
          {
            "type": "Identifier",
            "name": "a"
          },
          {
            "type": "Identifier",
            "name": "b"
          }
        ],
        "body": {
          "type": "BinaryExpression",
          "operator": ">",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "a"
            },
            "property": {
              "type": "Identifier",
              "name": "title"
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "b"
            },
            "property": {
              "type": "Identifier",
              "name": "title"
            }
          }
        },
        "generator": false,
        "expression": true
      }
    ]
  }
}
