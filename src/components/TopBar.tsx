"use client"; // ✅ Next.js App Router에서 클라이언트 컴포넌트로 설정

import { useState } from "react";
import { Burger, Container, Group, Flex, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Header.module.css";

const links = [{ link: "/about", label: "Epic" }];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  return (
    <header
      className={classes.header}
      style={{
        width: "100vw", // ✅ 가로 Stretch 적용
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: "white", // ✅ 배경색 추가 (겹침 방지)
        borderBottom: "1px solid #ddd",
        padding: "10px 0",
      }}
    >
      <Container fluid className={classes.inner} style={{ maxWidth: "100vw" }}> {/* ✅ 전체 너비 적용 */}
        <Flex justify="space-between" align="center" style={{ width: "100%" }}> {/* ✅ 균등 정렬 */}
          
          {/* ✅ 로고 (좌측 고정 & 여백 추가) */}
          <MantineLogo size={28} style={{ flexShrink: 0, marginLeft: "80px" }} />

          {/* ✅ Epic 버튼 (우측 상단으로 이동) */}
          <Button
            component="a"
            href={links[0].link}
            className={classes.link}
            data-active={active === links[0].link || undefined}
            onClick={(event) => {
              event.preventDefault();
              setActive(links[0].link);
            }}
            style={{
              minWidth: "100px", // ✅ 버튼 크기 고정
              padding: "8px 16px",
              fontSize: "16px",
              fontWeight: "bold",
              marginLeft: "auto", // ✅ 우측 정렬
              marginRight: "90px", // ✅ 우측 여백 추가
            }}
          >
            {links[0].label}
          </Button>

          {/* ✅ 햄버거 버튼 (우측 정렬) */}
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" style={{ flexShrink: 0, marginRight: "20px" }} />
        
        </Flex>
      </Container>
    </header>
  );
}
