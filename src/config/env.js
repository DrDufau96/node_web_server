//const {get} = require('env-var');
import envvarr from 'env-var';

//require('dotenv').config();
import env from 'dotenv'
env.config()


export const envs = {
    PORT: envvarr.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvarr.get('PUBLIC_PATH').default('public').asString()
}

