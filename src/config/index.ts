import 'dotenv/config'

const { env } = process

export const deta = {
  key: env.PROJECT_KEY ?? ''
}

export const server = {
  port: Number(env.PORT) || 4500,
  host: env.HOST ??'0.0.0.0'
}

export enum enviroment {
  Dev ='DEV',
  Prod = 'PRODUCTION',
  Test = 'TEST'
}


export const buildEnviroment = enviroment[env.BUILD_ENV]