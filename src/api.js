
//getServiceNumber

//Promise.resolve
//fetch => calls drakov locally

//local point to drakov, on netlify, point to apiary


export function checkServiceNumber(number) {
    return fetch(`http://localhost:3000/customers/${number}`)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else if (res.status === 404) {
                return false
            }
            throw { message: 'There was a problem with your request' }
        })
}