"use client"; // ✅ Next.js에서는 필요

import { useState } from "react";
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer-continued";
import { Container, Title, Textarea, Button, Paper } from "@mantine/core";

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

  return (
    <Container>
      <Title order={2} mt="md">JSON Diff Viewer</Title>
      <Paper shadow="xs" p="md" mt="lg">
        <Textarea
          label="Old JSON"
          value={json1}
          onChange={(e) => setJson1(e.target.value)}
          autosize
          minRows={4}
          mt="md"
        />
        <Textarea
          label="New JSON"
          value={json2}
          onChange={(e) => setJson2(e.target.value)}
          autosize
          minRows={4}
          mt="md"
        />
      </Paper>

      <Paper shadow="xs" p="md" mt="lg">
        <Title order={3}>Difference Preview</Title>
        <ReactDiffViewer
          oldValue={json1}
          newValue={json2}
          splitView={true}
          disableWordDiff={false}
          compareMethod={DiffMethod.WORDS}
          leftTitle="Previous Version (Saved)"
          rightTitle="Current Version (Editing)"
          extraLinesSurroundingDiff={1}
        />
      </Paper>
    </Container>
  );
};

export default JsonDiffViewer;