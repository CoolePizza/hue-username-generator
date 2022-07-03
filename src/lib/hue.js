export async function createUser(ip, devicetype) {
    const response = await fetch(`https://${ip}/api`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
            devicetype
        })
    })
    return await response.json()
}