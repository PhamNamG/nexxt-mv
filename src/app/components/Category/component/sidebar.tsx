import { fetchProductsCategory } from "@/app/sevices/productsSevices";
import MVImage from "../../MV/IMAGE";
import MVLink from "../../Location/Link";
import Title from "../../MV/Title";

const CategoryProductSidebar = async () => {
  const { data, error } = await fetchProductsCategory();
  if (error) {
    return <div>An error occurred: {error}</div>;
  }
  const colors = [
    "border-red-500",
    "border-blue-500",
    "border-green-500",
    "border-yellow-500",
  ];
  return (
    <>
      <Title>xem nhiều</Title>
      <div className="space-y-4 p-2 bg-[#2a2c31] rounded-lg">
        {data &&
          data.map((item: any, index: number) => (
            <>
              <MVLink
                to={`/q/${item.slug}`}
                key={index}
                className="flex items-start gap-2 rounded-lg hover:bg-gray-700 transition-all duration-300 "
              >
                <div className="w-4/12 h-32">
                  <MVImage
                  width={200}
                  height={200}
                    src={item.linkImg}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-md shadow-md"
                  />
                </div>

                <div
                  className={`w-8/12 border-l-4 pl-4 ${
                    colors[index % colors.length]
                  }`}
                >
                  <h3 className="text-sm font-semibold text-gray-100 mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                </div>
              </MVLink>
              <div className="border-t border-gray-700"></div>
            </>
          ))}
      </div>
    </>
  );
};

export default CategoryProductSidebar;
