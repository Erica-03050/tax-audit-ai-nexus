
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Clock, CheckCircle } from "lucide-react";

export const StatsCards = () => {
  const stats = [
    {
      icon: TrendingUp,
      label: "审核效率提升",
      value: "85%",
      description: "相比传统人工审核",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Users,
      label: "服务税务局",
      value: "500+",
      description: "覆盖全国主要地区",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Clock,
      label: "平均处理时间",
      value: "2分钟",
      description: "单个案例审核时间",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: CheckCircle,
      label: "风险识别准确率",
      value: "96%",
      description: "AI智能识别精度",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
              <div>
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.description}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
