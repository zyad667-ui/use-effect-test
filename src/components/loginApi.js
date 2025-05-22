export default async function loginUser(email, password) {
    const url = 'https://login-signup.p.rapidapi.com/public/v1/login.php';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': 'a36ceb4a25mshce5558d48fcde35p112994jsn8d8f2050dfdb',
            'x-rapidapi-host': 'login-signup.p.rapidapi.com',
            'Content-Type': 'application/x-www-form-urlencoded',
            Origin: 'http://127.0.0.1'
        },
        body: new URLSearchParams({
            api_key: '394e9338b73a9f061b1968ceaa050a',
            email,
            password
        })
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.text();
        return result;
    } catch (error) {
        throw error;
    }
} 