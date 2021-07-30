import * as mysql from 'mysql';
import config from '../config';

import authors from './authors';
import blogs from './blogs';
import tags from './tags';
import blogtags from './blogtags';

const Connection = mysql.createConnection(config.mysql);

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<{insertId: string}>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        });
    });
};

export default {
    authors,
    blogs,
    tags,
    blogtags
}