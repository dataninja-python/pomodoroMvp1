# app.py

# too simple to use in production
# please don't do this
from random import seed, choice

import http.server
import socketserver

portList = [8000 + i for i in range(20)]

# generate a seed
# seed(3)

print(portList)
selection = choice(portList)

PORT=selection

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
