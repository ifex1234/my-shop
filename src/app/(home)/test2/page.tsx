import Categories from "@/components/core/Categories";
import React from "react";
import { Groceries } from "@/lib/assets/categories/supermaket";

export default function Page() {
  return (
    <div>
      <Categories arrayItem={Groceries} />
    </div>
  );
}
