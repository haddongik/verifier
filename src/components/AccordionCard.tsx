"use client";

import { Accordion, Card, Text, Grid, Container } from "@mantine/core";

// 왼쪽 데이터 (기존)
const data1: AccordionItem[] = [
  {
    id: 1,
    title: "턴 1",
    description: "TuwnOwner : 라스",
    ally: "friend", // ✅ 초록색 배경
    subItems: [
      {
        id: "1-1",
        title: "라스 3스킬 발동",
        details: [
          { label: "Name", value: "John Doe" },
          { label: "Age", value: "30" },
          { label: "City", value: "New York" },
        ],
      },
      {
        id: "1-2",
        title: "화염 드라고나 반격",
        details: [
          { label: "Name", value: "John Doe" },
          { label: "Age", value: "30" },
          { label: "City", value: "New York" },
        ],
      },
      {
        id: "1-3",
        title: "해로나 추가 스킬 발동",
        details: [
          { label: "Name", value: "John Doe" },
          { label: "Age", value: "30" },
          { label: "City", value: "New York" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Item 2",
    description: "Main item description",
    ally: "friend", // ✅ 초록색 배경
    subItems: [
      {
        id: "2-1",
        title: "SubItem 1",
        details: [
          { label: "Name", value: "Mike" },
          { label: "Age", value: "32" },
          { label: "City", value: "Seoul" },
        ],
      },
    ],
  },
];

// 오른쪽 데이터 (비교할 대상)
const data2: AccordionItem[] = [
  {
    id: 1,
    title: "Item 1 (Updated)",
    description: "Updated description",
    ally: "enemy", // ✅ 빨간색 배경
    subItems: [
      {
        id: "1-1",
        title: "SubItem 1",
        details: [
          { label: "Name", value: "John Doe" },
          { label: "Age", value: "32" }, // ✅ 변경된 값
          { label: "City", value: "San Francisco" }, // ✅ 변경된 값
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Item 2",
    description: "Main item description",
    ally: "friend", // ✅ 초록색 배경
    subItems: [
      {
        id: "2-1",
        title: "SubItem 1",
        details: [
          { label: "Name", value: "Mike" },
          { label: "Age", value: "32" },
          { label: "City", value: "Seoul" },
        ],
      },
    ],
  },
];

interface AccordionItem {
  id: number | string;
  title: string;
  description: string;
  ally: 'friend' | 'enemy';
  subItems: {
    id: string;
    title: string;
    details: {
      label: string;
      value: string;
    }[];
  }[];
}

export default function AccordionComparison() {
  return (
    <Container size="xl" py="xl">
      <Grid gutter="xl">
        {/* ✅ 왼쪽 - 원본 데이터 */}
        <Grid.Col span={6}>
          <Text fw="bold" size="xl" mb="md">User Record Data</Text>
          <AccordionView data={data1} />
        </Grid.Col>

        {/* ✅ 오른쪽 - 비교 데이터 */}
        <Grid.Col span={6}>
          <Text fw="bold" size="xl" mb="md">Server Verify Data</Text>
          <AccordionView data={data2} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

// ✅ 아코디언 UI (중복 코드 최소화)
function AccordionView({ data }: { data: AccordionItem[] }) {
  return (
    <Accordion>
      {data.map((item) => (
        <Accordion.Item key={item.id} value={`item-${item.id}`}>
          <Accordion.Control>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              styles={{
                root: {
                  backgroundColor: item.ally === "friend" ? "#E6F4EA" : "#FEE2E2",
                  borderColor: item.ally === "friend" ? "#4CAF50" : "#F44336",
                  borderWidth: 2,
                }
              }}
            >
              <Text fw="bold">{item.title}</Text>
              <Text size="sm" color="dimmed">
                {item.description}
              </Text>
            </Card>
          </Accordion.Control>

          <Accordion.Panel>
            <Accordion>
              {item.subItems.map((sub) => (
                <Accordion.Item key={sub.id} value={`sub-${sub.id}`}>
                  <Accordion.Control>
                    <Text fw="bold">{sub.title}</Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Grid>
                      {sub.details.map((detail, index) => (
                        <Grid.Col span={4} key={index}>
                          <Card shadow="xs" padding="sm">
                            <Text fw="bold">{detail.label}</Text>
                            <Text size="sm">{detail.value}</Text>
                          </Card>
                        </Grid.Col>
                      ))}
                    </Grid>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
