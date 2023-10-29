import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import { useNavigate } from "react-router-dom";
import { paginationItems } from "../../constants/index";
import { Typography } from "@mui/material";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const navigate = useNavigate();
  const [descuento, setDescuento] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  useEffect(() => {
    const newItem = paginationItems.map((item) => {
      if (item.descuento > 0) {
        return item;
      }
    });
    setDescuento(newItem);
    const top = paginationItems.find((item) => item.descuento > 0);
    setTopProduct([top]);
    localStorage.setItem('topProduct', JSON.stringify([top]));
  }, []);

  const handleClick = (e, id) => {
    const _id = e;
    const idString = (_id) => {
      return String(_id).toLowerCase().split(" ").join("");
    };
    const rootId = idString(_id);

    const getItem = paginationItems.find((item) => item._id === id);

    const productItem = getItem;
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };

  const StoryCard = ({ _id, img, productName }) => (
    <div className="flex flex items-center mx-2">
      <div className="w-32 h-32 border-4 border-orange-500 rounded-full overflow-hidden">
        <img
          src={img}
          alt={productName}
          className="w-full h-full object-cover"
          onClick={() => handleClick(productName, _id)}
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>

        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <div className="w-full flex">
            <Typography fontSize={25} fontWeight={"bold"} color={"#f44336"}>
              Te presentamos los productos con mayores descuentos
            </Typography>
          </div>

          <div className="w-full flex">
            {descuento.map((story, index) => {
              if (index < 7) {
                return <StoryCard key={index} {...story} />;
              }
            })}
          </div>

          <div className="w-full flex">
            <Typography fontSize={25} fontWeight={"bold"} color={"#f44336"}>
              Te presentamos los productos mas vendidos
            </Typography>
          </div>

          <div className="w-full flex">
            {topProduct.map((story, index) => {
              return <StoryCard key={index} {...story} />;
            })}
          </div>

          <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default Shop;
