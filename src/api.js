
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

export function sendMessage(message, conversationID) {
    return fetch(`${HOST}/conversations/${conversationID}`, {
        method: 'POST',
        body: message
    }).then((res) => {
        if (res.ok) {
            return res.text()
        } else if (res.status === 404) {
            throw { message: 'Conversation not found' }
        }
        throw { message: 'There was a problem with your request' }
    })

}
