const CryptoJS = require('crypto-js');  //引用AES源码js

function getAesString(data,key,iv){//加密
    var key  = CryptoJS.enc.Utf8.parse(key);
    var iv   = CryptoJS.enc.Utf8.parse(iv);
    var encrypted =CryptoJS.AES.encrypt(data,key,
        {
            iv:iv,
            mode:CryptoJS.mode.CBC,
            padding:CryptoJS.pad.Pkcs7
        });
    return encrypted.toString();    //返回的是base64格式的密文
}
function getDAesString(encrypted,key,iv){//解密
    var key  = CryptoJS.enc.Utf8.parse(key);
    var iv   = CryptoJS.enc.Utf8.parse(iv);
    var decrypted =CryptoJS.AES.decrypt(encrypted,key,
        {
            iv:iv,
            mode:CryptoJS.mode.CBC,
            padding:CryptoJS.pad.Pkcs7
        });
    return decrypted.toString(CryptoJS.enc.Utf8);
}

function getAES(data){ //加密
    var key  = 'cf7739f45c8ee5a16b57dcf9000b17f6';  //密钥
    var iv   = '1234567812345678';
    var encrypted =getAesString(data,key,iv); //密文
    return encrypted;
}

function getDAes(data){//解密
    var key  = 'cf7739f45c8ee5a16b57dcf9000b17f6';  //密钥
    var iv   = '1234567812345678';
    var decryptedStr =getDAesString(data,key,iv);
    return decryptedStr;
}
export default {
    // decrypt ,
    // encrypt,
    getAES,
    getDAes
}