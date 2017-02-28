# Back End Quiz

Create an express/mongo server for simple contact management

## Rules

* You must complete this work on your own
* Fork this repo and submit as usual
* You may use the following resources:
    * ExpressJS site
    * Mongoose site
    * NodeJS site
    * Any code that you've written (solo or pair), but you must retype
* You may install npm packages of your choosing
* Use general best practices and common sense
* You may ignore the presense or absense of `__v` mongoose property on 
any data format requirements
* There are very specific testing requirements listed (after the API section)
* You have 100 minutes to complete
* Total possible points are 70. You will be graded out of 50 points
* There is more work here than can probably be finished in alotted time. Submit what you have. 
* Don't get bogged-down tracking down weird bugs if they show up. You are better off making sure
you demonstrating what you know.

## API Requirements

### Accepts post of image to add to collection

POST to `/contacts`:

```
{
    name: <name>,
    email: <email>,
    company: <company>,
    notes: <notes>,
    category: <work|school|personal> 
}
```

* `name`, `email` and `category` are required
* `category` should be limited to one of specified values ("work", "school", or "personal")

If any of those conditions are not met, return a 400 status code.

POST should return the same format as GET to `/contacts/:id`:

### Retrieve list of contacts

GET to `/contacts`:

```
[
    { _id: "123abc", name: "name one", category: "work" },
    { _id: "456def", name: "other name", category: "work" },
    { _id: "789ghi", name: "nom de plume", category: "personal" }
]
```

* Notice fieldset being returned
* Return empty array if no images

### Retreive image detail

GET to `/contacts/:id`:

```
{ 
    _id: "123abc", 
    name: "Peson McPerson", 
    email: "person@work.com",
    company: "work iz work"
    category: "work",
    notes: "Met at the schmoozy meetup"
}
```

* Notice fieldset being returned
* Return 404 if id doesn't exist

### Retrieve list of contacts in one category

GET to `/contacts?category=work`:

```
[
    { _id: "123abc", name: "name one", category: "work" },
    { _id: "456def", name: "other name", category: "work" }
]
```

* Same fieldset as normal GET of contact
* Return empty array if no contacts
* If category not one of three defined categories, return 400

## Testing

You only need to include the following e2e test scenario:

* POST a contact
* use returned id to GET same contact
* assert that `name`, `email`, `company`, `category`, and `notes`
are equal to orignally supplied data.
