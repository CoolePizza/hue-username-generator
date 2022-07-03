export async function createUser(ip, devicetype) {
    const response = await fetch(`https://${ip}/api`, {
        method: "POST",
        body: JSON.stringify({
            devicetype
        })
    })
    return await response.json()
}