"use client"; // ✅ 클라이언트 컴포넌트로 설정

import { AppShell } from "@mantine/core";
import TopBar from "@/components/TopBar";
import NavigationBar from "@/components/NavigationBar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell padding="md">
      {/* ✅ 새로운 Mantine v7 방식 적용 */}
      <AppShell.Header>
        <TopBar />
      </AppShell.Header>

      <AppShell.Navbar>
        <NavigationBar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
