# Wizard101CalculatorSiteREST
This is will allow for the Wizard101 portion of nosdire.com to use an api instead of using javascript
The back-end has been set up with Spring Boot (Web dependency). Four APIs exist in which the front-end can utilize to calculate damage.
The front-end uses Javascript's internal Fetch API in order to communicate with the back-end.
If someone wants to set this up, all they would have to do is upload the back-end to a site like Heroku, and then edit the URLs in the maincode.js file accordingly.
#To Do:
- Add input validation on the back-end site, as well as error catching. Currently the front-end stops the user from entering anything but numbers, however one could still send invalid requests via something like Postman.
- Connect a database in order to store user requests.

My website (Nosdire.com) still uses Javascript to calculate the damage numbers since 100s of users use the site every day, and Heroku's free plan can only process one request at a time. This might change later on
