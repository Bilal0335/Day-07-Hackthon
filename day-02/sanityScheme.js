
export default {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
      {
        name: "name",
        type: "string",
        title: "Product Name",
        description: "Name of the product",
      },
      {
        name: "price",
        type: "number",
        title: "Price",
        description: "Price of the product in USD",
      },
      {
        name: "stock",
        type: "number",
        title: "Stock",
        description: "Available stock for the product",
      },
      {
        name: "description",
        type: "text",
        title: "Description",
        description: "Detailed description of the product",
      },
      {
        name: "category",
        type: "string",
        title: "Category",
        description: "Category of the product (e.g., Wooden, Iron)",
      },
      {
        name: "image",
        type: "image",
        title: "Product Image",
        description: "Upload an image of the product",
        options: {
          hotspot: true,
        },
      },
    ],
  };
  