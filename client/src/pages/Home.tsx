import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_TITLE } from "@/const";
import logoFont from "@assets/logo-font.png";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={logoFont}
                alt="App Logo"
                className="h-8"
              />
              {/* <div className="w-10 h-10 bg-gradient-to-br from-[#2C5F7C] to-[#4A9B8E] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">纪</span>
              </div>
              <div>
                <div className="font-bold text-xl text-[#2C5F7C]">深圳市纪元时代科技有限公司</div>
                <div className="text-xs text-gray-500">Shenzhen Jiyuan Era Technology Co., Ltd.</div>
              </div> */}
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-[#2C5F7C] transition-colors">关于我们</a>
              <a href="#technology" className="text-gray-700 hover:text-[#2C5F7C] transition-colors">核心技术</a>
              <a href="#products" className="text-gray-700 hover:text-[#2C5F7C] transition-colors">产品矩阵</a>
              <a href="#partners" className="text-gray-700 hover:text-[#2C5F7C] transition-colors">战略合作</a>
              <a href="#contact" className="text-gray-700 hover:text-[#2C5F7C] transition-colors">联系我们</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#2C5F7C]/5 via-white to-[#4A9B8E]/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-[#FF6B6B]/10 rounded-full mb-6">
              <span className="text-[#FF6B6B] font-semibold text-sm">国家高新技术企业</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              具身智能<br />
              <span className="bg-gradient-to-r from-[#2C5F7C] to-[#4A9B8E] bg-clip-text text-transparent">
                赋能未来生活
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              深圳市纪元时代科技有限公司是一家聚焦具身智能研究探索的高新技术企业<br />
              致力于人工智能与机器人技术的深度融合，为智慧康养、科研教育及轨道交通等领域提供智能解决方案
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button
                size="lg"
                className="bg-[#2C5F7C] hover:bg-[#2C5F7C]/90 text-white px-8 py-6 text-lg"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                了解产品
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#2C5F7C] text-[#2C5F7C] hover:bg-[#2C5F7C]/5 px-8 py-6 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                联系我们
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">关于我们</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C5F7C] to-[#4A9B8E] mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#2C5F7C]/5 to-[#4A9B8E]/5 p-8 rounded-2xl">
                <div className="text-[#2C5F7C] text-4xl font-bold mb-2">2022</div>
                <div className="text-gray-700 font-semibold mb-2">成立时间</div>
                <div className="text-gray-600 text-sm">深圳粤海街道</div>
              </div>
              <div className="bg-gradient-to-br from-[#4A9B8E]/5 to-[#FF6B6B]/5 p-8 rounded-2xl">
                <div className="text-[#4A9B8E] text-4xl font-bold mb-2">国家级</div>
                <div className="text-gray-700 font-semibold mb-2">高新技术企业</div>
                <div className="text-gray-600 text-sm">具身智能领域</div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                深圳市纪元时代科技有限公司成立于2022年，坐落于深圳粤海街道科技创新核心区域。作为国家高新技术企业，我们专注于<strong className="text-[#2C5F7C]">具身智能</strong>的研究与应用探索，致力于推动人工智能与机器人技术的深度融合。
              </p>
              <p>
                公司依托<strong className="text-[#4A9B8E]">香港理工大学深圳研究院</strong>的雄厚科研资源，建立了产学研深度合作机制。我们的研发团队专注于机器人本体控制技术、运动规划算法以及多模态感知系统的研究，为智慧康养、科研教育及轨道交通等多个领域提供创新的智能解决方案。
              </p>
              <p>
                我们的愿景是通过具身智能技术，让机器人真正理解物理世界，与人类自然交互，成为人类生活和工作中可信赖的智能伙伴。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gradient-to-br from-[#2C5F7C]/5 via-white to-[#4A9B8E]/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">核心技术</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2C5F7C] to-[#4A9B8E] mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            以具身智能为基础，融合VLA大模型，赋予机器人感知、理解与交互能力
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tech 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2C5F7C] to-[#4A9B8E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">具身智能核心</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                融合视觉、触觉、本体感知的多模态感知系统，使机器人能够理解物理世界的三维空间、物体属性和动态变化。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#4A9B8E] mr-2">•</span>
                  <span>多传感器融合感知</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4A9B8E] mr-2">•</span>
                  <span>空间理解与建图</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4A9B8E] mr-2">•</span>
                  <span>物理交互预测</span>
                </li>
              </ul>
            </div>

            {/* Tech 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A9B8E] to-[#FF6B6B] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">VLA大模型驱动</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                基于Vision-Language-Action大模型，实现从视觉理解到语言交互再到动作执行的端到端智能决策。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#4A9B8E] mr-2">•</span>
                  <span>多模态LLM对话引擎</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4A9B8E] mr-2">•</span>
                  <span>情感识别与理解</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4A9B8E] mr-2">•</span>
                  <span>任务规划与执行</span>
                </li>
              </ul>
            </div>

            {/* Tech 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B6B] to-[#2C5F7C] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">运动控制算法</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                自主研发的机器人小脑控制技术，实现高精度运动规划、动态平衡控制和复杂环境自主导航。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#4A9B8E] mr-2">•</span>
                  <span>轨迹规划与优化</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4A9B8E] mr-2">•</span>
                  <span>动态平衡控制</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4A9B8E] mr-2">•</span>
                  <span>自主避障导航</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">技术优势</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2C5F7C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#2C5F7C] font-bold text-xl">01</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">多场景自主适应</h4>
                  <p className="text-gray-600 text-sm">机器人能够在不同环境中自主学习和适应，无需人工重新编程</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#4A9B8E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#4A9B8E] font-bold text-xl">02</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">自然人机交互</h4>
                  <p className="text-gray-600 text-sm">基于大模型的语言理解和情感识别，实现类人化的自然交流</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FF6B6B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#FF6B6B] font-bold text-xl">03</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">高精度运动控制</h4>
                  <p className="text-gray-600 text-sm">毫米级精度的运动控制，确保复杂任务的可靠执行</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2C5F7C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#2C5F7C] font-bold text-xl">04</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">持续学习进化</h4>
                  <p className="text-gray-600 text-sm">通过数据积累和模型迭代，机器人能力持续提升</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">产品矩阵</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2C5F7C] to-[#4A9B8E] mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            三大核心产品线，覆盖智慧康养、科研教育、轨道交通等多个领域
          </p>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Product 1: GIBOT */}
            <div className="bg-gradient-to-br from-[#2C5F7C]/5 to-white p-8 md:p-12 rounded-3xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-[#2C5F7C]/10 rounded-full mb-4">
                    <span className="text-[#2C5F7C] font-semibold text-sm">智慧康养</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">GIBOT AI康养陪伴机器人</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    面向老年与康复人群，提供全方位的情感陪伴与健康监测服务。基于多模态LLM的主动式陪伴，结合跌倒检测、健康预警等功能，让老年人安心、子女放心。
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#4A9B8E] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">AI情感陪伴：80%孤独感降低</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#4A9B8E] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">跌倒检测：97%准确率，&lt;10秒应急响应</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#4A9B8E] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">健康监测：心率、血压、睡眠质量实时追踪</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#4A9B8E] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">用药提醒：智能用药管理，降低30%再入院率</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">目标市场</span>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-[#2C5F7C]/10 text-[#2C5F7C] rounded-full text-sm">居家养老</span>
                      <span className="px-3 py-1 bg-[#2C5F7C]/10 text-[#2C5F7C] rounded-full text-sm">养老院</span>
                      <span className="px-3 py-1 bg-[#2C5F7C]/10 text-[#2C5F7C] rounded-full text-sm">康复中心</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#2C5F7C]/10 to-[#4A9B8E]/10 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-16 h-16 text-[#2C5F7C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm">GIBOT AI伴侣机器人</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2: Humanoid Robot */}
            <div className="bg-gradient-to-br from-[#4A9B8E]/5 to-white p-8 md:p-12 rounded-3xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 bg-gradient-to-br from-[#4A9B8E]/10 to-[#FF6B6B]/10 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-16 h-16 text-[#4A9B8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm">人形双臂轮式机器人</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-block px-4 py-2 bg-[#4A9B8E]/10 rounded-full mb-4">
                    <span className="text-[#4A9B8E] font-semibold text-sm">科研教育</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">人形双臂轮式机器人</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    适用于科研与工业场景，支持移动抓取与多任务操作。融合视觉感知、力控抓取、自主导航等技术，为高校科研和工业应用提供灵活的机器人平台。
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#FF6B6B] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">双臂协同：7自由度机械臂，支持复杂操作任务</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#FF6B6B] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">移动平台：全向轮底盘，灵活移动抓取</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#FF6B6B] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">视觉感知：3D视觉系统，精准物体识别与定位</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#FF6B6B] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">开放平台：ROS2架构，支持二次开发</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">应用场景</span>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-[#4A9B8E]/10 text-[#4A9B8E] rounded-full text-sm">高校科研</span>
                      <span className="px-3 py-1 bg-[#4A9B8E]/10 text-[#4A9B8E] rounded-full text-sm">工业巡检</span>
                      <span className="px-3 py-1 bg-[#4A9B8E]/10 text-[#4A9B8E] rounded-full text-sm">物流搬运</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 3: Security Robot */}
            <div className="bg-gradient-to-br from-[#FF6B6B]/5 to-white p-8 md:p-12 rounded-3xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-[#FF6B6B]/10 rounded-full mb-4">
                    <span className="text-[#FF6B6B] font-semibold text-sm">轨道交通</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">AI安检机器人</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    服务于轨道交通等公共场所，实现高效安检与异常预警。融合AI视觉识别、多传感器融合、自主导航等技术，提升安检效率，降低人力成本。
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#2C5F7C] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">AI视觉识别：违禁品检测准确率&gt;95%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#2C5F7C] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">异常预警：实时行为分析，异常事件秒级响应</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#2C5F7C] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">自主巡检：24/7无人值守，定点巡逻</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#2C5F7C] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">数据分析：客流统计、热力图分析、安全报告</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">部署场景</span>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] rounded-full text-sm">地铁站</span>
                      <span className="px-3 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] rounded-full text-sm">机场</span>
                      <span className="px-3 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] rounded-full text-sm">政府机关</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#2C5F7C]/10 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-16 h-16 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm">AI安检机器人</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gradient-to-br from-[#2C5F7C]/5 via-white to-[#4A9B8E]/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">战略合作</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2C5F7C] to-[#4A9B8E] mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            深化产学研合作，推动AI技术在更多领域的实用化落地
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2C5F7C] to-[#4A9B8E] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">北京大学<br />深圳研究院</h3>
              <p className="text-sm text-gray-600">学术研究合作<br />AI算法联合开发</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#4A9B8E] to-[#FF6B6B] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">香港理工大学<br />深圳研究院</h3>
              <p className="text-sm text-gray-600">技术研发合作<br />博士生实习基地</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B6B] to-[#2C5F7C] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">深圳地铁集团</h3>
              <p className="text-sm text-gray-600">应用场景合作<br />AI+安检机器人试点</p>
            </div>

            {/* <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2C5F7C] to-[#4A9B8E] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">新加坡<br />IWOW集团</h3>
              <p className="text-sm text-gray-600">国际市场合作<br />东南亚渠道拓展</p>
            </div> */}
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">合作价值</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-[#2C5F7C] text-3xl font-bold mb-2">学术背书</div>
                <p className="text-gray-600 text-sm">顶尖高校科研资源<br />技术可信度保障</p>
              </div>
              <div>
                <div className="text-[#4A9B8E] text-3xl font-bold mb-2">场景验证</div>
                <p className="text-gray-600 text-sm">真实应用场景测试<br />产品快速迭代</p>
              </div>
              <div>
                <div className="text-[#FF6B6B] text-3xl font-bold mb-2">市场拓展</div>
                <p className="text-gray-600 text-sm">国内外渠道资源<br />加速商业化落地</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">联系我们</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2C5F7C] to-[#4A9B8E] mx-auto mb-16"></div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#2C5F7C]/5 to-[#4A9B8E]/5 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">公司信息</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-[#2C5F7C] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">公司地址</div>
                      <div className="text-gray-600">广东省深圳市南山区粤海街道</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-[#2C5F7C] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">电子邮箱</div>
                      <div className="text-gray-600">chenfeng@jyera.com</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-[#2C5F7C] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">联系电话</div>
                      <div className="text-gray-600">+86 13423882268</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#4A9B8E]/5 to-[#FF6B6B]/5 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">商务合作</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  我们期待与您在智慧康养、科研教育、轨道交通等领域展开深度合作。无论您是投资机构、合作伙伴还是潜在客户，欢迎与我们联系。
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <svg className="w-5 h-5 text-[#4A9B8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>产品采购与定制</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <svg className="w-5 h-5 text-[#4A9B8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>技术合作与研发</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <svg className="w-5 h-5 text-[#4A9B8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>投资与融资咨询</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <svg className="w-5 h-5 text-[#4A9B8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>渠道代理与分销</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#2C5F7C] to-[#4A9B8E] text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-xl mb-1">深圳市纪元时代科技有限公司</div>
              <div className="text-sm text-white/80">Shenzhen Jiyuan Era Technology Co., Ltd.</div>
            </div>
            <div className="text-sm text-white/80">
              © 2024 纪元时代科技. 保留所有权利.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

