import Login from "@/components/Login/login"
import './index.less'
import RevisePassword from "./components/revise-password/revise-password"
function App() {
  const mock = {
    title: '方案书登录系统'
  }


  return (
    <>
      <div className="app">

        {/* <Login title={mock.title} /> */}



        <RevisePassword />

      </div>
    </>
  )
}

export default App
