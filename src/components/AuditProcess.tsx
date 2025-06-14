
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Play,
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users,
  Search,
  FileCheck,
  XCircle,
  ArrowRight,
  ArrowDown
} from "lucide-react";

export const AuditProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: "企业提交申报",
      description: "企业准备并提交《研发费用加计扣除优惠明细表》（A107012）",
      icon: FileText,
      status: "completed",
      details: ["填写研发费用明细", "提交相关附表", "系统接收审核"]
    },
    {
      id: 2,
      title: "系统初步审核",
      description: "自动审核附表关键指标（经费、材料费、人工费占比等）",
      icon: Search,
      status: "processing",
      details: ["费用结构分析", "比例合理性检查", "异常指标识别"]
    },
    {
      id: 3,
      title: "风险评估决策",
      description: "基于关键指标判断是否存在异常风险",
      icon: AlertTriangle,
      status: "pending",
      details: ["低风险：直接通过", "中高风险：进入深度审核"]
    },
    {
      id: 4,
      title: "约谈与资料补充",
      description: "税务机关发起约谈，要求企业提交备查资料",
      icon: Users,
      status: "pending",
      details: ["明细账（6类费用）", "年度汇总表", "原始凭证材料"]
    },
    {
      id: 5,
      title: "深度审核验证",
      description: "全面审核所有原始凭证和支撑材料",
      icon: FileCheck,
      status: "pending",
      details: ["项目立项书验证", "人员资质审核", "费用凭证核实"]
    },
    {
      id: 6,
      title: "最终审核结论",
      description: "基于全面审核出具最终结论和处理意见",
      icon: CheckCircle,
      status: "pending",
      details: ["合规通过", "补充修正", "存在风险"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'processing': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'processing': return Clock;
      case 'pending': return AlertTriangle;
      default: return Clock;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            智能审核流程
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            基于真实业务场景设计的研发费用审核流程，实现从申报到结论的全程智能化管理
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {processSteps.map((step, index) => {
            const StatusIcon = getStatusIcon(step.status);
            return (
              <div key={step.id} className="relative">
                <Card className={`border-2 ${getStatusColor(step.status)} hover:shadow-xl transition-all duration-300`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        步骤 {step.id}
                      </Badge>
                      <StatusIcon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg flex items-center">
                      <step.icon className="h-5 w-5 mr-2" />
                      {step.title}
                    </CardTitle>
                    <CardDescription>
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {/* 连接箭头 */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
                
                {/* 移动端向下箭头 */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <ArrowDown className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 关键审核要点 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            原始凭证审核要点
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">项目管理类</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 项目立项书、意向书</li>
                <li>• 项目组长签字确认</li>
                <li>• 人员公示表</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-medium text-green-900 mb-2">人员资质类</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• 学历证书验证</li>
                <li>• 入职信息（HR数据）</li>
                <li>• 任职经历证明</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-medium text-purple-900 mb-2">费用凭证类</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 材料费：出库单、领料单</li>
                <li>• 原始发票、合同</li>
                <li>• 银行流水记录</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-medium text-orange-900 mb-2">知识产权类</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• 专利证书</li>
                <li>• 软件著作权</li>
                <li>• 其他知识产权证明</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-medium text-red-900 mb-2">材料消耗类</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• 实验材料消耗单</li>
                <li>• 材料领用记录</li>
                <li>• 库存管理凭证</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-medium text-yellow-900 mb-2">财务账务类</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 6类费用明细账</li>
                <li>• 年度汇总表</li>
                <li>• 会计凭证</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
