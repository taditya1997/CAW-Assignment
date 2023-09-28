function StatusCapsule({ variant }) {
  const status = variant.toLowerCase().split(" ").join("-");

  let colorClass = "";
  switch (status) {
    case "missing-urgent":
      colorClass = "bg-red-500 text-white";
      break;
    case "missing":
      colorClass = "bg-orange-500 text-white";
      break;
    case "approved":
      colorClass = "bg-green-500 text-white";
      break;
    default:
      colorClass = "bg-gray-500 text-white";
  }

  return (
    <div className={`px-2 py-1 rounded-full ${colorClass} text-center`}>
      {variant}
    </div>
  );
}

export default StatusCapsule;
