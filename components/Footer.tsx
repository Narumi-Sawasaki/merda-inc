export default function Footer() {
  return (
    <>
      <footer className=" bg-gray-50">
        <div className=" max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className=" grid grid-cols-3 xl:col-span-2">
            <div>
              <h3 className=" text-sm font-medium text-gray-900">About</h3>
              <ul role=" list" className=" mt-2 space-y-2">
                <li>
                  <a href="/" className="text-sm text-gray-500 hover:text-gray-700">Company
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Social</h3>
              <ul role="list" className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              © 2023 Merda, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
