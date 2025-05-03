import React from 'react'

interface Props {
  setSelectedSection: (section: 'login' | 'chatroom') => void;
}
export function LoginForm({setSelectedSection}:Props) {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <h1 >Email</h1>
          <input id="email" type="email" placeholder="m@example.com" required  className=' flex w-full rounded-md 
    border border-gray-300 
    h-[40px] bg-transparent px-3 py-1 
    text-base shadow-sm transition-colors 
    placeholder:text-muted-foreground 
    focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
    disabled:cursor-not-allowed disabled:opacity-50 
    md:text-sm' />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <h1 >Password</h1>
            <h1
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </h1>
          </div>
          <input
  id="password"
  type="password"
  required
  className='
    flex w-full rounded-md 
    border border-gray-300 
    h-[40px] bg-transparent px-3 py-1 
    text-base shadow-sm transition-colors 
    placeholder:text-muted-foreground 
    focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
    disabled:cursor-not-allowed disabled:opacity-50 
    md:text-sm
  '
/>

        </div>
        <button onClick={() => setSelectedSection("chatroom")}  className="group relative h-12 overflow-hidden cursor-pointer rounded-md bg-[#FB8E0B] px-6 text-white font-semibold transition">
                    <span>Login</span>
                    <div className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
                  </button>
  
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <h1 className="underline underline-offset-4">
          Sign up
        </h1>
      </div>
    </form>
  )
}
