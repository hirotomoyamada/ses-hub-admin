import { algolia } from "../algolia";
import { db } from "../firebase";

import { matters } from "./posts/matters";
import { resources } from "./posts/resources";
import { companys } from "./users/companys";
import { persons } from "./users/persons";

import * as setting from "./setting";

export const data = {
  index: "companys",
  createAt: setting.timestamp(2021, 10, 1),
  user: 5,
  post: 5,
};

export const create = async () => {
  for (let i = 0; i < data.user; i++) {
    const uid = setting.uid();

    const objectIDs = data.index === "companys" && (await createPost(uid));

    await createUser(uid, objectIDs);
  }
};

const createPost = async (uid) => {
  const objectIDs = { matters: [], resources: [] };

  for await (const post of Object.keys(objectIDs)) {
    const index = algolia.initIndex(post);
    const posts = [];

    for (let i = 0; i < data.post; i++) {
      posts.push(
        post === "matters"
          ? matters(uid)
          : post === "resources" && resources(uid)
      );
    }

    await index
      .saveObjects(posts, { autoGenerateObjectIDIfNotExist: true })
      .then((results) => {
        objectIDs[post] = [...results.objectIDs.reverse()];
      });
  }

  return objectIDs;
};

const createUser = async (uid, objectIDs) => {
  const index = algolia.initIndex(data.index);

  await db
    .collection(data.index)
    .doc(uid)
    .get()
    .then(async (doc) => {
      if (!doc.exists) {
        const user =
          data.index === "companys"
            ? companys({ uid: uid, objectIDs: objectIDs })
            : data.index === "persons" && persons({ uid: uid });

        await doc.ref.set(user, { merge: true });

        await index.partialUpdateObject(
          data.index === "companys"
            ? companys({ uid: uid, user: user })
            : data.index === "persons" && persons({ uid: uid, user: user }),
          {
            createIfNotExists: true,
          }
        );
      }
    });
};
