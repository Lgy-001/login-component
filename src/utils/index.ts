import { delSpace } from './delete-space'
import { isdetectionNull } from './detection-null'
import { detectionPasswordStrength } from './detection-password-length'
import { detectionContinuousPassword } from './detection-continuous-password'
import type { LoginUtilType } from '../components/Login/types/index'

const globalFunction: LoginUtilType = {
    delSpace,
    isdetectionNull,
    detectionPasswordStrength,
    detectionContinuousPassword
}
export default globalFunction