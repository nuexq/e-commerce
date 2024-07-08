import db from "@/db/db";

function getMostPopularProducts() {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { orders: { _count: "desc" } },
    take: 6
  });
}

export default function HomePage() {
  return <h1>hi</h1>;
}
