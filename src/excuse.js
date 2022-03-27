
a = ["The", 'A']
b = ["Devil", "Dog", "Robber", "Kitten"]
c = ["stole", "ate", "hid", "burried", "ripped"]
d = ["my homework", "my car", "my money", "my keys"]


aa = Math.floor(Math.random() * a.length)
bb = Math.floor(Math.random() * b.length)
cc = Math.floor(Math.random() * c.length)
dd = Math.floor(Math.random() * d.length)

finished = a[aa] +" "+b[bb] +" "+ c[cc] +" "+ d[dd] 

document.getElementById("lies").innerHTML = finished;