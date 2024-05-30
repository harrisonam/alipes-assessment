"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Product from "./components/Product/Product";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

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
