import { createClient } from 'redis';


export async function redisConnect(key, value) {
    const client = createClient();

    client.on('error', err => console.log('Redis Client Error', err));

    await client.connect();

    await client.set(key, value);
    const resvalue = await client.get(key);
    console.log(`key value - ${resvalue}`)
    await client.disconnect();
}

export async function redisVerify(key) {
    const client = createClient();

    client.on('error', err => console.log('Redis Client Error', err));

    await client.connect();

    // await client.set(key,value);
    const resvalue = await client.get(key);

    console.log(`key value - ${resvalue}`)

    await client.disconnect();
    return resvalue;
}
