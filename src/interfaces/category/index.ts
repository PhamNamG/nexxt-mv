import { ObjectId } from "bson";
import { IProduct } from "../product";

export interface Icategory {
  time: string;
  _id?: ObjectId;
  name: string;
  linkImg?: string;
  des: string;
  sumSeri: string | number;
  products: IProduct[];
  type: string;
}

export interface isCategorysSlice {
  category: {
    data: Icategory[];
    totalCount: number;
    totalPages: number;
  };
  isError: boolean;
  isLoading: boolean;
  categoryNotReqId: string[];
  details: {};
  releases?:[]
}
