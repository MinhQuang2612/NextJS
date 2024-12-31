import DashboardLayout from "@/components/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="text-gray-800">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
        <p className="text-gray-600">This is your central hub for analytics and management.</p>
        {/* Thêm nội dung trang chính của bạn tại đây */}
      </div>
    </DashboardLayout>
  );
}
