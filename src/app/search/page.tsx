"use client";
import { useState } from "react";
import { Tabs, TextInput, Button, Container, Paper, Title, Group, Flex } from "@mantine/core";
import { IconCircleFilled } from "@tabler/icons-react";
import JsonDiffViewer from "@/components/JsonDiffViewer";

export default function SearchPage() {
  const [id, setId] = useState("");
  const [data, setData] = useState<{ old: any; new: any } | null>(null);
  const [activeTab, setActiveTab] = useState("tab1");

  const fetchData = async () => {
    try {
      const response = await fetch("/api/read-json");
  
      // 🔹 JSON인지 확인
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("JSON 응답이 아닙니다. API 라우트 확인 필요.");
      }
  
      let result = await response.json();
  
      // 🔹 result가 string이면 JSON 파싱 수행
      if (typeof result === "string") {
        console.log("String JSON detected, parsing...");
        result = JSON.parse(result);
      }
  
      console.log("Decoded Data:", result);
      setData(result);
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
            SEED
          </Tabs.Tab>
          <Tabs.Tab value="tab2" leftSection={<IconCircleFilled size={10} />} style={{ fontSize: "16px", fontWeight: "bold" }}>
            HP
          </Tabs.Tab>
          <Tabs.Tab value="tab3" leftSection={<IconCircleFilled size={10} />} style={{ fontSize: "16px", fontWeight: "bold" }}>
            CS
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <Paper shadow="xs" p="md" mt="lg" style={{ width: "100%" }}>
            {data ? (
                <JsonDiffViewer oldData={data.params.result_info.record_seed_infos} newData={data.params.result_info.verify_seed_infos} /> 
              ) : (
                <p>JSON 데이터를 불러오는 중...</p> 
              )}
          </Paper>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <Paper shadow="xs" p="md" mt="lg" style={{ width: "100%" }}>
            {data ? (
                <JsonDiffViewer oldData={data.params.result_info.record_hp_infos} newData={data.params.result_info.verify_hp_infos} /> 
              ) : (
                <p>JSON 데이터를 불러오는 중...</p> 
              )}
          </Paper>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <Paper shadow="xs" p="md" mt="lg" style={{ width: "100%" }}>
            {data ? (
                <JsonDiffViewer oldData={data.params.result_info.record_cs_infos} newData={data.params.result_info.verify_cs_infos} /> 
              ) : (
                <p>JSON 데이터를 불러오는 중...</p> 
              )}
          </Paper>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}
