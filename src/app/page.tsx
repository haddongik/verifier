"use client"; // Next.js App Router에서 상태 관리를 위해 필요
import { Container, Title } from "@mantine/core";

export default function Home() {
  return (
    <Container>
      <Title order={2}>메인 페이지</Title>
      <p>왼쪽 네비게이션에서 검색 버튼을 클릭하세요.</p>
    </Container>
  );
}