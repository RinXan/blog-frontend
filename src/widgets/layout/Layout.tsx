import type { ReactNode } from "react";
import Navbar from "../../shared/ui/Navbar";

type Props = {
  children: ReactNode;  
};

export default function Layout({children}: Props) {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <main className="max-w-5xl mx-auto p-6">
                {children}
            </main>
        </div>
    );
}