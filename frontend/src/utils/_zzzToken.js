const CryptoJS = require("crypto-js");

// Constraints for zzz
const M_A = 3;
const A_C_W = 2 * 60 * 60 * 1000; // 2 hours

function generateLSToken(ip) {
    // Create a timestamp to include in the token
    const timestamp = Date.now();

    // Combine IP address and timestamp
    const dataToEncrypt = `${ip}-${timestamp}`;

    // Encrypt the data
    const encryptedData = CryptoJS.AES.encrypt(dataToEncrypt, 'secret_key').toString();

    // Save the encrypted data to localStorage and set A_C_Count
    localStorage.setItem('rl_token', encryptedData);
    localStorage.setItem('A_C_Count', 0);

    return encryptedData;
}

function checkLSToken(ip) {
    // Keep commented out only used for testing
    // localStorage.removeItem('rl_token');

    // Retrieve the encrypted data from localStorage
    let encryptedData = localStorage.getItem('rl_token');

    if (!encryptedData) {
        // No token found, create a new one
        encryptedData = generateLSToken(ip);
    }

    try {
        // Decrypt the data
        const bytes = CryptoJS.AES.decrypt(encryptedData, 'secret_key');
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

        // Split the decrypted data to get IP and timestamp
        const [storedIp, storedTimestamp] = decryptedData.split('-');

        // Check if timestamp is within the window
        const currentTime = Date.now();
        const timeDiff = currentTime - parseInt(storedTimestamp);
        if (timeDiff <= A_C_W) {
            // Check if stored IP matches the current IP
            if (storedIp !== ip) {
                // Different IP block until the current ip token expires
                return false;
            }

            // Within the window, check A_C_Count
            const Accs_Count = localStorage.getItem('A_C_Count');
            if (parseInt(Accs_Count) >= M_A) {
                // RL exceeded
                return false;
            } 
            else {
                // Increment and save the A_C_Count
                localStorage.setItem('A_C_Count', parseInt(Accs_Count) + 1);
                console.log(localStorage.getItem('A_C_Count'));
                return true;
            }
        } 
        else {
            // Window expired, reset count and create a new token
            generateLSToken(ip);
            return checkLSToken(ip);
        }
    } 
    catch (error) {
        // Error decrypting or invalid token, create a new one
        console.log('Error decrypting token:', error);
        generateLSToken(ip);
    }
}

export default checkLSToken;