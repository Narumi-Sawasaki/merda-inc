export default function Footer() {
  return (
    <>
      <footer className=" bg-gray-50">
        <div className=" max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className=" xl:grid xl:grid-cols-3 xl:gap-8">
            <div className=" grid grid-cols-2 gap-8 xl:col-span-2">
              <div className=" space-y-2 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8">
                <div>
                  <h3 className=" text-sm font-medium text-gray-900">About</h3>
                  <ul role=" list" className=" mt-2 space-y-2">
                    <li>
                      <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Company
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Press</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Careers</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Contact</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Help</h3>
                  <ul role="list" className="mt-2 space-y-2">
                    <li>
                      <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Support</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Privacy</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Terms</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Social</h3>
                  <ul role="list" className="mt-2 space-y-2">
                    <li>
                      <a href="#" className="text-sm text-gray-500 hover:text-gray-700">LinkedIn</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Twitter</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Instagram</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Facebook</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Subscribe to our newsletter</h3>
                  <p className="mt-2 text-sm text-gray-500">The latest news,
                    articles, and resources, sent to your inbox weekly.</p>
                  <form className="mt-4 sm:flex sm:max-w-md">
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input type="email" name="email-address" id="email-address" autoComplete="email" required
                           className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-2 sm:flex-1"
                           placeholder="Enter your email"/>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <button type="submit"
                              className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-8 xl:mt-0">
              <h3 className="text-sm font-medium text-gray-900">Recent Posts</h3>
              <div className="mt-4 space-y-4">
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Boost your conversion rate
                </a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  How to use search engine optimization to drive traffic to your site
                </a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Improve your customer experience
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              © 2023 Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
