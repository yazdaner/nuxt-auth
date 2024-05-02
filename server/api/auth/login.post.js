export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const {public : {apiBase}} = useRuntimeConfig()
    try {
        const data = await $fetch(`${apiBase}/api/login` , {
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