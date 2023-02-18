import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage: React.FC = () => {
  return (
    <>
      <Header title="Contact"/>
      <main>
        {/*<div className="relative shadow rounded-3xl sm:p-28">*/}
        <div className="relative shadow rounded-3xl">
          <div className="w-128 m-20">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm0-9a1 1 0 011 1v3a1 1 0 01-2 0V8a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-bold text-gray-700 text-xl">お問い合わせフォーム</span>
            </div>
            <form className="mt-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                お名前
              </label>
              <input
                className="bg-gray-100 border-2 w-full p-4 rounded-lg"
                id="name"
                type="text"
                placeholder="お名前"
              />
              <label className="block text-gray-700 font-bold mb-2 mt-4" htmlFor="email">
                メールアドレス
              </label>
              <input
                className="bg-gray-100 border-2 w-full p-4 rounded-lg"
                id="email"
                type="email"
                placeholder="example@example.com"
              />
              <label className="block text-gray-700 font-bold mb-2 mt-4" htmlFor="message">
                お問い合わせ内容
              </label>
              <textarea
                className="bg-gray-100 border-2 w-full p-4 rounded-lg"
                id="message"
                rows={4}
              ></textarea>
              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                送信
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default ContactPage;
