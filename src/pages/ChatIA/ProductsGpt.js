import { Breadcrumbs } from "@mui/material";
import { paginationItems } from "../../constants";
import Product from "../../components/home/Products/Product";
import { useEffect, useState } from "react";

const items = paginationItems;
const ProductsGpt = ({ arrayPrompt = [] }) => {
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    setCurrentItems(items?.filter((item) => arrayPrompt.includes(item.productName)))
  }, [arrayPrompt])
  

  console.log('arrrr', arrayPrompt)
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        {/* <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
            <ShopSideNav />
          </div> */}
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          {/* <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} /> */}
          {/* <Pagination itemsPerPage={itemsPerPage} /> */}
          {currentItems &&
            currentItems.map((item) => (
              <div key={item._id} className="w-full">
                <Product
                  _id={item._id}
                  img={item.img}
                  productName={item.productName}
                  price={item.price}
                  color={item.color}
                  badge={item.badge}
                  des={item.des}
                />
              </div>
            ))}
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default ProductsGpt;
