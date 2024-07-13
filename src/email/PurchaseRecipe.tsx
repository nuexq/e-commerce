import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
} from "@react-email/components";
import { OrderInformation } from "./components/OrderInformation";

type PurchaseReceipEmailProps = {
  product: {
    name: string;
  };
};

PurchaseReceiptEmail.PreviewProps = {
  product: { name: "Product name" },
} satisfies PurchaseReceipEmailProps;

export default function PurchaseReceiptEmail({
  product,
}: PurchaseReceipEmailProps) {
  return (
    <Html>
      <Preview>Download {product.name} and view receipt</Preview>
      <Tailwind>
        <Head />
        <Body className="font-sans bg-white">
          <Container className="max-w-xl">
            <Heading>Purchase Receipt</Heading>
            <OrderInformation />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
