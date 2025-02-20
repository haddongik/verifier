"use client"; // ✅ Next.js App Router에서 클라이언트 컴포넌트로 설정

import { AppShell, Button, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function NavigationBar() {
  const router = useRouter();

  return (
    <AppShell.Navbar w={{ base: 200 }} p="xs">
      <Stack>
        <Button onClick={() => router.push("/search")}>1번 버튼 (검색)</Button>
      </Stack>
    </AppShell.Navbar>
  );
}
