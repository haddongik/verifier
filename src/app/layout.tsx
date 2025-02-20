import "@mantine/core/styles.css"; // ✅ Mantine 글로벌 스타일
import { MantineProvider, createTheme } from "@mantine/core";
import ClientLayout from "@/components/ClientLayout"; // ✅ 클라이언트에서 실행

const theme = createTheme({
  primaryColor: "blue",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme}>
          <ClientLayout>{children}</ClientLayout> {/* ✅ 클라이언트 레이아웃 감싸기 */}
        </MantineProvider>
      </body>
    </html>
  );
}
