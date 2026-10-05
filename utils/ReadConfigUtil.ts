import dotenv from 'dotenv';
dotenv.config({path : `./env/.env.${process.env.ENV}`});

export class ConfigReader{

    static readonly baseurl = ConfigReader.getEnv('URL')
    static readonly user = ConfigReader.getEnv('USER')
    static readonly password = ConfigReader.getEnv('PASSWORD');
    
    private static getEnv(key:string):string{
        const value = process.env[key];
        if(!value){
            throw new Error(`Enviornment variable ${key} is not available`);
        }
        return value;
    }
}