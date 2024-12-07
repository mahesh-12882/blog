export const pendingData = (data) => {
    return {
        type: "PENDING",
        payload: data
    }
}
export const getData = (data) => {
    console.log(data)
    return {
        type: "SUCCESS",
        payload: data
    }
}

export const failedData = (data) => {
    return {
        type: "FAIL",
        payload: data
    }
}