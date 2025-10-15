import type { PasswordInputProps } from "../../password-input/types";
export interface NewPasswordInputProps extends Omit<PasswordInputProps, 'checkPasswordStrength'|'checkPasswordContinuous'> {
    showInfo?: boolean;
    steps?: number;
    strokeWidth?: number;
    size?: [number | string, number ] | { width: number, height: number } | "small" | "default" 
    type?: "line" | "circle" | "dashboard";
    success?: { percent: number, strokeColor: string }
    trailColor?: string
}
