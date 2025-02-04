export interface ProductType{
    _id:number;
    title: string;
    description: string;
    image: string;
    price:number;
    previousePrice: number;
    isNew: boolean;
    brand: string;
    category: string;
    quantity: number
}

export interface ItemProps {
    item: ProductType;
}
export interface ProductSliderProps {
    products: ProductType[];
  }
  

export interface StateProps {
    pro: {
        productData: ProductType[];
        userInfo: object;
        orderData:{
            order: ProductType[];
        };
        favoriteData: ProductType[];
    }
}