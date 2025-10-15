
import PasswordInput from "../password-input//password-input";
import type { NewPasswordInputProps } from "./type";
import { Flex, message, Progress } from 'antd';
import './index.less'
import { useCallback, useState } from "react";
import { switchPasswordInfo } from "@/utils/switch-password-info";
import { useUpdateEffect } from "ahooks";
const NewPasswordInput = (props: NewPasswordInputProps) => {
    const { showInfo = false,
        steps = 4,
        strokeWidth = 3,
        type = "line",
        size = 'default',
        trailColor = '#968d8dff'
    } = props;
    const [passwordInfo, setPasswordInfo] = useState<string>("invalid");
    const [passwordContinuousInfo, setPasswordContinuousInfo] = useState<{ valid: boolean; reason?: string | undefined; }>({ valid: true, reason: undefined });
    const [passwordInfoResult, setPasswordInfoResult] = useState<{ percent: number, strokeColor: string }>();
    const checkPasswordStrength = useCallback((result: string) => {
        setPasswordInfo(result);
    }, []);
    const checkPasswordContinuous = useCallback((result: { valid: boolean; reason?: string | undefined; }) => {
        setPasswordContinuousInfo(result);
    }, []);
    useUpdateEffect(() => {
        if (!passwordContinuousInfo.valid) {
            return;
        }
        setPasswordInfoResult(switchPasswordInfo(passwordInfo));
    }, [passwordContinuousInfo, passwordInfo])


    return (
        <div className="new-password-input-layout">
            <PasswordInput
                placeholder="请输入新密码"
                title="新密码"
                isShowIllustrate={true}
                checkPasswordContinuous={checkPasswordContinuous}
                checkPasswordStrength={checkPasswordStrength}
            />
            <div className="new-password-input-progress">
                <Flex gap="small" vertical>
                    <Progress
                        steps={steps}
                        showInfo={showInfo}
                        strokeWidth={strokeWidth}
                        type={type}
                        percent={passwordInfoResult?.percent}
                        strokeColor={passwordInfoResult?.strokeColor}
                        size={size}
                        trailColor={trailColor}
                    />
                </Flex>
                <div className="new-password-input-progress-text">{passwordInfoResult?.percent === 25 ? '低' : passwordInfoResult?.percent === 50 ? '中' : passwordInfoResult?.percent === 75 ? '高' : passwordInfoResult?.percent === 100 ? '极' : ''}</div>
            </div>
            {!passwordContinuousInfo.valid && <div className="new-password-input-error">密码设置不符合规范</div>}
        </div>
    )
}
export default NewPasswordInput;