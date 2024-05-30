"use client";
import { builder, Builder } from "@builder.io/react";
import Product from "./components/Product/Product";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


Builder.registerComponent(Product, {
  name: "Product",
  inputs: [
    {
      name: "description",
      type: "string",
      required: true,
    },
    {
      name: "imageUrl",
      type: "string",
      required: true,
    },
    {
      name: "name",
      type: "string",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
  ],
});
