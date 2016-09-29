Create a new list by writing on to it
doppd.com/songs Morphine-Cure for Pain
=> returns id of new record
Same as:
doppd.com/songs?Morphine-Cure for Pain

You could also do this with
doppd.com/songs/type string
=> returns nothing

Lists can also have arbitrary properties
doppd.com/songs/maintainer Mel
=> returns nothing
Reserved properties: ["type", "keys", "read", "write", "delete", "admin", "length"]

Lists can be complex
doppd.com/songs/type name string, artist string, like boolean
=> returns nothing

Lists can be specified in JSON as well.
doppd.com/songs/type [["name", "string"], ["artist", "string"], ["like", "boolean"]]
=> returns nothing

Write to it
doppd.com/songs Cure for Pain, Morphine, yes
=> returns id

You can write as JSON too, if that's your thing
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
dopped.com/songs/.poole <poole's sig> Cure for Pain, Morphine, yes
=> returns id

Make it readable only by your friend .bowman
dopped.com/songs/<id_of_song>/read <poole's sig> .bowman

Maybe HAL can read too too
dopped.com/songs/<id_of_song>/read <poole's sig> .hal-9000

Nobody else can read
dopped.com/songs/<id_of_song>

You can set permissions on lists as well. Only .poole and bowman can read/write.
doppd.com/songs/write .poole <poole's sig> .bowman
doppd.com/songs/read .poole <poole's sig> .bowman

Now the list is not world writable
doppd.com/songs Sussudio, Phil Collins, yes
=> returns nothing

Queries are defined on the query field
doppd.com/songs/query/by-owner name string, query s => s.filter(s.owner == ${name})
doppd.com/songs/query/by-owner [["name", "string"], ["query", `s => s.filter(s.owner == ${name}`]]

Do a query
doppd.com/songs/query/by-owner ".poole"
=> Returns matches
