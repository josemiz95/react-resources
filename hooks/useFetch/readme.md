# useFetch
This is a custom hook to load data, it will return a state (object) with this data and a boolean with the status of the request (loading). To use it we need to pass one parameter: that is the url to load data.

```
const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${number}`);
```