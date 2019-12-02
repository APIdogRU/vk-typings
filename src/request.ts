import https from 'https';

export default async<T>(url: string, params: Record<string, string> = {}) => new Promise<T>((resolve, reject) => {
    https.get(url, res => {
        let data = '';

        res.on('data', chunk => data += chunk);
      
        res.on('end', () => {
            try {
                resolve(JSON.parse(data));
            } catch (e) {
                reject(e);
            }
        });
    }).on('error', e => {
        reject(e);
    });
});
