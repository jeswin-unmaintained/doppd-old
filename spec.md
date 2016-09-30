Hello Dr.Poole, welcome to NodeJam.
If you know basic JavaScript we can get started.

To do anything interesting, you need a public-key pair.
We'll generate it for you. <link>
Remember, how you store it is not our problem.

In the following examples, we'll use HTTP GET.
But feel free to use POST is the message is too long.
Whatever comes after the first slash must be in body.

Ok, now give us your public key.
```
doppd.com/keys.push("poole", pooles_public_key)
=> returns length of keys, which equals (id of inserted row) + 1
```

You can see what you just did
```
doppd.com/keys[<id>]
```

See that? it is just JS!

Adding an item automatically creates a list, if it doesn't exist.
This creates a list called artists.
```
doppd.com/artists.push("Jeff Buckley");
=> returns length of artists, which again equals (id of inserted row) + 1
```

You can create a list without adding anything, too.
This creates a list with two fields.
```
doppd.com/songs.schema=[["title", "string"], ["artist", "string"]]
=> returns [["title", "string"], ["artist", "string"]]
```

Insert a new item into this list
```
doppd.com/songs.push({ "title": "Lover You Should've Come Over", "artist": "Jeff Buckley" })
=> returns songs.length
```

Reading the list is straight forward.
```
doppd.com/songs
=> returns list of songs in the list
```

Update a field
```
doppd.com/songs[<id>]={ ...a[<id>], title: "Lover, You Should've Come Over" }
```

Delete an item
```
doppd.com/songs[<id>]=undefined
```

Define a function
First parameter will be an object (key-val pair) representing everything inside doppd.
```
doppd.com/hello=(doppd,x)=>doppd.songs.length+x
```

Or this
```
doppd.com
--- body
hello = function(doppd, x) {
  return doppd.songs.length + x;
}
```

Call a function
```
doppd.com/hello(10)
=> returns songs.length + 10
```
