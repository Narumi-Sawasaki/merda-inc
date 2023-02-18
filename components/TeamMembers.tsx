import React from "react";

const TeamMembers = () => <div className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">The Team</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Meet our team
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Lorem ipsum dolor sit amet consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>
    </div>

    <div className="mt-10">
      <ul role="list" className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <li>
          <div className="flex">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full"
                   src=" https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                   alt=""/>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Jane Cooper</h4>
              <p className="text-sm font-medium text-gray-500">CEO</p>
            </div>
          </div>
        </li>

        <li className="mt-10 md:mt-0">
          <div className="flex">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full"
                   src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0b21vcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                   alt=""/>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">John Doe</h4>
              <p className="text-sm font-medium text-gray-500">CTO</p>
            </div>
          </div>
        </li>

        <li className="mt-10 md:mt-0">
          <div className="flex">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full"
                   src="https://images.unsplash.com/photo-1534308988490-b4f95d3df6e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                   alt=""/>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Doe Jane</h4>
              <p className="text-sm font-medium text-gray-500">Head of Marketing</p>
            </div>
          </div>
        </li>

        <li className="mt-10 md:mt-0">
          <div className="flex">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full"
                   src="https://images.unsplash.com/photo-1611493302936-40e8dcb9472e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhdGVzdCUyMGRhdmlkJTIwc3RhdGljJTIwcGhvdG9zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                   alt=""/>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Jane Smith</h4>
              <p className=" text-sm font-medium text-gray-500">Head of Sales</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

export default TeamMembers;
