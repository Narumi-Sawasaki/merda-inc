import Header from '../components/Header'
import Footer from '../components/Footer'
import React from "react";
import { ListIcon } from "../components/Icon";

export default function Home() {
  return (
    <div className="min-h-screen pb-96 relative box-border">
      <Header title="About Us"/>
      <main>
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Who we are</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Merdaはテクノロジーに特化した会社です
              </p>
              <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
                Web開発、モバイルアプリケーション開発、AIの研究とシステム開発など幅広いサービスを提供します。
                高い技術力を持つメンバーがお客様のビジネスを成功に導きます。
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <ListIcon/>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Webサービス開発</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    豊富な経験と技術力を持ったエンジニアたちが、お客様のニーズに合わせたWebサービスの開発を行います
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <ListIcon/>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">モバイルアプリケーション開発</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    iOSとAndroid、両方のプラットフォームに対応したアプリケーションの開発を行います
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <ListIcon/>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Shopify構築及び運用代行</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    eコマースに特化したプラットフォームであるShopifyを用いて、お客様のオンラインショップの構築から運用まで代行します。Shopifyの専門知識を持つスタッフがお客様にとって最適なショッピング体験を提供します。
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <ListIcon/>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">AIの研究と活用</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    最新の技術を駆使してお客様のビジネス課題を解決するために最適なAIソリューションを提供します
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  )
}
