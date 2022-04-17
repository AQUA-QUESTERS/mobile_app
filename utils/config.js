const ip = "192.168.29.54"
const auth_port = 1111
const upload_port = 8010
const config={
    "auth_ip": `http://${ip}:${auth_port}/`,
    "upload_ip": `http://${ip}:${upload_port}/`, 
}

export default config;
