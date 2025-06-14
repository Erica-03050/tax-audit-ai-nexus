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
  ArrowDown,
  BarChart3,
  ExternalLink
} from "lucide-react";

export const AuditProcess = () => {
  const handleViewBusinessFlow = () => {
    window.open('https://drive.google.com/file/d/18yjbgUiSvPwPBiH59QkGgm-u2-x47ouP/view?usp=sharing', '_blank');
  };

  const processSteps = [
    {
      id: 1,
      title: "企业提交A107012表",
      description: "企业提交《研发费用加计扣除优惠明细表》（A107012）",
      icon: FileText,
      status: "completed",
      details: ["填写研发费用明细", "提交相关附表", "系统接收审核"]
    },
    {
      id: 2,
      title: "系统自动审核指标",
      description: "自动审核A107012表关键指标，判断是否存在异常",
      icon: Search,
      status: "processing",
      details: ["费用结构分析", "比例合理性检查", "异常指标识别", "无异常则直接通过"]
    },
    {
      id: 3,
      title: "要求提供明细账",
      description: "发现异常时，要求企业提供明细账及年度汇总表",
      icon: BarChart3,
      status: "pending",
      details: ["6类费用明细账", "年度汇总表", "相关支撑材料"]
    },
    {
      id: 4,
      title: "明细账指标审核",
      description: "审核明细账中的各项指标是否合理",
      icon: FileCheck,
      status: "pending",
      details: ["费用归集合理性", "账务处理规范性", "数据一致性验证"]
    },
    {
      id: 5,
      title: "原始凭证审核",
      description: "深度审核原始凭证和支撑材料的真实性",
      icon: Users,
      status: "pending",
      details: ["项目立项书验证", "人员资质审核", "费用凭证核实", "材料消耗审核"]
    },
    {
      id: 6,
      title: "出具审核结论",
      description: "基于三个审核阶段出具最终结论和处理意见",
      icon: CheckCircle,
      status: "pending",
      details: ["合规通过", "补充修正", "存在风险", "后续处理建议"]
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

  const getCardBackgroundColor = (id: number) => {
    switch (id) {
      case 1: return 'bg-green-50 hover:bg-green-100';
      case 2: return 'bg-blue-50 hover:bg-blue-100';
      case 3: return 'bg-yellow-50 hover:bg-yellow-100';
      case 4: return 'bg-purple-50 hover:bg-purple-100';
      case 5: return 'bg-indigo-50 hover:bg-indigo-100';
      case 6: return 'bg-emerald-50 hover:bg-emerald-100';
      default: return 'bg-gray-50 hover:bg-gray-100';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            三阶段智能审核流程
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            基于真实业务场景的三个关键审核阶段：A107012表审核 → 明细账审核 → 原始凭证审核
          </p>
          <Button 
            onClick={handleViewBusinessFlow}
            variant="outline" 
            className="bg-white hover:bg-blue-50 border-blue-200 text-blue-700 hover:text-blue-800"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            查看实际业务流程图
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {processSteps.map((step, index) => {
            const StatusIcon = getStatusIcon(step.status);
            return (
              <div key={step.id} className="relative">
                <Card className={`border-2 ${getStatusColor(step.status)} ${getCardBackgroundColor(step.id)} hover:shadow-xl transition-all duration-300`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs font-medium">
                        阶段 {step.id}
                      </Badge>
                      <StatusIcon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg flex items-center text-gray-900 mb-2">
                      <step.icon className="h-5 w-5 mr-2" />
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {/* 连接箭头 */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
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

        {/* 三阶段审核重点说明 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            三阶段审核要点详解
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                第一阶段：A107012表审核
              </h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• 研发费用结构合理性</li>
                <li>• 各类费用占比检查</li>
                <li>• 异常指标自动识别</li>
                <li>• 政策符合性初步判断</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h4 className="font-bold text-yellow-900 mb-3 flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                第二阶段：明细账审核
              </h4>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• 6类费用明细账核查</li>
                <li>• 费用归集合理性分析</li>
                <li>• 账务处理规范性检查</li>
                <li>• 年度汇总表数据一致性</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h4 className="font-bold text-green-900 mb-3 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                第三阶段：原始凭证审核
              </h4>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• 项目立项书真实性</li>
                <li>• 人员资质证明材料</li>
                <li>• 费用凭证完整性</li>
                <li>• 材料消耗合理性</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
