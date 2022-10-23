import { Deta } from 'deta'
import { deta as detaconfig } from '../../../config'

const deta = Deta(detaconfig.key)

export const dbProyects = deta.Base("proyects")


