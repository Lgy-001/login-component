import { memo, useState } from "react";
import user from "@/assets/images/user.png";
import globalFunction from "../../utils";
import classNames from "classnames";
import './index.less'
import type { accountInputType } from "./types";
const AccountInput = memo((props: accountInputType) => {
    const { className, style } = props
    const [account, setAccount] = useState<string>("");
    return (
        <div style={style} className={classNames("account-input-layout", className)}>
            <div>*账号</div>
            <div className="account-input-field">
                <img className="account-icon" src={user} alt="user" />
                <input
                    className="account-input"
                    placeholder="请输入账号"
                    type="text"
                    minLength={1}
                    maxLength={20}
                    value={account}
                    onChange={(e) => {
                        setAccount(globalFunction.delSpace(e.target.value));
                    }}
                />
            </div>
        </div>
    )
})
export default AccountInput;