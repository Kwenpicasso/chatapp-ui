import { GalleryVerticalEnd } from 'lucide-react'
import React from 'react'
import { LoginForm } from './LoginForm'

const Login = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
    <div className="flex flex-col gap-4 p-6 md:p-10">
      <div className="flex justify-center gap-2 md:justify-start">
      <div className="md:flex md:items-center md:gap-12">
              <img src="/logo.png" alt="logo" className="w-[62px] h-[24px] lg:w-[95px] lg:h-[35px]" />
            </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">
          <LoginForm />
        </div>
      </div>
    </div>
    <div className="relative hidden bg-muted lg:block">
      <img
        src="/loginimg.jpg"
        alt="Image"
        className="absolute inset-0 h-full w-full object-cover "
      />
    </div>
  </div>
  )
}

export default Login