export interface PasswordInputProps {
  className?: string;
  title?: string;
  style?: React.CSSProperties;
  isShowIllustrate?: boolean;
  placeholder?: string;
  prompt?: string;
  enterPassword?: (value: string) => void;
  isInconShow?:boolean
  checkPasswordContinuous: (result: { valid: boolean; reason?: string | undefined; }) => void;
  checkPasswordStrength: (result: string) => void;
}