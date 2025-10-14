export interface loginType{
title:string
}

export interface LoginUtilType{
    delSpace: (value: string) => string
    isdetectionNull: (value: string) => boolean
    detectionPasswordStrength: (value: string) => 'low' | 'medium' | 'high' | 'strong' | 'invalid'
    detectionContinuousPassword: (value: string) => { valid: boolean; reason?: string }
}