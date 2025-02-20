"use client"; // ✅ Next.js App Router에서 클라이언트 컴포넌트로 설정

import { AppShell, Title, Center } from "@mantine/core";

export default function TopBar() {
  return (
    <AppShell.Header h={60} p="xs" style={{ backgroundColor: "#222", color: "white" }}>
      <Center>
        <Title order={3} c="white">Next.js + Mantine</Title>
      </Center>
    </AppShell.Header>
  );
}
