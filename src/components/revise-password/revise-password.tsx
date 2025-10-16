import { useCallback, useEffect, useMemo, useState } from "react";
import NewPasswordInput from "../new-password-input"
import PasswordInput from "../password-input/password-input";
import './index.less'

const RevisePassword = () => {
    const [password, setPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [passwordInfo, setPasswordInfo] = useState<string>("invalid");
    const [passwordContinuousInfo, setPasswordContinuousInfo] = useState<{ valid: boolean; reason?: string | undefined; }>({ valid: true, reason: undefined });
    const isSamePassword = useMemo(() => {
        if (password === '' || newPassword === '') return true;
        return password === newPassword;
    }, [password, newPassword]);
    const checkPasswordStrength = useCallback((result: string) => {
        setPasswordInfo(result);
    }, []);
    const checkPasswordContinuous = useCallback((result: { valid: boolean; reason?: string | undefined; }) => {
        setPasswordContinuousInfo(result);
    }, []);
    const enterPassword = useCallback((value: string) => {
        setPassword(value);
    }, []);
    const enterNewPassword = useCallback((value: string) => {
        setNewPassword(value);
    }, []);

    return (
        <div className="revise-password-layout">
            <NewPasswordInput
                enterPassword={enterNewPassword}
                showInfo={false}
                size={[75, 3]}
            />
            <PasswordInput
                enterPassword={enterPassword}
                title="确认密码"
                placeholder="请再次输入密码"
                isInconShow={false}
                checkPasswordContinuous={checkPasswordContinuous}
                checkPasswordStrength={checkPasswordStrength} />
            {!isSamePassword && <div className="revise-password-error">两次输入密码不一致</div>}
        </div>
    )
}
export default RevisePassword;