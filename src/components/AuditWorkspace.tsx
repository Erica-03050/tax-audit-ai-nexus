
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Eye,
  Download,
  Send,
  Users,
  FileCheck
} from "lucide-react";

export const AuditWorkspace = () => {
  const auditCases = [
    {
      id: "RD-2024-001",
      company: "某科技有限公司",
      amount: "128.5万元",
      status: "待补充资料",
      progress: 65,
      risks: ["人工费占比过高", "材料费凭证不完整", "项目立项书缺失"],
      statusColor: "bg-orange-100 text-orange-700",
      statusIcon: FileCheck,
      stage: "原始凭证审核阶段"
    },
    {
      id: "RD-2024-002", 
      company: "某制造企业",
      amount: "89.2万元",
      status: "系统审核中",
      progress: 35,
      risks: ["费用结构异常"],
      statusColor: "bg-blue-100 text-blue-700",
      statusIcon: Clock,
      stage: "关键指标分析阶段"
    },
    {
      id: "RD-2024-003",
      company: "某软件公司",
      amount: "156.8万元", 
      status: "审核通过",
      progress: 100,
      risks: [],
      statusColor: "bg-green-100 text-green-700",
      statusIcon: CheckCircle,
      stage: "审核完成"
    },
    {
      id: "RD-2024-004",
      company: "某新材料公司",
      amount: "203.6万元",
      status: "高风险预警",
      progress: 80,
      risks: ["研发费用归集异常", "凭证与项目不匹配", "人员资质疑问"],
      statusColor: "bg-red-100 text-red-700",
      statusIcon: AlertTriangle,
      stage: "深度人工审核阶段"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          智能审核工作台
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          基于真实审核流程的工作台展示，涵盖从系统初审到深度人工审核的全流程管理
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {auditCases.map((auditCase, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  {auditCase.id}
                </Badge>
                <Badge className={auditCase.statusColor}>
                  <auditCase.statusIcon className="h-3 w-3 mr-1" />
                  {auditCase.status}
                </Badge>
              </div>
              <CardTitle className="text-lg">{auditCase.company}</CardTitle>
              <CardDescription>
                申报金额：{auditCase.amount} | {auditCase.stage}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">审核进度</span>
                    <span className="font-medium">{auditCase.progress}%</span>
                  </div>
                  <Progress value={auditCase.progress} className="h-2" />
                </div>

                {auditCase.risks.length > 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex items-center text-red-700 text-sm mb-2">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      发现 {auditCase.risks.length} 个风险点
                    </div>
                    <ul className="text-xs text-red-600 space-y-1">
                      {auditCase.risks.map((risk, idx) => (
                        <li key={idx}>• {risk}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {auditCase.risks.length === 0 && auditCase.status === "审核通过" && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center text-green-700 text-sm">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      企业合规，无风险点发现
                    </div>
                  </div>
                )}

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="h-4 w-4 mr-1" />
                    查看详情
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                  {auditCase.status === "待补充资料" && (
                    <Button size="sm" variant="outline">
                      <Users className="h-4 w-4" />
                    </Button>
                  )}
                  <Button size="sm" variant="outline">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 审核统计概览 */}
      <div className="mt-12 grid md:grid-cols-4 gap-6">
        <Card className="text-center p-6">
          <div className="text-2xl font-bold text-blue-600 mb-2">156</div>
          <div className="text-sm text-gray-600">本月总申报案例</div>
        </Card>
        <Card className="text-center p-6">
          <div className="text-2xl font-bold text-green-600 mb-2">89</div>
          <div className="text-sm text-gray-600">系统自动通过</div>
        </Card>
        <Card className="text-center p-6">
          <div className="text-2xl font-bold text-orange-600 mb-2">45</div>
          <div className="text-sm text-gray-600">需人工审核</div>
        </Card>
        <Card className="text-center p-6">
          <div className="text-2xl font-bold text-red-600 mb-2">22</div>
          <div className="text-sm text-gray-600">发现风险问题</div>
        </Card>
      </div>
    </div>
  );
};
