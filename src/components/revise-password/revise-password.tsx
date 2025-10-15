import NewPasswordInput from "../new-password-input"
import './index.less'

const RevisePassword = () => {


    return (
        <div className="revise-password-layout">
            <NewPasswordInput
                showInfo={false}
                size={[75, 3]}
            />
        </div>
    )
}
export default RevisePassword;