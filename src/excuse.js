
a = ["The", 'A', 'That', 'This', 'Some']
b = ["Devil", "Dog", "Robber", "Kitten", "Bear","Fish"]
c = ["stole", "ate", "hid", "burried", "ripped", "tore", "broke"]
d = ["my homework", "my car", "my money", "my keys", "phone",]


aa = Math.floor(Math.random() * a.length)
bb = Math.floor(Math.random() * b.length)
cc = Math.floor(Math.random() * c.length)
dd = Math.floor(Math.random() * d.length)

finished = a[aa] +" "+b[bb] +" "+ c[cc] +" "+ d[dd] 

document.getElementById("lies").innerHTML = finished;