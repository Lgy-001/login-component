import "./index.less";
import type { loginType } from "./types/index";


import { Button, Form, message } from "antd";

import AccountInput from "../account-input/account-input";
import PasswordInput from "../password-input/password-input";

const Login = (props: loginType) => {


    const [messageApi, contextHolder] = message.useMessage();


    return (
        <>
            {contextHolder}
            <div className="loginLayout">
                <div className="loginHeader">{props.title}</div>
                <Form
                    onFinish={(value) => {
                        console.log(value);
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
                        <PasswordInput />
                    </Form.Item>
                    <Button
                        htmlType="submit"
                    // className={`login ${passwordInfo === "invalid" ? "err" : "success"
                    //     }`}
                    >
                        登录
                    </Button>
                </Form>
            </div>
        </>
    );
};
export default Login;
