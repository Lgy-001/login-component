export interface loginType{
    title: string
    className?: string
    style?: React.CSSProperties
    onFinish?: (value: { account: string; password: string }) => void
    onAccountBlur: (e: React.FocusEvent<HTMLInputElement>) => void
    onPasswordBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export interface LoginUtilType{
    delSpace: (value: string) => string
    isdetectionNull: (value: string) => boolean
    detectionPasswordStrength: (value: string) => 'low' | 'medium' | 'high' | 'strong' | 'invalid'
    detectionContinuousPassword: (value: string) => { valid: boolean; reason?: string }
}