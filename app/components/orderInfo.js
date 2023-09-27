export default function OrderInfo() {
  return (
    <div className="mt-10 container shadow-sm px-4 py-4 border border-gray-200 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 justify-between divide-x">
      {orderItems.map((item) => (
        <InfoItem key={item.title} title={item.title} value={item.value} />
      ))}
    </div>
  );
}

function InfoItem({ title, value }) {
  return (
    <div className="flex flex-col mt-2  items-start px-4">
      <h3 className="text-sm font-bold text-black/60">{title}</h3>
      <h2 className="text-lg font-bold">{value}</h2>
    </div>
  );
}

const orderItems = [
    {
        title: "Supplier",
        value: "East coast fruits and vegetables"
    },
    {
        title: "Shipping Date",
        value: "Thu, Feb 10"
    },
    {
        title: "Total",
        value: "$15,028.3"
    },
    {
        title: "Category",
        value: "Icons"
    },
    {
        title: "Department",
        value: "300-444-678"
    },
    {
        title: "Status",
        value: "Awaiting your approval"
    }
]
