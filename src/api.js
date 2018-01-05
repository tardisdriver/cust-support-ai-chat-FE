
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
