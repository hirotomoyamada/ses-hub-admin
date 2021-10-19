import { data } from "../create";
import * as value from "./value";

export const persons = ({ uid, user }) => {
  if (!user) {
    return {
      icon: `icon${Math.floor(Math.random() * (36 - 18) + 18)}`,
      cover: `cover${Math.floor(Math.random() * 19)}`,
      provider: [["password"], ["google.com"], ["twitter.com"], ["github.com"]][
        Math.floor(Math.random() * 4)
      ],
      profile: {
        nickName: `${
          value.lastNickName[
            Math.floor(Math.random() * value.lastNickName.length)
          ]
        }${
          value.firstNickName[
            Math.floor(Math.random() * value.firstNickName.length)
          ]
        }`,
        name: `${
          value.lastName[Math.floor(Math.random() * value.lastName.length)]
        }${
          value.firstName[Math.floor(Math.random() * value.firstName.length)]
        }`,
        email: `${uid}@gmail.com`,
        age: Math.floor(Math.random() * (48 - 18) + 18),
        sex: ["男性", "女性"][Math.floor(Math.random() * 2)],
        position:
          value.position[Math.floor(Math.random() * value.position.length)],
        location:
          value.location[Math.floor(Math.random() * value.location.length)],
        handles: [...Array(Math.floor(Math.random() * 8 + 1))].map(
          () =>
            [...value.handles].splice(
              Math.floor(Math.random() * [...value.handles].length),
              1
            )[0]
        ),

        body: "これはデモの概要です。これはデモの概要です。これはデモの概要です。これはデモの概要です。これはデモの概要です。これはデモの概要です。これはデモの概要です。これはデモの概要です。これはデモの概要です。これはデモの概要です。これはデモの概要です。これはデモの概要です。これはデモの概要です。",
        tools: [...Array(Math.floor(Math.random() * 8 + 1))].map(
          () =>
            [...value.tools].splice(
              Math.floor(Math.random() * [...value.tools].length),
              1
            )[0]
        ),
        skills: [...Array(Math.floor(Math.random() * 5 + 1))].map(
          () =>
            [...value.skills].splice(
              Math.floor(Math.random() * [...value.skills].length),
              1
            )[0]
        ),
        urls: [
          [],
          [`https://${uid}.github.io/portfolio`],
          [`https://${uid}.com`, `https://${uid}.github.io/portfolio`],
          [
            `https://${uid}.com`,
            `https://${uid}.github.io/portfolio`,
            `https://${uid}.co.jp`,
          ],
        ][Math.floor(Math.random() * 4)],
        costs: {
          min: Math.floor(Math.random() * 100 + 1),
          max: Math.floor(Math.random() * (200 - 101) + 101),
          display: ["public", "private"][Math.floor(Math.random() * 2)],
          type: ["内容次第", "応談"][Math.floor(Math.random() * 2)],
        },
        working: ["常駐可", "リモート希望", "どちらでも", ""][
          Math.floor(Math.random() * 4)
        ],
        resident: Math.floor(Math.random() * 5 * 1),
        clothes: ["カジュアル", "スーツ可", "スーツNG", ""][
          Math.floor(Math.random() * 4)
        ],
        period: [
          {
            year: "",
            month: "",
          },
          {
            year: "2021",
            month: Math.floor(Math.random() * 12 + 1),
          },
        ][Math.floor(Math.random() * 2)],
      },
      entries: [],
      likes: [],
      requests: {
        enable: [],
        hold: [],
        disable: [],
      },
      follows: [],
      home: [],
      history: [],
      resume: {
        key: `${uid}-${Math.random().toString(32).substring(2)}`,
        url: "https://storage.googleapis.com/ses-hub-resume-i1iqe/1Oup3RKN57cxU3IjlvqlRAJlcR33-r3jd6umvlh.pdf",
      },
      agree: "enable",
      status: ["enable", "hold", "disable"][Math.floor(Math.random() * 3)],
      createAt:
        data.createAt + 60 * 60 * 1000 * Math.floor(Math.random() * 720 + 1),
    };
  } else {
    return {
      objectID: uid,
      uid: uid,
      status: user.status,
      nickName: user.profile.nickName,
      email: user.profile.email,

      age: user.profile.age,
      sex: user.profile.sex,
      position: user.profile.position,
      location: user.profile.location,
      handles: user.profile.handles,

      body: user.profile.body,
      tools: user.profile.tools,
      skills: user.profile.skills,
      urls: user.profile.urls,
      costs: user.profile.costs,
      working: user.profile.working,
      clothes: user.profile.clothes,
      resident: user.profile.resident,
      period: user.profile.period,

      createAt: user.createAt,
      lastLogin: user.createAt,
    };
  }
};
