import { ChevronRightIcon } from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'

import HomeLayout from 'src/layouts/HomeLayout/HomeLayout'

const HomePage = () => {
  return (
    <div className="min-h-full bg-primary">
      <HomeLayout>
        <main>
          <div className="relative isolate overflow-hidden">
            <svg
              className="stroke-white/10 absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="fill-gray-800/20 overflow-visible">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
              />
            </svg>
            <div
              className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
              aria-hidden="true"
            >
              <div
                className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                style={{
                  clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                }}
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
              <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                <img
                  className="h-11"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <Link to={routes.home()} className="inline-flex space-x-6">
                    <span className="text-indigo-400 ring-indigo-500/20 rounded-full bg-highlight px-3 py-1 text-sm font-semibold leading-6 ring-1 ring-inset">
                      What's new
                    </span>
                    <span className="text-gray-300 inline-flex items-center space-x-2 text-sm font-medium leading-6">
                      <span>Just shipped v1.0</span>
                      <ChevronRightIcon
                        className="text-gray-500 h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </div>
                <h1 className="text-white mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
                  Deploy to the cloud with confidence
                </h1>
                <p className="text-gray-300 mt-6 text-lg leading-8">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to={routes.signup()}
                    className="text-white focus-visible:outline-highlight rounded-md bg-highlight px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-highlight-lighten focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Get started
                  </Link>
                  <Link
                    to={routes.signup()}
                    className="text-white text-sm font-semibold leading-6"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                  <img
                    src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="bg-white/5 ring-white/10 w-[76rem] rounded-md shadow-2xl ring-1"
                  />
                </div>
              </div>
            </div>
          </div>
          )
        </main>
      </HomeLayout>
    </div>
  )
}

export default HomePage
