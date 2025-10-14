import { useState } from "react";
import globalFunction from "../../utils";
import pwd from "@/assets/images/pwd.png";
import downEye from "@/assets/images/downEye.png";
import openEye from "@/assets/images/upEye.png";
import { message } from "antd";
import type { PasswordInputProps } from "./types";
import "./index.less";
const PasswordInput = (props: PasswordInputProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [passwordInfo, setPasswordInfo] = useState<string>("invalid");
    const [password, setPassword] = useState<string>("");
    return (
        <div className="password-input-layout">
            <div className="password-input-title">
                <div>*密码</div>
                <div className="password-input-illustrate">?</div>
            </div>
            <div className="password-input-field">
                <img className="password-input-icon" src={pwd} alt="user" />
                <input
                    className="password-input"
                    minLength={1}
                    maxLength={100}
                    value={password}
                    placeholder="请输入密码"
                    onChange={(e) => {
                        setPassword(globalFunction.delSpace(e.target.value));
                        setPasswordInfo(
                            globalFunction.detectionPasswordStrength(password)
                        );

                    }}
                    onBlur={() => {
                        const result =
                            globalFunction.detectionContinuousPassword(password);
                        if (!result.valid) {
                            message.error(result.reason);
                        }
                        console.log(result);
                    }}
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
}
export default PasswordInput;