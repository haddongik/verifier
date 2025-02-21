"use client";
import { useState } from "react";
import { Tabs, TextInput, Button, Container, Paper, Title, Group, Flex } from "@mantine/core";
import { IconCircleFilled } from "@tabler/icons-react";
import JsonDiffViewer from "@/components/JsonDiffViewer";

export default function SearchPage() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("tab1");

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/search?id=${id}`);
      const result = await response.json();
      setData(result);
      setActiveTab("tab1");
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  };

  return (
    <Container fluid style={{ paddingTop: "60px", maxWidth: "90vw" }}> {/* ✅ 반응형 너비 적용 */}
      
      {/* 🔹 검색 필드 */}
      <Group position="apart" align="center" style={{ width: "100%", marginBottom: "20px", flexWrap: "wrap" }}>
        <Title order={2} style={{ flex: 1 }}>Search</Title>

        <Flex gap="sm" align="center" wrap="wrap"> {/* ✅ 반응형 적용 */}
          <TextInput
            placeholder="ID 입력"
            value={id}
            onChange={(e) => setId(e.target.value)}
            size="sm"
            style={{ minWidth: "180px", flexGrow: 1 }} /* ✅ 반응형 적용 */
          />
          <Button onClick={fetchData} size="sm">
            검색
          </Button>
        </Flex>
      </Group>

      {/* 🔹 반응형 Tabs */}
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        variant="pills"
        color="blue"
        radius="md"
        style={{ width: "100%" }} /* ✅ 반응형 적용 */
      >
        <Tabs.List grow style={{ flexWrap: "wrap" }}> {/* ✅ 작은 화면에서 줄바꿈 가능 */}
          <Tabs.Tab value="tab1" leftSection={<IconCircleFilled size={10} />} style={{ fontSize: "16px", fontWeight: "bold" }}>
            JSON DIFF
          </Tabs.Tab>
          <Tabs.Tab value="tab2" leftSection={<IconCircleFilled size={10} />} style={{ fontSize: "16px", fontWeight: "bold" }}>
            SEED
          </Tabs.Tab>
          <Tabs.Tab value="tab3" leftSection={<IconCircleFilled size={10} />} style={{ fontSize: "16px", fontWeight: "bold" }}>
            HP
          </Tabs.Tab>
          <Tabs.Tab value="tab4" leftSection={<IconCircleFilled size={10} />} style={{ fontSize: "16px", fontWeight: "bold" }}>
            CS
          </Tabs.Tab>
        </Tabs.List>

        {/* 🔹 반응형 Panel */}
        <Tabs.Panel value="tab1">
          <Paper shadow="xs" p="md" mt="lg" style={{ width: "100%" }}> {/* ✅ 반응형 적용 */}
            <JsonDiffViewer />
          </Paper>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <Paper shadow="xs" p="md" mt="lg" style={{ width: "100%" }}>
            <Title order={3}>탭 02 내용</Title>
            <p>여기에 탭 2의 내용이 들어갑니다.</p>
          </Paper>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <Paper shadow="xs" p="md" mt="lg" style={{ width: "100%" }}>
            <Title order={3}>탭 3 내용</Title>
            <p>여기에 탭 3의 내용이 들어갑니다.</p>
          </Paper>
        </Tabs.Panel>

        <Tabs.Panel value="tab4">
          <Paper shadow="xs" p="md" mt="lg" style={{ width: "100%" }}>
            <Title order={3}>탭 4 내용</Title>
            <p>여기에 탭 4의 내용이 들어갑니다.</p>
          </Paper>
        </Tabs.Panel>
      </Tabs>

      {/* 🔹 검색 결과 */}
      {data && (
        <Paper shadow="xs" p="md" mt="lg" style={{ width: "100%" }}> {/* ✅ 반응형 적용 */}
          <Title order={3}>검색 결과:</Title>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Paper>
      )}
    </Container>
  );
}
