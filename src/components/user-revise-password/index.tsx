import { useCallback, useState } from "react";
import PasswordInput from "../password-input/password-input"
import RevisePassword from "../revise-password/revise-password"
import { message } from "antd";
import type { UserRevisePasswordProps } from "./type";
import classNames from "classnames";
const UserRevisePassword = (props: UserRevisePasswordProps) => {
    const { className, style } = props;
    const [passwordInfo, setPasswordInfo] = useState<string>("invalid");
    const [messageApi, contextHolder] = message.useMessage();
    const [passwordContinuousInfo, setPasswordContinuousInfo] = useState<{ valid: boolean; reason?: string | undefined; }>({ valid: true, reason: undefined });
    const checkPasswordStrength = useCallback((result: string) => {
        setPasswordInfo(result);
    }, []);
    const checkPasswordContinuous = useCallback((result: { valid: boolean; reason?: string | undefined; }) => {
        setPasswordContinuousInfo(result);
    }, []);
    return (
        <div className={classNames(["user-revise-password-layout"], className)} style={style}>
            <PasswordInput title="原密码" placeholder="请输入原密码" isInconShow={false} checkPasswordContinuous={checkPasswordContinuous} checkPasswordStrength={checkPasswordStrength} />
            <RevisePassword />
        </div>
    )
}
export default UserRevisePassword