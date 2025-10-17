import { memo, useEffect, useState } from "react";
import globalFunction from "../../utils";
import pwd from "@/assets/images/pwd.png";
import downEye from "@/assets/images/downEye.png";
import openEye from "@/assets/images/upEye.png";
import type { PasswordInputProps } from "./types";
import { Tooltip } from 'antd'
import "./index.less";
import classNames from "classnames";
const PasswordInput = memo((props: PasswordInputProps) => {
    const { checkPasswordStrength,
        isShowIllustrate,
        title = "密码",
        placeholder = "请输入密码",
        prompt,
        enterPassword,
        isInconShow = true,
        onBlur,
        checkPasswordContinuous } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [password, setPassword] = useState<string>("");
    useEffect(() => {
        if (password === '') return
        enterPassword && enterPassword(password);
    }, [password])

    return (
        <div className="password-input-layout">
            <div className="password-input-title">
                <div>*{title}</div>
                <div className={classNames(["password-input-illustrate"], { 'show': isShowIllustrate })}>
                    <Tooltip placement="right" title={prompt}>
                        <span>?</span>
                    </Tooltip>
                </div>
            </div>
            <div className="password-input-field">
                {isInconShow && <img className="password-input-icon" src={pwd} alt="user" />}
                <input
                    className="password-input"
                    minLength={1}
                    maxLength={100}
                    value={password}
                    placeholder={placeholder}
                    onChange={(e) => {
                        setPassword(globalFunction.delSpace(e.target.value));
                        checkPasswordStrength(
                            globalFunction.detectionPasswordStrength(globalFunction.delSpace(e.target.value))
                        );
                        checkPasswordContinuous(globalFunction.detectionContinuousPassword(globalFunction.delSpace(e.target.value)));
                    }}
                    onBlur={onBlur}
                    type={isOpen ? "text" : "password"}
                />
                {!isOpen ? (
                    <img
                        onClick={() => {
                            setIsOpen(true);
                        }}
                        src={downEye}
                        alt="downEye"
                    />
                ) : (
                    <img
                        onClick={() => {
                            setIsOpen(false);
                        }}
                        src={openEye}
                        alt="openEye"
                    />
                )}
            </div>
        </div>
    )
})
export default PasswordInput;