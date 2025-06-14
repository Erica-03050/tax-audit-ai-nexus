
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingDown, TrendingUp, Shield } from "lucide-react";

export const RiskMonitor = () => {
  const riskData = [
    {
      category: "费用归集异常",
      count: 12,
      trend: "up",
      severity: "high",
      description: "研发费用归集科目不规范"
    },
    {
      category: "凭证缺失",
      count: 8,
      trend: "down", 
      severity: "medium",
      description: "原始凭证不完整或缺失"
    },
    {
      category: "政策匹配异常",
      count: 5,
      trend: "up",
      severity: "medium", 
      description: "费用项目与政策规定不符"
    },
    {
      category: "数据一致性问题",
      count: 3,
      trend: "down",
      severity: "low",
      description: "申报数据与财务账目不一致"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case 'high': return '高风险';
      case 'medium': return '中风险';
      case 'low': return '低风险';
      default: return '未知';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            实时风险监控面板
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            智能识别各类风险点，实时监控审核状态，及时预警异常情况
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {riskData.map((risk, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge className={getSeverityColor(risk.severity)}>
                    <Shield className="h-3 w-3 mr-1" />
                    {getSeverityText(risk.severity)}
                  </Badge>
                  <div className="flex items-center">
                    {risk.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-red-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                </div>
                <CardTitle className="text-lg">{risk.category}</CardTitle>
                <CardDescription className="text-sm">
                  {risk.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {risk.count}
                    </div>
                    <div className="text-sm text-gray-500">
                      本月发现
                    </div>
                  </div>
                  <AlertTriangle className={`h-8 w-8 ${
                    risk.severity === 'high' ? 'text-red-500' :
                    risk.severity === 'medium' ? 'text-yellow-500' :
                    'text-blue-500'
                  }`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              风险处理建议
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                  <span className="font-medium text-red-900">高风险项目</span>
                </div>
                <p className="text-sm text-red-700">
                  建议立即人工复核，要求企业补充相关材料和说明
                </p>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="font-medium text-yellow-900">中风险项目</span>
                </div>
                <p className="text-sm text-yellow-700">
                  建议加强审核力度，重点关注相关凭证和政策依据
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Shield className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-medium text-blue-900">低风险项目</span>
                </div>
                <p className="text-sm text-blue-700">
                  可采用简化审核流程，重点进行抽查验证
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
