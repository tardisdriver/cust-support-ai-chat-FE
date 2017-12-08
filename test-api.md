FORMAT: 1A


# shrub

shrub is a web app that checks customer's service info then connects them to a chat bot

## Customers [/customers/:id]

### Get By Service number [GET]

+ Response 200 (application/json)
    {
        "id":"123ABC",
        "name": "Bob Bobbington"
    }

+ Response 404 (text/plain)
    