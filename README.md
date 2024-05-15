GRAPHQL:

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.


In simple words: it is an alternative for REST API, where you can only fetch data which you want.

PROBLEM 1 (WASTING BANDWIDTH BY SENDING EXTRA DATA)
For example:

When you open any application (eg. Zomato) on the home you have to show profile photo of the user,

Now according to REST Architecture:
Everything related to the user (schema) will be fetched (id,name,email,address,profile,etc) and then you will display the profile photo from all keys, (wasting bandwidth)

here lies the problem, since we only needed the profile photo, we fetched ton of extra information.

This Problem is fixed by GraphQL you only fetch what you need, nothing extra. 



PROBLEM 2 (MULTIPLE API CALLS)
For example:

If you want to fetch the order details for the user, what you need is:
Order_id, Order_item, quantity (product_details, (product_id, product_name)), user_details (name)

now according rest architecture, you need to call 3 API, one for order details, one for product_detials and one_for user_details, 

GraphQL solves this by fetching the nested queries in one single API call.


----------------------------------------------------------------------------------------------------------------------

Creating GraphQL and NodeJS server:
yarn init
yarn add @apollo/server graphql
yarn add body-parser cors
yarn add @types/axios
created index.js and wrote the logic

----------------------------------------------------------------------------------------------------------------------

Creating GraphQL and React:
yarn create react-app .
yarn add @apollo/client graphql
