import { Header } from "@/components/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
    </div>
  );
}
