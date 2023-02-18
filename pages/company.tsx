import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Company = () => {
  return (
    <>
      <Header title="会社概要"/>
      <main>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-gray-900 mb-4 border-b-2 border-indigo-600 w-fit">
                  所在地
                </span>
                <p className="text-lg text-gray-500">
                  〒812-0012 福岡県福岡市博多区博多駅中央街１−1
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-gray-900 mb-4 border-b-2 border-indigo-600 w-fit">
                  代表取締役
                </span>
                <p className="text-lg text-gray-500">
                  澤崎成実
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-gray-900 mb-4 border-b-2 border-indigo-600 w-fit">
                  電話番号
                </span>
                <p className="text-lg text-gray-500">
                  080-8353-0038
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-gray-900 mb-4 border-b-2 border-indigo-600 w-fit">
                  創立
                </span>
                <p className="text-lg text-gray-500">
                  2020年10月11日
                </p>
              </div>
            </div>
            <div className="mt-16">
              <span className="inline-block text-xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-600 w-fit">
                事業内容
              </span>
              <div>
                <ul className="grid gap-2">
                  <li className="text-lg text-gray-500">
                    Webサービス開発
                  </li>
                  <li className="text-lg text-gray-500">
                    モバイルアプリケーション開発
                  </li>
                  <li className="text-lg text-gray-500">
                    Shopify構築&運用代行
                  </li>
                  <li className="text-lg text-gray-500">
                    AIの研究と活用
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Company;
