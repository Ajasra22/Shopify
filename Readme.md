
# SHOPIFY

     > This is a Node-Express and reactjs APP (using MongoDB) web-service which helps user buy and Sell Products

### Local Setup & Installation
Open terminal and run the following command:

### Requirements 
```
 * Nodejs
 * Express
 * Reactjs
 * MongoDB
```
### BackEnd

 - #### Backend Installation
 ```
 $ cd server
 $ npm install
 ```
 - #### Run Backend
 ```
  $ npm start
 ```
 Command Prompt will show the following message:
 ```
[nodemon] starting `node index.js`
Example app listening at http://localhost:5000
conneted to mongo successfully
 ```

### FrontEnd
 - #### Front End Installation
 ```
 $ cd client 
 $ npm install
 ```
- #### Run Front End
```
$ npm start
```
Command Prompt will show the following message
```
Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.43.47:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

In the server/.env file go ahead and paste your mongodb Atlas connection string after intiliating a mongoDb instance as -
```
CONNECTION_URL=mongodb+srv://<user_name>:<password>@cluster0.jlsso.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```
or Paste your local mongodb string as
```
connection_url=mongodb://localhost:27017/olx-clone
```
or you can also use already given connection string of mine

After intiliating both the FrontEnd and BackEnd 

You are greeted with welcome on Home Screen with the description of the website

Now here you can register as well as a login if you have an registered account

Example Login ID:
```
Email: test8@gmail.com
password: aaa
```
Upon logging in-
* We can sell a product by visiting Sell section
* We can purchase a product by vising Buy Section
* After buying a product it will be deleted from seller's list and added to cart of user
* If a user add a product by selling it then he/she cannot sell it to themselves hence the application will not show the newly added product to Seller's Buy Section
* We can purchase a product which is being sold by another user (Like original Olx App **;-)**  )
* If any function do not run spontaneously then do try to take the action again as sometimes there might be connection issue with the undeployed application

### Scope of improvement 
* Animations and Designs can be added to home page
* UI /UX of website of the application can be upgraded throughly
* Security can be improved by adding tech stack like byCrypt ,google authentication etc
* A session could be maintained by including js-cookie module which will let any user to remain logged in for longer periods of time

### Annoncement 
* aforementioned improvements could have been added by me if given more time 
* But considering the time i have already taken no more extensions are allowed iguess 
### Made by
<hr/>
<table>
<td>
 <a align="center" href="https://github.com/Ajasra22">
 <img align="center" src="https://avatars.githubusercontent.com/u/60650011?s=400&u=f7dbdcbfd385cbef07518308ef1b5ca082ff29cc&v=4" width="100px;" alt=""/>
         <br />
         <sub>
            <b>Ajasra Gupta</b>
         </sub>
 </a>
 <br/>
 </td>
 </table>
