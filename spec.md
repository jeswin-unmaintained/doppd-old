Create a new list by writing on to it
doppd.com/songs Morphine's Cure for Pain
=> returns id of new record
Same as:
doppd.com/songs?Morphine's Cure for Pain
doppd.com/songs ["Morphine's Cure for Pain"]
doppd.com/songs?["Morphine's Cure for Pain"]

You could also do this with
doppd.com/songs/type string
Same as:
doppd.com/songs/type?string
doppd.com/songs/type ["string"]
doppd.com/songs/type?["string"]
=> returns nothing

We'll (mostly) leave out the "Same as" from now on.
You get the drift.

Lists can also have arbitrary properties
doppd.com/songs/maintainer Mel
=> returns nothing
Reserved properties: ["type", "keys", "read", "write", "delete", "admin", "length", "queries"]

Lists can be complex
doppd.com/songs/type name string, artist string, like boolean
Same as:
doppd.com/songs/type [["name", "string"], ["artist", "string"], ["like", "boolean"]]
=> returns nothing

Write to it
doppd.com/songs Cure for Pain, Morphine, yes
Same as:
doppd.com/songs ["Cure for Pain", "Morphine", true]
=> returns id

If too long, use HTTP POST
POST doppd.com/songs ["Cure for Pain", "Morphine", true, "......"]
=> returns id

Read the list
doppd.com/songs
=> returns list of records

Remember, this list is world readable. Let's make it a little safer. Add you public_key.
doppd.com/.poole <poole's public_key>
=> returns nothing

Add a song
doppd.com/songs/.poole <poole's sig> Cure for Pain, Morphine, yes
=> returns id

Make it readable only by your friend .bowman
doppd.com/songs/<id_of_song>/read <poole's sig> .bowman

Now .bowman can read it
doppd.com/songs/<id_of_song> .bowman <bowman's sig>

Nobody else can read
doppd.com/songs/<id_of_song>
=> Error

Ok, we can trust HAL too. Add as many.
doppd.com/songs/<id_of_song>/read <poole's sig> .hal9000

You can set permissions on lists as a whole. Only .poole and bowman can read/write.
doppd.com/songs/write .poole <poole's sig> .bowman
doppd.com/songs/read .poole <poole's sig> .bowman

Now the list is not world writable
doppd.com/songs Sussudio, Phil Collins, yes
=> Error, phew.

Queries are defined on the queries field
doppd.com/songs/queries/by-owner name string, query s => s.filter(s.owner == ${name})
doppd.com/songs/queries/by-owner [["name", "string"], ["query", `s => s.filter(s.owner == ${name}`]]

Do a query
doppd.com/songs/query/by-owner .poole
doppd.com/songs/query/by-owner [".poole"]
=> Returns matches

Delete everything .bowman has written
doppd.com .bowman <bowman's sig> undefined

Delete everything .bowman has written into a list
doppd.com/songs .bowman <bowman's sig> undefined
