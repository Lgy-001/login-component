import Login from "@/components/Login/login"
import './index.less'
function App() {
  const mock = {
    title: '方案书登录系统'
  }


  return (
    <>
      <div className="app">
        <Login title={mock.title} />
      </div>
    </>
  )
}

export default App
