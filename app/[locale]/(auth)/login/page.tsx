import Image from 'next/image'
import Logo from '@/components/shared/Logo'
import { LoginForm } from '@/components/modules/dashboard/login/LoginForm'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Login Form */}
      <div className="flex w-full lg:w-1/2 flex-col items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Logo />
            {/* <h1 className="text-2xl font-semibold mt-6 tracking-tight">
              Welcome back
            </h1> */}
            <p className="text-sm text-muted-foreground">
              Enter your credentials to access the admin dashboard
            </p>
          </div>
          <LoginForm />
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account? Contact your system administrator.
        </p>
      </div>

      {/* Right side - Large Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/about-team.png"
          alt="Media production studio"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-background/20" />
        {/* <div className="absolute bottom-8 left-8 max-w-md text-white">
          <h2 className="text-3xl font-bold mb-2">Suiiz Admin Dashboard</h2>
          <p className="text-lg">Manage your media production projects with ease and efficiency.</p>
        </div> */}
      </div>
    </div>
  )
}

