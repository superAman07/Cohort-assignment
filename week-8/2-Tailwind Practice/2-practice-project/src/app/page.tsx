import { RevenueCard } from "@/components/RevenueCard"; 

export default function Home() {
  return (
    <div className="grid grid-cols-4">
      <RevenueCard title={"Amount pending"} orderCount={13} amount={"99,173.47"}/>
    </div> 
  );
}
