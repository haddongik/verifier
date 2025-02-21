"use client";
import { useState } from "react";
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer-continued";
import { Container, Title, Textarea, Button, Paper, Flex } from "@mantine/core";

const JsonDiffViewer = () => {
  const [json1, setJson1] = useState<string>(
    JSON.stringify(
      {
        uuid: "b25d7482-ad59-49e5-8130-f4002ab82487",
        name: "Device A",
        ipv4_management: "10.130.4.200",
        intent: {
          Device_Name: "aSym-Proxy-S410-a",
          serialNumber: "123456",
          Device_IPv4: "10.130.4.200",
          role: "old-role",
          license_type: ["Install ISG-PR license", "Install ISG-CAS license"],
        },
      },
      null,
      2
    )
  );

  const [json2, setJson2] = useState<string>(
    JSON.stringify(
      {
        uuid: "b25d7482-ad59-49e5-8130-f4002ab82487",
        name: "Device A V2",
        ipv4_management: "10.130.4.200",
        intent: {
          Device_Name: "aSym-Proxy-S410-a",
          serialNumber: "123456",
          Device_IPv4: "10.130.4.200",
          role: "new-role",
          license_type: ["Install ISG-PR license", "Install ISG-CAS license V2"],
        },
      },
      null,
      2
    )
  );

  const [showJsonInputs, setShowJsonInputs] = useState(false); // 🔹 토글 상태

  return (
    <Container fluid style={{ maxWidth: "95vw", height: "calc(100vh - 80px)" }}> {/* 높이 설정 추가 */}
      <Title order={2} mt="md">JSON Diff Viewer</Title>

      {/* 🔹 JSON 입력 필드 토글 버튼 */}
      <Button onClick={() => setShowJsonInputs(!showJsonInputs)} mt="md">
        {showJsonInputs ? "JSON 입력 숨기기" : "JSON 입력 보기"}
      </Button>

      {/* 🔹 JSON 입력 필드 (토글 상태에 따라 표시) */}
      {showJsonInputs && (
        <Paper shadow="xs" p="md" mt="lg" style={{ width: "100%" }}> {/* ✅ 반응형 적용 */}
          <Flex gap="md" wrap="wrap" style={{ width: "100%" }}> {/* ✅ 작은 화면에서도 자동 조정 */}
            <Textarea
              label="Old JSON"
              value={json1}
              onChange={(e) => setJson1(e.target.value)}
              autosize
              minRows={4}
              style={{ flex: 1, minWidth: "300px", width: "100%" }} /* ✅ 반응형 적용 */
            />
            <Textarea
              label="New JSON"
              value={json2}
              onChange={(e) => setJson2(e.target.value)}
              autosize
              minRows={4}
              style={{ flex: 1, minWidth: "300px", width: "100%" }} /* ✅ 반응형 적용 */
            />
          </Flex>
        </Paper>
      )}

      <Paper shadow="xs" p="md" mt="lg" style={{ 
        width: "100%", 
        height: "calc(100% - 100px)",  // 상단 여백을 제외한 전체 높이
        overflow: "auto"
      }}>
        <Title order={3}>Difference Preview</Title>
        <div style={{ height: "calc(100% - 40px)" }}> {/* diff viewer를 감싸는 div 추가 */}
          <ReactDiffViewer
            oldValue={json1}
            newValue={json2}
            splitView={true}
            disableWordDiff={false}
            compareMethod={DiffMethod.WORDS}
            leftTitle="USER RECORD BATTLE"
            rightTitle="SERVER VERIFY BATTLE"
            extraLinesSurroundingDiff={1}
            styles={{
              diffContainer: {
                width: "100%",
                height: "100%"
              },
              titleBlock: {
                fontWeight: "bold",
                fontSize: "18px",
                fontFamily: "Arial, sans-serif"
              },
              line: {
                fontFamily: "'Monaco', 'Consolas', monospace"
              },
              codeFold: {
                marginTop: 0,    // 접힌 코드 블록 간의 간격 제거
                marginBottom: 0
              }
            }}
          />
        </div>
      </Paper>
    </Container>
  );
};

export default JsonDiffViewer;
