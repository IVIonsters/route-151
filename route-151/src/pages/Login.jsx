import NavigationBar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Login() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <NavigationBar />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold gradient-text">Welcome Back, Trainer!</h1>
            <p className="mt-2 text-slate-400">
              Sign in to continue your Pokémon journey
            </p>
          </div>

          <div className="card-container">
            <form className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-slate-300">Email or Username</span>
                </label>
                <input type="text" placeholder="ash.ketchum@pallet.town" className="input input-bordered bg-slate-800 border-slate-700 text-white" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-slate-300">Password</span>
                </label>
                <input type="password" placeholder="••••••••" className="input input-bordered bg-slate-800 border-slate-700 text-white" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-indigo-400">Forgot password?</a>
                </label>
              </div>

              <div className="form-control">
                <label className="cursor-pointer flex items-center gap-2">
                  <input type="checkbox" className="checkbox checkbox-primary" />
                  <span className="text-slate-300">Remember me</span>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="gradient-button w-full">Login</button>
              </div>
            </form>

            <div className="divider text-slate-400">OR</div>

            <div className="space-y-3">
              <button className="btn w-full bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-slate-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.603-3.369-1.338-3.369-1.338-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
                </svg>
                Continue with GitHub
              </button>
              <button className="btn w-full bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-slate-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
                Continue with Google
              </button>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-slate-400">
              Don't have an account?{" "}
              <a href="/signup" className="text-indigo-400 font-medium hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Login;
