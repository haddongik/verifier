"use client";
import { useState } from "react";
import { Tabs, TextInput, Button, Container, Paper, Title } from "@mantine/core";

export default function SearchPage() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/search?id=${id}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  };

  return (
    <Container>
      <Title order={2}>검색 페이지</Title>

      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab value="tab1">탭 1</Tabs.Tab>
          <Tabs.Tab value="tab2">탭 2</Tabs.Tab>
          <Tabs.Tab value="tab3">탭 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <Paper shadow="xs" p="md" mt="lg">
            <TextInput
              label="ID 입력"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="ID를 입력하세요"
            />
            <Button onClick={fetchData} mt="md">
              검색
            </Button>
          </Paper>
        </Tabs.Panel>
      </Tabs>

      {data && (
        <Paper shadow="xs" p="md" mt="lg">
          <Title order={3}>검색 결과:</Title>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Paper>
      )}
    </Container>
  );
}
