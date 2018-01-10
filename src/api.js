
//getServiceNumber

//Promise.resolve
//fetch => calls drakov locally

//local point to drakov, on netlify, point to apiary

let HOST;

if (process.env.NODE_ENV === 'production') {
    HOST = 'https://cryptic-sierra-54081.herokuapp.com';
} else {
    HOST = 'http://localhost:3000';
}

console.log(HOST);


export function checkServiceNumber(number) {
    return fetch(`${HOST}/customers/${number}`)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else if (res.status === 404) {
                return false
            }
            throw { message: 'There was a problem with your request' }
        });
}

export function sendMessage(message, number, conversationID) {
    const headers = new Headers({
        "X-Service-Number": number.toString()
    });
    return fetch(`${HOST}/conversations/${conversationID}`, {
        method: 'POST',
        body: message,
        headers
    }).then((res) => {
        if (res.ok) {
            return res.text()
        } else if (res.status === 404) {
            throw { message: 'Conversation not found' }
        } else if (res.status === 302) {
            throw { message: 'Not authorized to view this conversation' }
        }
        throw { message: 'There was a problem with your request' }
    })
}

export function startConversation(number) {
    const headers = new Headers({
        "X-Service-Number": number.toString()
    });
    return fetch(`${HOST}/conversations`, {
        headers
    }).then((res) => {
        if (res.ok) {
            return res.text()
        } else if (res.status === 302) {
            throw { message: 'Not authorized to create conversations' }
        }
        throw { message: 'There was a problem with your request' }
    })

}

//if no service number, then bounce to service check page

//service number found
//return 200

//service number not found
//return 302

//make a mock Watson api with drakov
