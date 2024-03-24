import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Section,
  Tailwind,
  Text,
  Img,
  Preview,
} from "@react-email/components";
import * as React from "react";

interface ResetPasswordEmailProps {
  resetPasswordLink: string;
}
const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";
export const resetPasswordEmail = ({
  resetPasswordLink,
}: ResetPasswordEmailProps) => (
  <Html>
    <Head>
      <Preview>You have requested to reset your password for Kalex.</Preview>
      <title>Reset Password | Kalex</title>
      <Font
        fontFamily="Roboto"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Body>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#007291",
              },
            },
          },
        }}
      >
        <Container>
          <Section>
            <Container>
              <Img src={`${baseUrl}/static/plaid-logo.png`} width={320} />
            </Container>
            <Heading>Reset Password</Heading>
            <Text>
              You're receiving this email because you requested a password reset
              for your user account at Kalex.
            </Text>
            <Text>Please click the button below to reset your password.</Text>

            <Button
              className="bg-orange-300 px-6 py-3 rounded-md text-black mx-auto"
              href={resetPasswordLink}
            >
              Reset Password
            </Button>
            <Text>
              If you did not request a password reset, no further action is
              required.
            </Text>
          </Section>
        </Container>
      </Tailwind>
    </Body>
  </Html>
);

resetPasswordEmail.PreviewProps = {
  resetPasswordLink: "string",
};

export default resetPasswordEmail;
