import "./index.less";
import type { loginType } from "./types/index";


import { Button, Form, message } from "antd";

import AccountInput from "../account-input/account-input";
import PasswordInput from "../password-input/password-input";
import { useCallback, useState } from "react";
import classNames from "classnames";

const Login = (props: loginType) => {
    const { className, style, title, onFinish } = props;
    const [passwordInfo, setPasswordInfo] = useState<string>("invalid");
    const [messageApi, contextHolder] = message.useMessage();
    const checkPasswordStrength = useCallback((result: string) => {
        setPasswordInfo(result);
    }, []);
    return (
        <>
            {contextHolder}
            <div className={classNames(["login-layout"], className)} style={style}>
                <div className="login-header">{title}</div>
                <Form
                    onFinish={(value) => {
                        onFinish?.(value)
                    }}
                >
                    <Form.Item
                        label=""
                        name="account"
                        rules={[{ required: true, message: "账号不能为空" }]}
                    >
                        <AccountInput />
                    </Form.Item>
                    <Form.Item
                        label=""
                        name="password"
                        rules={[{ required: true, message: "请输入密码" }]}
                    >
                        <PasswordInput checkPasswordStrength={checkPasswordStrength} isShowIllustrate={true} />
                    </Form.Item>
                    <Button

                        htmlType="submit"
                        className={`login-button ${passwordInfo === "invalid" ? "err" : "success"
                            }`}
                    >
                        登录
                    </Button>
                </Form>
            </div>
        </>
    );
};
export default Login;
