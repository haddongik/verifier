"use client"; // Next.js App Router에서 상태 관리를 위해 필요
import { Container, Title } from "@mantine/core";
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/search');
  return null;
}