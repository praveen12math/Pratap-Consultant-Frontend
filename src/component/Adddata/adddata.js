export const addHiering = hiering => {
    return fetch(`${process.env.REACT_APP_BACKENDAPI}/addhiering` , {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify(hiering)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}



export const addEmail = email => {
    return fetch(`${process.env.REACT_APP_BACKENDAPI}/addconnect` , {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify(email)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        return err.json()
    })
}



export const addRequestJob = requestJob => {
    return fetch(`${process.env.REACT_APP_BACKENDAPI}/requestjob` , {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify(requestJob)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        return err.json()
    })
}