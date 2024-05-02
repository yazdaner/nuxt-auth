export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    try {
        const data = await $fetch('http://localhost:8000/api/register' , {
            method: 'POST',
            body,
            headers: {
                'Accept': 'application/json',
            }
        })
        setCookie(event,'token',data.token,{
            httpOnly : true,
            secure : true,
            maxAge : 60 * 60 * 24 * 7,
            path : '/'
        });
        return data.user;
    } catch (error) {
        return error
    }
})