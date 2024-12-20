export const getProducts = async () => {
    const res = await fetch("https://jsonserver.reactbd.com/amazonpro", {
      cache: 'no-cache',
    });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
  
    return res.json();
  };
  
  export const getPhones = async () => {
    const res = await fetch("https://jsonserver.reactbd.com/amazonpro/category/phone", {
      cache: 'no-cache',
    });
    if (!res.ok) {
      throw new Error("Failed to fetch phone");
    }
  
    return res.json();
  };
  
  export const getPhoneCase = async () => {
    const res = await fetch("https://jsonserver.reactbd.com/amazonpro/category/phone case", {
      cache: 'no-cache',
    });
    if (!res.ok) {
      throw new Error("Failed to fetch phone case");
    }
  
    return res.json();
  };
  
  export const getwatch = async () => {
    const res = await fetch("https://jsonserver.reactbd.com/amazonpro/category/watch", {
      cache: 'no-cache',
    });
    if (!res.ok) {
      throw new Error("Failed to fetch watch");
    }
  
    return res.json();
  };
  
  export const getaccessories = async () => {
    const res = await fetch("https://jsonserver.reactbd.com/amazonpro/category/accessories", {
      cache: 'no-cache',
    });
    if (!res.ok) {
      throw new Error("Failed to fetch accessories");
    }
  
    return res.json();
  };
  
  
  export const calculatePercentage = (previousePrice: number, price: number): string => {
    return price && previousePrice
      ? (100 - (previousePrice / price) * 100).toFixed(0)
      : '0'; 
  };
  