import * as Bcrypt from "bcrypt";
export class Auth {
    encryptPassword(password: string): Promise<string> {
        return new Promise((resolve, reject) => {
            Bcrypt.hash(password, 10, (err: any, hash: string) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(hash);
                }

            });
        });
    }


}
export default new Auth();