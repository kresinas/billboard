# billboard
0. Stanislav Kresina kresinas@gmail.com  

1. Clone from github.com by  
git clone https://github.com/kresinas/billboard.git  
cd into billboard directory  

2. Start redis db (redis-server.exe)  
tested on Redis-x64-3.2.100 on windows machine (default port 6379 and localhost)  
  
3. At this point unit tests can be run  
npm test  

4. Start nodejs application by  
node bin/www  

on windows machine you will see:  

billboard>node bin/www  
File to be saved into: C:\Users\kresista\AppData\Local\Temp\billboard  
Http server using port: 3001  
DB client connected to default port (6379) on localhost  

Then you can use  
http://localhost:3001/		for homepage  
http://localhost:3001/count	to get count  
http://localhost:3001/track	to update count  

testing message is   

{ "count": 8 }  

5. Application organisation is as follows  

bin/www 	- entry point for application server port is defined here and http server is started  
app.js		- application (express template is used), routing, views and so on  
code/code.js	- initializing routines for file and db client, functions for appending to file and DB counting    
routes/count.js, index.js, track.js 	- request mapping to actual actions  
views/*		- view definitions  
test/test.js 	- unit tests  
package.json	- module setup and dependency packages  
public/favicon.ico 	- :)  

