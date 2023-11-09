

export const Login = () => {
  return <>
    <div className="h-screen flex flex-col flex-1 items-center justify-center overflow-x-hidden" style={{background:"#2F3061", boxShadow:"0px 10px 15px -3px rgba(0,0,0,0.1)"}}>
    <h1 className="text-center font-extrabold text-5xl text-white mb-10">Login</h1>
      <div className="">
        <form action="" method="get"
          className="flex flex-col items-center justify-center gap-4 bg-gray-50 rounded-md"
          style={{ width: '90rem', height: '45rem' }}
        >
          <label htmlFor="" className="flex flex-col text-2xl text-blue-600"
            style={{ width: '35rem', maxWidth: '100%' }}
          >
            user
            <input type="text" placeholder="username"
              className="p-4 rounded-md mt-3 normal-case"
              style={{ background: '#DFDFDF' }}
            />
          </label>
          <label htmlFor="" className="flex flex-col text-2xl text-blue-600"
            style={{ width: '35rem', maxWidth: '100%' }}
          >
            passkey
            <input type="password" placeholder="password"
              className="p-4 rounded-md mt-3"
              style={{ background: '#DFDFDF' }}
            />
          </label>
          <input type="submit" value="send"
            className="p-4 rounded-md text-white font-light text-2xl max-w-full cursor-pointer"
            style={{ background: '#0E34A0' }}
          />
        </form>
      </div>
    </div>
  </>
}
