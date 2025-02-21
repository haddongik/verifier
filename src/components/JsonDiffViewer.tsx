"use client";
import { useState, useEffect } from "react";
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer-continued";
import { Container, Title, Textarea, Button, Paper, Flex } from "@mantine/core";

const JsonDiffViewer = ({ oldData, newData }: { oldData: any; newData: any }) => {
  const [oldJson, setOldJson] = useState<string | null>(null);
  const [newJson, setNewJson] = useState<string | null>(null);
  const [showJsonInputs, setShowJsonInputs] = useState(false); // 🔹 JSON 입력 필드 토글 상태

  // 🔹 컴포넌트가 처음 렌더링되거나 `oldData`, `newData`가 변경될 때 상태 업데이트
  useEffect(() => {
    if (oldData) {
      setOldJson(JSON.stringify(oldData, null, 2)); // JSON을 문자열로 변환 (들여쓰기 포함)
    }
    if (newData) {
      setNewJson(JSON.stringify(newData, null, 2));
    }
  }, [oldData, newData]);

  return (
    <Container fluid style={{ maxWidth: "95vw", height: "calc(100vh - 80px)" }}> {/* 높이 설정 추가 */}
      <Title order={2} mt="md">JSON Diff Viewer</Title>

      {/* 🔹 JSON 입력 필드 토글 버튼 */}
      <Button onClick={() => setShowJsonInputs(!showJsonInputs)} mt="md">
        {showJsonInputs ? "JSON 입력 숨기기" : "JSON 입력 보기"}
      </Button>

      {/* 🔹 JSON 입력 필드 (토글 상태에 따라 표시) */}
      {showJsonInputs && (
        <Paper shadow="xs" p="md" mt="lg" style={{ width: "100%" }}>
          <Flex gap="md" wrap="wrap" style={{ width: "100%" }}> {/* ✅ 작은 화면에서도 자동 조정 */}
            <Textarea
              label="Old JSON"
              value={oldJson || ""}
              onChange={(e) => setOldJson(e.target.value)}
              autosize
              minRows={4}
              style={{ flex: 1, minWidth: "300px", width: "100%" }} /* ✅ 반응형 적용 */
            />
            <Textarea
              label="New JSON"
              value={newJson || ""}
              onChange={(e) => setNewJson(e.target.value)}
              autosize
              minRows={4}
              style={{ flex: 1, minWidth: "300px", width: "100%" }} /* ✅ 반응형 적용 */
            />
          </Flex>
        </Paper>
      )}

      {/* 🔹 Difference Preview (항상 표시) */}
      <Paper shadow="xs" p="md" mt="lg" style={{ 
        width: "100%", 
        height: "calc(100% - 100px)",  // 상단 여백을 제외한 전체 높이
        overflow: "auto"
      }}>
        <Title order={3}>Difference Preview</Title>
        <div style={{ height: "calc(100% - 40px)" }}> {/* diff viewer를 감싸는 div 추가 */}
  
  {/* ✅ 가로 정렬을 위한 Title Wrapper 추가 */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      padding: "5px 10px", // ✅ 여백 추가
      fontWeight: "bold",
      fontSize: "14px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4", // ✅ 타이틀 배경 색 추가 (가독성 증가)
      minHeight: "30px", // ✅ 최소 높이 설정 (일관성 유지)
      borderBottom: "1px solid #ddd", // ✅ 아래 경계선 추가
    }}
  >
    <span style={{ flex: 1, textAlign: "center" }}>USER RECORD BATTLE</span>
    <span style={{ flex: 1, textAlign: "center" }}>SERVER VERIFY BATTLE</span>
  </div>

  <ReactDiffViewer
    oldValue={oldJson || ""}
    newValue={newJson || ""}
    splitView={true}
    disableWordDiff={false}
    compareMethod={DiffMethod.WORDS}
    extraLinesSurroundingDiff={1}
    styles={{
      diffContainer: {
        width: "100%",
        height: "100%",
      },
      titleBlock: {
        display: "none", // ✅ ReactDiffViewer의 기본 타이틀 숨김 (중복 방지)
      },
      line: {
        fontFamily: "'Monaco', 'Consolas', monospace",
      },
      codeFold: {
        marginTop: 0, // ✅ 접힌 코드 블록 간의 간격 제거
        marginBottom: 0,
      },
    }}
  />
</div>
      </Paper>
    </Container>
  );
};

export default JsonDiffViewer;
