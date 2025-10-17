

// strong:极强 high:高 medium:中 low:弱 invalid:无效
export function detectionPasswordStrength(password: string): 'low' | 'medium' | 'high' | 'strong' | 'invalid' {
  if(password.length === 0) return 'invalid';
  const hasDigit = /\d/;              
  const hasLower = /[a-z]/;        
  const hasUpper = /[A-Z]/;            
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\;/]/; 

  
  if (
    password.length >= 16 &&
    hasDigit.test(password) &&
    hasLower.test(password) &&
    hasUpper.test(password) &&
    hasSymbol.test(password)
  ) {
    return 'strong';
  }

  
  if (password.length >= 8) {
    let types = 0;
    if (hasDigit.test(password)) types++;
    if (hasLower.test(password)) types++;
    if (hasUpper.test(password)) types++;
    if (hasSymbol.test(password)) types++;
    if (types >= 3) return 'high';
  }

  
  if (password.length >= 8 && /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]+$/.test(password)) {
    return 'medium';
  }

  if (/^\d{8,}$/.test(password)) {
    return 'low';
  }

  
  return 'invalid';
}
