
import { AdminSidebar } from "./AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen w-full bg-white text-slate-900 font-display antialiased overflow-hidden">
            <AdminSidebar />
            <main className="flex-1 flex flex-col h-full overflow-y-auto bg-white relative">
                {children}
            </main>
        </div>
    );
}
