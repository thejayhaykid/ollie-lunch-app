import { Link, routes } from '@redwoodjs/router'

export default function NotFoundPage() {
  return (
    <div className="h-screen w-screen">
      <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-primary lg:grid-cols-[max(50%,36rem),1fr]">
        <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
          <Link to={routes.home()}>
            <span className="sr-only">Your Company</span>
            <img
              className="h-10 w-auto sm:h-12"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </Link>
        </header>
        <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className="max-w-lg">
            <p className="text-base font-semibold leading-8 text-highlight">
              404
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-primary">
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
            <div className="mt-10">
              <Link
                to={routes.home()}
                className="text-sm font-semibold leading-7 text-highlight"
              >
                <span aria-hidden="true">&larr;</span> Back to home
              </Link>
            </div>
          </div>
        </main>
        <footer className="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
          <div className="border-t border-primary bg-secondary py-10">
            <nav className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-primary lg:px-8">
              <Link to={routes.home()}>Contact support</Link>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-300 h-0.5 w-0.5"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <Link to={routes.home()}>Status</Link>
            </nav>
          </div>
        </footer>
        <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
          <img
            src="/images/lost.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
