import { Deta } from "deta";
import { deta as detaconfig } from '../../../config'


const deta = Deta(detaconfig.key)


const drive = deta.Drive('images')

export default drive