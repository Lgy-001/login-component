export interface PasswordInputProps {
  className?: string;
  title?: string;
  style?: React.CSSProperties;
  isShowIllustrate?: boolean;
  placeholder?: string;
  checkPasswordContinuous: (result: { valid: boolean; reason?: string | undefined; }) => void;
  checkPasswordStrength: (result: string) => void;
}