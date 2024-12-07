/*
//Abort Controller

You can utilize the abort controller to a great effect when you need to cancel requests, remove event listeners, 
abort streams, or teach any logic to be abortable.

*/

/*
It’s always a good practice to cancel api calls before mount and when the component unmounts to solve the 
memory leak issues and race conditions. 

Note:It’s only for those who manually call the api without using any library like react query 
     or rtk query or swr, etc.
*/