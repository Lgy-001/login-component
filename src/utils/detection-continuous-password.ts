
export function detectionContinuousPassword(password: string): { valid: boolean; reason?: string } {
  if (!password) return { valid: false, reason: '密码不能为空' };
  const pwd = password;
  if (/(.)\1{2,}/.test(pwd)) {
    return { valid: false, reason: '包含连续重复字符' };
  }
  const digits = pwd.split('').map(c => (/\d/.test(c) ? Number(c) : NaN));
  for (let i = 0; i < digits.length - 2; i++) {
    const [a, b, c] = [digits[i], digits[i + 1], digits[i + 2]];
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    
      if ((b === a + 1 && c === b + 1) || (b === a - 1 && c === b - 1)) {
        return { valid: false, reason: '包含连续数字序列' };
      }
    }
  }
  const letters = pwd.toLowerCase().split('').map(c => c.charCodeAt(0));
  for (let i = 0; i < letters.length - 2; i++) {
    const [a, b, c] = [letters[i], letters[i + 1], letters[i + 2]];
    if (
      (a >= 97 && a <= 122 && b === a + 1 && c === b + 1) || 
      (a >= 97 && a <= 122 && b === a - 1 && c === b - 1)    
    ) {
      return { valid: false, reason: '包含连续字母序列' };
    }
  }
  for (let len = 2; len <= 4; len++) {
    const regex = new RegExp(`(.{${len}})\\1{1,}`, 'i');
    if (regex.test(pwd)) {
      return { valid: false, reason: '包含周期性重复序列' };
    }
  }
  const qwertyRows = [
    'qwertyuiop',
    'asdfghjkl',
    'zxcvbnm',
  ];
  const lowerPwd = pwd.toLowerCase();
  for (const row of qwertyRows) {
   
    for (let i = 0; i < row.length - 2; i++) {
      const seq = row.slice(i, i + 3);          
      const rev = seq.split('').reverse().join(''); 
      const regex = new RegExp(seq, 'i');
      const revRegex = new RegExp(rev, 'i');
      if (regex.test(lowerPwd) || revRegex.test(lowerPwd)) {
        return { valid: false, reason: `包含键盘连续键序列` };
      }
    }
  }


  return { valid: true };
}
