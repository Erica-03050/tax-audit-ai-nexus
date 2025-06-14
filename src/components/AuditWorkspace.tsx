
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
  Send
} from "lucide-react";

export const AuditWorkspace = () => {
  const auditCases = [
    {
      id: "RD-2024-001",
      company: "某科技有限公司",
      amount: "128.5万元",
      status: "高风险",
      progress: 75,
      risks: 3,
      statusColor: "bg-red-100 text-red-700",
      statusIcon: AlertTriangle
    },
    {
      id: "RD-2024-002", 
      company: "某制造企业",
      amount: "89.2万元",
      status: "中风险",
      progress: 45,
      risks: 1,
      statusColor: "bg-yellow-100 text-yellow-700",
      statusIcon: Clock
    },
    {
      id: "RD-2024-003",
      company: "某软件公司",
      amount: "156.8万元", 
      status: "已通过",
      progress: 100,
      risks: 0,
      statusColor: "bg-green-100 text-green-700",
      statusIcon: CheckCircle
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          智能审核工作台演示
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          实时展示审核进度，智能识别风险点，提供专业的审核建议
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
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
                申报金额：{auditCase.amount}
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

                {auditCase.risks > 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex items-center text-red-700 text-sm">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      发现 {auditCase.risks} 个风险点
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
                  <Button size="sm" variant="outline">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
