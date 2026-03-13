import { motion } from "motion/react";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Database,
  Users,
  Zap,
} from "lucide-react";

export default function AnalyticsDashboard() {
  const [activeMetric, setActiveMetric] = useState(0);
  const [dataIndex, setDataIndex] = useState(0);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex((prev) => (prev + 1) % 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const performanceData = [
    { name: "Jan", value: 4200, recovery: 3800, backup: 2400 },
    { name: "Feb", value: 5300, recovery: 4200, backup: 2800 },
    { name: "Mar", value: 4800, recovery: 3900, backup: 3200 },
    { name: "Apr", value: 6100, recovery: 5200, backup: 3800 },
    { name: "May", value: 7200, recovery: 6100, backup: 4200 },
    { name: "Jun", value: 8400, recovery: 7300, backup: 4800 },
  ];

  const storageData = [
    { name: "Archive", value: 45, color: "#8B5CF6" },
    { name: "Backup", value: 30, color: "#D4AF37" },
    { name: "Active", value: 15, color: "#7C4DFF" },
    { name: "Other", value: 10, color: "#B8860B" },
  ];

  const activityData = [
    { time: "00:00", scans: 120, ocr: 85, calls: 45 },
    { time: "04:00", scans: 90, ocr: 65, calls: 32 },
    { time: "08:00", scans: 280, ocr: 195, calls: 120 },
    { time: "12:00", scans: 340, ocr: 240, calls: 160 },
    { time: "16:00", scans: 310, ocr: 220, calls: 145 },
    { time: "20:00", scans: 180, ocr: 125, calls: 75 },
  ];

  const metrics = [
    {
      icon: Database,
      label: "Total Storage",
      value: "10.2 PB",
      change: "+12.5%",
      trend: "up",
      color: "#8B5CF6",
    },
    {
      icon: Activity,
      label: "Active Users",
      value: "8,549",
      change: "+8.2%",
      trend: "up",
      color: "#D4AF37",
    },
    {
      icon: Zap,
      label: "Avg Response",
      value: "0.8s",
      change: "-15.3%",
      trend: "down",
      color: "#7C4DFF",
    },
    {
      icon: Users,
      label: "Daily Scans",
      value: "12.4K",
      change: "+22.1%",
      trend: "up",
      color: "#B8860B",
    },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          const TrendIcon =
            metric.trend === "up" ? TrendingUp : TrendingDown;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-[#13152A]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#8B5CF6]/50 transition-all group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: `${metric.color}20`,
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: metric.color }}
                    />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${metric.trend === "up" ? "text-green-400" : "text-blue-400"}`}
                  >
                    <TrendIcon className="w-4 h-4" />
                    <span>{metric.change}</span>
                  </div>
                </div>

                <div
                  className="text-2xl mb-1"
                  style={{ color: metric.color }}
                >
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trends */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#13152A]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
        >
          <div className="mb-6">
            <h3 className="mb-2">Performance Trends</h3>
            <p className="text-sm text-gray-400">
              Monthly data operations volume
            </p>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient
                  id="colorValue"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#8B5CF6"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor="#8B5CF6"
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient
                  id="colorRecovery"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#D4AF37"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor="#D4AF37"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#ffffff10"
              />
              <XAxis
                dataKey="name"
                stroke="#666"
                style={{ fontSize: "12px" }}
              />
              <YAxis
                stroke="#666"
                style={{ fontSize: "12px" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#13152A",
                  border: "1px solid #8B5CF620",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#8B5CF6"
                strokeWidth={2}
                fill="url(#colorValue)"
                animationDuration={1500}
              />
              <Area
                type="monotone"
                dataKey="recovery"
                stroke="#D4AF37"
                strokeWidth={2}
                fill="url(#colorRecovery)"
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Storage Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#13152A]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
        >
          <div className="mb-6">
            <h3 className="mb-2">Storage Distribution</h3>
            <p className="text-sm text-gray-400">
              Data allocation by type
            </p>
          </div>

          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={storageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  animationDuration={1500}
                >
                  {storageData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#13152A",
                    border: "1px solid #8B5CF620",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            {storageData.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-gray-300">
                  {item.name}
                </span>
                <span className="text-sm text-gray-500 ml-auto">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Activity Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-[#13152A]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:col-span-2"
        >
          <div className="mb-6">
            <h3 className="mb-2">Daily Activity Timeline</h3>
            <p className="text-sm text-gray-400">
              Real-time operations across modules
            </p>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={activityData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#ffffff10"
              />
              <XAxis
                dataKey="time"
                stroke="#666"
                style={{ fontSize: "12px" }}
              />
              <YAxis
                stroke="#666"
                style={{ fontSize: "12px" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#13152A",
                  border: "1px solid #8B5CF620",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
              <Bar
                dataKey="scans"
                fill="#8B5CF6"
                radius={[8, 8, 0, 0]}
                animationDuration={1500}
              />
              <Bar
                dataKey="ocr"
                fill="#D4AF37"
                radius={[8, 8, 0, 0]}
                animationDuration={1500}
              />
              <Bar
                dataKey="calls"
                fill="#7C4DFF"
                radius={[8, 8, 0, 0]}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>

          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#8B5CF6]" />
              <span className="text-sm text-gray-300">
                Scans
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
              <span className="text-sm text-gray-300">OCR</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#7C4DFF]" />
              <span className="text-sm text-gray-300">
                Calls
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}