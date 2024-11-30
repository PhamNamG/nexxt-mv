import {
  AreaChartOutlined,
  AuditOutlined,
  BarChartOutlined,
  BlockOutlined,
  FundOutlined,
  HomeOutlined,
  LeftOutlined,
  RiseOutlined,
  WeiboSquareOutlined,
} from "@ant-design/icons";
import React from "react";

const backgrounds = [
  {
    background: "#101010",
  },
  {
    background: "#dbc100",
  },
  {
    background: "#3040b3",
  },
  {
    background: "#1dc3ed",
  },
  {
    background: "#101010",
  },
  {
    background: "#368c27",
  },
  {
    background: "#d11b1b",
  },
  {
    background: "#101010",
  },
  {
    background: "#101010",
  },
];

const Icons = [
  <HomeOutlined />,
  <BlockOutlined />,
  <AreaChartOutlined />,
  <RiseOutlined />,
  <BarChartOutlined />,
  <FundOutlined />,
  <WeiboSquareOutlined />,
  <LeftOutlined />,
  <AuditOutlined />,
];

const columsCart = [
  {
    title: "Stt",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "ProductName",
    dataIndex: "ProductName",
    key: "ProductName",
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
  },
  // {
  //   title: "Image",
  //   dataIndex: "image",
  //   key: "Image",
  // },
  {
    title: "Permission",
    dataIndex: "permission",
    key: "permission",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

const columnsBackground = [
  {
    title: "Url",
    dataIndex: "url",
    key: "url",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

const columnsType = [
  {
    title: "Stt",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Path",
    dataIndex: "path",
    key: "path",
  },
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Categorymain",
    dataIndex: "categorymain",
    key: "categorymain",
  },
  {
    title: "CreatedAt",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
  {
    title: "Checked",
    dataIndex: "checked",
    key: "checked",
  },
];

const columnsCategory = [
  {
    title: "Stt",
    dataIndex: "stt",
    key: "stt",
    width: 100,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 100,
  },
  {
    title: "Slug",
    dataIndex: "slug",
    key: "slug",
    width: 120,
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "Image",
    width: 150,
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration",
    width: 50,
  },
  {
    title: "isActive",
    dataIndex: "isActive",
    key: "isActive",
    width: 50,
  },
  {
    title: "Year",
    dataIndex: "year",
    key: "year",
    width: 50,
  },
  {
    title: "Set",
    dataIndex: "set",
    key: "set",
    width: 50,
  },
  {
    title: "Week",
    dataIndex: "week",
    key: "week",
    width: 50,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    width: 100,
  },
];

const columnsComment = [
  {
    title: "Stt",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "Image",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Permission",
    dataIndex: "permission",
    key: "permission",
  },
  {
    title: "Day",
    dataIndex: "day",
    key: "day",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

const columnsTrailer = [
  {
    title: "Id",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "Url",
    dataIndex: "url",
    key: "url",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

const columnsCatemainProduct = [
  {
    title: "Stt",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "CreatedAt",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

const columnsGetAdmin = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
  },
];

const columnsUser = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: any) => <p>{text}</p>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    with: 150,
  },
];

const columnsWeeks = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];
export const settingsSlider = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  pauseOnHover: true,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
export const settingsSliderLatest = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

export {
  backgrounds,
  Icons,
  columsCart,
  columnsBackground,
  columnsType,
  columnsComment,
  columnsCategory,
  columnsTrailer,
  columnsCatemainProduct,
  columnsGetAdmin,
  columnsUser,
  columnsWeeks,
};
