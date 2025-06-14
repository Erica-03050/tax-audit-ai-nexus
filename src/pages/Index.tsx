
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Brain, 
  TrendingUp, 
  Users, 
  FileText, 
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3,
  Settings,
  UserCheck,
  Search,
  Download,
  Bell
} from "lucide-react";
import { Header } from "@/components/Header";
import { StatsCards } from "@/components/StatsCards";
import { AuditWorkspace } from "@/components/AuditWorkspace";
import { RiskMonitor } from "@/components/RiskMonitor";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-800/30 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <Shield className="h-5 w-5 text-blue-300" />
              <span className="text-blue-100 text-sm font-medium">税务局专用智能审核系统</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              税研智审通
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              研发费用智能审核助手 - 专为税务局打造的AI驱动审核解决方案
            </p>
            <p className="text-lg text-blue-200 mb-10 max-w-4xl mx-auto leading-relaxed">
              通过智能化技术实现研发费用审核全流程自动化，精准识别风险点，大幅提升审核效率与质量，
              确保政策规范落地，助力税务工作现代化转型
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 shadow-lg">
                <UserCheck className="mr-2 h-5 w-5" />
                立即登录审核工作台
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <FileText className="mr-2 h-5 w-5" />
                查看功能介绍
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsCards />

      {/* Core Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            核心功能模块
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            全面覆盖研发费用审核工作流程，提供专业、高效的智能化解决方案
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* 智能审核 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">智能审核引擎</CardTitle>
              <CardDescription className="text-gray-600">
                AI驱动的自动化审核流程，精准识别风险点
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  自动数据比对与分析
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  智能风险分级预警
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  政策规则智能匹配
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 风险监控 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-red-50 to-orange-50">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">风险监控预警</CardTitle>
              <CardDescription className="text-gray-600">
                实时监测审核数据，多维度风险预警
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  实时风险监测
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  多渠道预警通知
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  详细风险报告生成
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 数据分析 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">数据管理分析</CardTitle>
              <CardDescription className="text-gray-600">
                多维度数据统计，可视化分析展示
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  批量数据导入导出
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  可视化图表分析
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  多维度统计报表
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Audit Workspace Demo */}
        <AuditWorkspace />
      </section>

      {/* Risk Monitor Section */}
      <RiskMonitor />

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              系统优势特色
            </h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              专为税务局定制开发，深度契合实际工作需求
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">效率提升</h3>
              <p className="text-blue-200">
                自动化审核流程，效率提升80%以上
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">安全可靠</h3>
              <p className="text-blue-200">
                SSL加密传输，严格权限控制机制
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">协同办公</h3>
              <p className="text-blue-200">
                支持团队协作，内外部沟通一体化
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">灵活配置</h3>
              <p className="text-blue-200">
                可根据地区政策灵活配置审核规则
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              立即体验税研智审通
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              专业的研发费用智能审核解决方案，助力税务工作现代化
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <UserCheck className="mr-2 h-5 w-5" />
                申请试用账号
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Download className="mr-2 h-5 w-5" />
                下载产品手册
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-400 mr-3" />
                <span className="text-xl font-bold">税研智审通</span>
              </div>
              <p className="text-gray-400">
                专为税务局打造的研发费用智能审核助手
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">产品功能</h3>
              <ul className="space-y-2 text-gray-400">
                <li>智能审核引擎</li>
                <li>风险监控预警</li>
                <li>数据管理分析</li>
                <li>协同办公平台</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">技术支持</h3>
              <ul className="space-y-2 text-gray-400">
                <li>在线帮助文档</li>
                <li>技术支持热线</li>
                <li>培训服务</li>
                <li>运维保障</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">联系我们</h3>
              <ul className="space-y-2 text-gray-400">
                <li>客服热线：400-xxx-xxxx</li>
                <li>技术支持：tech@example.com</li>
                <li>商务合作：business@example.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 税研智审通. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
