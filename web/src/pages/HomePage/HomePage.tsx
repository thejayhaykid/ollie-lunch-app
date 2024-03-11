import { ChevronRightIcon } from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'

import HomeLayout from 'src/layouts/HomeLayout/HomeLayout'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-primary">
      <HomeLayout>
        <main>
          <div className="relative isolate overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
              <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                <img
                  className="h-11"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <Link to={routes.home()} className="inline-flex space-x-6">
                    <span className="ring-highlight/20 rounded-full bg-highlight px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset">
                      What&apos;s new
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-primary">
                      <span>Just shipped v1.0</span>
                      <ChevronRightIcon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </div>
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                  Deploy to the cloud with confidence
                </h1>
                <p className="mt-6 text-lg leading-8 text-primary">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to={routes.signup()}
                    className="focus-visible:outline-highlight rounded-md bg-highlight px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-highlight-lighten focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Get started
                  </Link>
                  <Link
                    to={routes.signup()}
                    className="text-sm font-semibold leading-6 text-primary"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                  <img
                    src="/images/home.jpg"
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="bg-primary/5 ring-primary/10 w-[76rem] rounded-md shadow-2xl ring-1"
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
