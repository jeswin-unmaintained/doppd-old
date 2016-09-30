Hello Dr.Poole, welcome to NodeJam.
If you know basic JavaScript we can get started.

To do anything interesting, you need a public-key pair.
We'll generate it for you. <link>
Remember, how you store it is not our problem.

In the following examples, we'll use HTTP GET.
But feel free to use POST is the message is too long.
Whatever comes after the first slash must be in body.

Ok, now give us your public key.
You do that by pushing a value to the array called keys.
```
doppd.com/keys.push(["poole", pooles_public_key])
=> returns length of keys, which equals (id of inserted row) + 1
```

You can see what you just did
```
doppd.com/keys[<id>]
```

Set a variable
```
doppd.com/jeffb = { name: "Jeff Buckley", born: 1966 }
```

Access that variable
```
doppd.com/jeffb
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

So is filtering
```
doppd.com/songs.filter(s => s.artist === "Jeff Buckley")
=> returns list of songs written by Jeff Buckley
```

Read specific fields
```
doppd.com/songs.filter(s => s.artist === "Jeff Buckley").map(s => s.artist);
```

Pagination
```
doppd.com/songs.slice(0,10);
```

Ordering is relatively harder. Need ideas. :/
```
doppd.com/songs.filter(s => s.artist === "Jeff Buckley").sort((a, b) => a.title > b.title)
```

Update a single field
```
doppd.com/songs[<id>].title="Lover, You Should've Come Over"
```

Update one or many fields
```
doppd.com/songs[<id>]={ ...songs[<id>], title: "Lover, You Should've Come Over", artist: "Jeff Buckley" }
```

Delete an item
```
doppd.com/songs[<id>]=undefined
```

Define a function
First parameter will be an object (key-val pair) representing everything inside doppd.
```
doppd.com
--- body
hasManySongs = async function(doppd, threshold) {
  const numSongs = await doppd.query(x => x.songs.length);
  return numSongs > threshold;
}
=> returns true/false
```

Do it in single line, too
```
doppd.com/hasManySongs = async function(doppd, threshold) { const numSongs = await doppd.query(x => x.songs.length); return numSongs > threshold; }
=> returns true/false
```

Call a function
```
doppd.com/hasManySongs(10)
=> returns songs.length + 10
```
