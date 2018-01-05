FORMAT: 1A

# shrub

shrub is a web app that checks customer's service info then connects them to a chat bot

## Customers [/customers/{id}]

### Get By Service number [GET]

+ Request Service Number

    + Parameters

        + id : 123ABC (string - A unique identifier for the client's account.)

+ Response 200 (application/json)

  + Body

            {
             "id":"123ABC",
             "name": "Bob Bobbington"
            }

+ Request Failed or Unknown

+ Response 404
