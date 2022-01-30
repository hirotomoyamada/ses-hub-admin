import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../firebase";

export const updateNotice = createAsyncThunk("root/updateNotice", async () => {
  const data = {
    seshub: {
      application: true,
      hold: true,
    },
    freelanceDirect: {
      hold: true,
    },
  };

  for await (const index of Object.keys(data)) {
    for await (const key of Object.keys(data[index])) {
      if (key === "application" || key === "hold") {
        const collection = await db
          .collection(index === "seshub" ? "companys" : "persons")
          .where(
            key === "application" ? key : "status",
            "==",
            key === "application" ? true : key
          )
          .orderBy("lastLogin", "desc")
          .get();

        if (!collection?.docs?.length) {
          data[index][key] = false;
        }
      }
    }
  }

  return data;
});
