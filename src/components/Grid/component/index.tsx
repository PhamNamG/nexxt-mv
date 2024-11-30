import React, { memo } from "react";
import MVRow from "../../MV/Grid";
import MVCol from "../../MV/Grid/Col";
import { NotUpdate } from "../../Message/Notification";
import CategoryContents from "../../Category/content";
const MVGridCategory = memo(({ type, gutter, child, ...rest }: any) => {
  return (
    <MVRow gutter={gutter}>
      {type === "category" ? (
        child &&
        child.length &&
        child.map((item, index) => (
          <MVCol key={item._id} xs={12} sm={10} md={8} lg={6} xl={4}>
            <CategoryContents
              title={item.name}
              link={item.image ? "/d/" + item.slug : "/q/" + item.slug}
              image={item.linkImg || item.image}
              time={item.time}
              year={item.year}
              sumSeri={item.sumSeri}
              products={item.products}
            />
          </MVCol>
        ))
      ) : child && child.length ? (
        child.map((item, index) => (
          <MVCol key={item._id} xs={12} sm={10} md={8} lg={6} xl={4}>
            <CategoryContents
              title={item.name}
              link={item.image ? "/d/" + item.slug : "/q/" + item._id}
              image={item.linkImg || item.image}
              time={item.time}
              sumSeri={item.sumSeri}
            />
          </MVCol>
        ))
      ) : (
        <NotUpdate />
      )}
    </MVRow>
  );
});

export default MVGridCategory;
