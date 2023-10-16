// export function DecodeJwt(token) {
//     // 分割JWT的三个部分：header、payload和signature
//     const parts = token.split('.');
//
//     // 使用Base64解码header和payload
//     // const header = JSON.parse(atob(parts[0]));
//     const payload = JSON.parse(atob(parts[1]));
//
//     return { payload };
// }

export function DecodeJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
