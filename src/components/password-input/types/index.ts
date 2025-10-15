export interface PasswordInputProps {
  className?: string;
  style?: React.CSSProperties;
  checkPasswordStrength: (result: string) => void;
}