import { PayloadAction } from "@reduxjs/toolkit";
import { State, Posts } from "features/user/initialState";
import { functions } from "libs/firebase";
import { httpsCallable, HttpsCallable } from "firebase/functions";
import { Post } from "features/post/postSlice";
import { ExtractPosts, FetchUser } from "features/user/actions";
import { User } from "features/user/userSlice";
import { Matter, Resource, Company, Person } from "types/post";

export const fetchUser = (
  state: State,
  action: PayloadAction<FetchUser["data"]>
): void => {
  if (!action.payload.type) {
    if (action.payload.index === "companys") {
      company(state, action.payload.user as Company);
    }

    if (action.payload.index === "persons") {
      person(state, action.payload.user as Person);
    }
  }

  if (
    action.payload.type === "accounts" &&
    typeof action.payload.i === "number"
  ) {
    if (action.payload.user) {
      state.accounts[action.payload.i] = action.payload.user as Company;
    } else {
      state.accounts[action.payload.i] = { uid: undefined };
    }
  }
};

const company = (state: State, data: Company): void => {
  (state.user as Company).uid = data.uid;
  (state.user as Company).icon = data.icon;
  (state.user as Company).cover = data.cover;
  (state.user as Company).status = data.status;
  (state.user as Company).payment = data.payment;
  (state.user as Company).agree = data.agree;
  (state.user as Company).provider = data.provider;
  (state.user as Company).createAt = data.createAt;
  (state.user as Company).updateAt = data.updateAt;
  (state.user as Company).lastLogin = data.lastLogin;

  (state.user as Company).name = data.name;
  (state.user as Company).person = data.person;
  (state.user as Company).position = data.position;
  (state.user as Company).body = data.body;
  (state.user as Company).more = data.more;
  (state.user as Company).region = data.region;
  (state.user as Company).postal = data.postal;
  (state.user as Company).address = data.address;
  (state.user as Company).tel = data.tel;
  (state.user as Company).email = data.email;
  (state.user as Company).social = data.social;

  (state.user as Company).parent = data.parent;

  (state.user as Company).follows = data.follows;
  (state.user as Company).home = data.home;

  (state.user as Company).posts = {
    matters: data.posts.matters,
    resources: data.posts.resources,
  };

  (state.user as Company).likes = {
    matters: data.likes.matters,
    resources: data.likes.resources,
    persons: data.likes.persons,
  };

  (state.user as Company).outputs = {
    matters: data.outputs.matters,
    resources: data.outputs.resources,
  };

  (state.user as Company).entries = {
    matters: data.entries.matters,
    resources: data.entries.resources,
    persons: data.entries.persons,
  };

  state.posts = {
    children: [],
    follows: [],
    posts: {
      matters: [],
      resources: [],
    },
    likes: {
      matters: [],
      resources: [],
      persons: [],
    },
    outputs: {
      matters: [],
      resources: [],
    },
    entries: {
      matters: [],
      resources: [],
      persons: [],
    },
  } as Posts["company"];
};

const person = (state: State, data: Person): void => {
  (state.user as Person).uid = data.uid;
  (state.user as Person).icon = data.icon;
  (state.user as Person).cover = data.cover;
  (state.user as Person).status = data.status;
  (state.user as Person).agree = data.agree;
  (state.user as Person).resume = data.resume;
  (state.user as Person).provider = data.provider;
  (state.user as Person).createAt = data.createAt;
  (state.user as Person).updateAt = data.updateAt;
  (state.user as Person).lastLogin = data.lastLogin;

  (state.user as Person).state = data.state;
  (state.user as Person).nickName = data.nickName;
  (state.user as Person).name = data.name;
  (state.user as Person).body = data.body;
  (state.user as Person).position = data.position;
  (state.user as Person).age = data.age;
  (state.user as Person).sex = data.sex;
  (state.user as Person).location = data.location;
  (state.user as Person).handles = data.handles;
  (state.user as Person).tools = data.tools;
  (state.user as Person).skills = data.skills;
  (state.user as Person).urls = data.urls;
  (state.user as Person).costs = {
    min: data.costs.min,
    max: data.costs.max,
    display: data.costs.display,
    type: data.costs.type,
  };
  (state.user as Person).working = data.working;
  (state.user as Person).resident = data.resident;
  (state.user as Person).clothes = data.clothes;

  (state.user as Person).follows = data.follows;
  (state.user as Person).home = data.home;
  (state.user as Person).likes = data.likes;
  (state.user as Person).entries = data.entries;
  (state.user as Person).histories = data.histories;

  (state.user as Person).requests = {
    enable: data.requests.enable,
    hold: data.requests.hold,
    disable: data.requests.disable,
  };

  state.posts = {
    follows: [],
    likes: [],
    entries: [],
    histories: [],
    requests: {
      enable: [],
      hold: [],
      disable: [],
    },
  } as Posts["person"];
};

export const editUser = (state: State, action: PayloadAction<User>): void => {
  if (action.payload.index === "companys") {
    (state.user as Company).type = (action.payload.user as Company).type;
    (state.user as Company).icon = (action.payload.user as Company).icon;
    (state.user as Company).cover = (action.payload.user as Company).cover;
    (state.user as Company).status = (action.payload.user as Company).status;
    (state.user as Company).updateAt = (
      action.payload.user as Company
    ).updateAt;
    (state.user as Company).name = (action.payload.user as Company).name;
    (state.user as Company).person = (action.payload.user as Company).person;
    (state.user as Company).body = (action.payload.user as Company).body;
    (state.user as Company).more = (action.payload.user as Company).more;
    (state.user as Company).region = (action.payload.user as Company).region;
    (state.user as Company).postal = (action.payload.user as Company).postal;
    (state.user as Company).address = (action.payload.user as Company).address;
    (state.user as Company).tel = (action.payload.user as Company).tel;
    (state.user as Company).url = (action.payload.user as Company).url;
    (state.user as Company).social = {
      line: (action.payload.user as Company).social.line,
      twitter: (action.payload.user as Company).social.twitter,
      instagram: (action.payload.user as Company).social.instagram,
      linkedIn: (action.payload.user as Company).social.linkedIn,
    };
  }

  if (action.payload.index === "persons") {
    (state.user as Person).icon = (action.payload.user as Person).icon;
    (state.user as Person).cover = (action.payload.user as Person).cover;
    (state.user as Person).status = (action.payload.user as Person).status;
    (state.user as Person).state = (action.payload.user as Person).state;
    (state.user as Person).nickName = (action.payload.user as Person).nickName;
    (state.user as Person).name = (action.payload.user as Person).name;
    (state.user as Person).body = (action.payload.user as Person).body;
    (state.user as Person).age = Number((action.payload.user as Person).age);
    (state.user as Person).sex = (action.payload.user as Person).sex;
    (state.user as Person).position = (action.payload.user as Person).position;
    (state.user as Person).location = (action.payload.user as Person).location;
    (state.user as Person).handles = (action.payload.user as Person).handles;
    (state.user as Person).tools = (action.payload.user as Person).tools;
    (state.user as Person).skills = (action.payload.user as Person).skills;
    (state.user as Person).urls = (action.payload.user as Person).urls;
    (state.user as Person).costs = {
      min: Number((action.payload.user as Person).costs.min),
      max: Number((action.payload.user as Person).costs.max),
      display: (action.payload.user as Person).costs.display,
      type: (action.payload.user as Person).costs.type,
    };
    (state.user as Person).working = Number(
      (action.payload.user as Person).working
    );
    (state.user as Person).resident = (action.payload.user as Person).resident;
    (state.user as Person).clothes = (action.payload.user as Person).clothes;
    (state.user as Person).period = {
      year: Number((action.payload.user as Person).period.year),
      month: Number((action.payload.user as Person).period.month),
    };
    (state.user as Person).updateAt = (action.payload.user as Person).updateAt;
  }

  const editUser: HttpsCallable<
    {
      index: "companys" | "persons";
      user: Company | Person;
    },
    unknown
  > = httpsCallable(functions, "admin-editUser");

  void editUser({
    index: action.payload.index,
    user: action.payload.user,
  });
};

export const selectUser = (
  state: State,
  action: PayloadAction<Company | Person>
): void => {
  state.user = action.payload;
};

export const resetUser = (
  state: State,
  action: PayloadAction<number | undefined | boolean>
): void => {
  if (!action.payload && typeof action.payload !== "number") {
    state.user = {};

    state.posts = {
      follows: [],
      posts: {
        matters: [],
        resources: [],
      },
      likes: {
        matters: [],
        resources: [],
        persons: [],
      },
      outputs: {
        matters: [],
        resources: [],
      },
      entries: {
        matters: [],
        resources: [],
        persons: [],
      },
    } as unknown as Posts["company"];

    state.hit = {
      posts: 0,
      pages: 0,
      currentPage: 0,
    };

    state.accounts = [];
  } else if (typeof action.payload === "number") {
    state.accounts[action.payload] = null;
  }
};

export const uploadResume = (
  state: State,
  action: PayloadAction<string>
): void => {
  (state.user as Person).resume.url = action.payload;
};

export const deleteResume = (
  state: State,
  action: PayloadAction<string>
): void => {
  (state.user as Person).resume.key = null;
  (state.user as Person).resume.url = null;

  const deleteResume: HttpsCallable<string, unknown> = httpsCallable(
    functions,
    "admin-deleteResume"
  );

  void deleteResume(action.payload);
};

export const editPost = (state: State, action: PayloadAction<Post>): void => {
  if ("posts" in state.posts) {
    for (const i in state.posts) {
      const key = i as keyof Posts["company"];

      if (key === "follows" || key === "children") {
        continue;
      }

      if (action.payload.index === "matters") {
        const post = state.posts[key].matters.find(
          (post) => post?.objectID === action.payload.post.objectID
        );

        if (!post) {
          continue;
        }

        post.display = (action.payload.post as Matter).display;
        post.title = (action.payload.post as Matter).title;
        post.position = (action.payload.post as Matter).position;
        post.body = (action.payload.post as Matter).body;
        post.location = (action.payload.post as Matter).location;
        post.period = {
          year: Number((action.payload.post as Matter).period.year),
          month: Number((action.payload.post as Matter).period.month),
        };
        post.costs = {
          min: Number((action.payload.post as Matter).costs.min),
          max: Number((action.payload.post as Matter).costs.max),
          contract: Number((action.payload.post as Matter).costs.contract),
          display: (action.payload.post as Matter).costs.display,
          type: (action.payload.post as Matter).costs.type,
        };
        post.adjustment = (action.payload.post as Matter).adjustment;
        post.times = (action.payload.post as Matter).times;
        post.handles = (action.payload.post as Matter).handles;
        post.tools = (action.payload.post as Matter).tools;
        post.requires = (action.payload.post as Matter).requires;
        post.prefers = (action.payload.post as Matter).prefers;
        post.interviews = (action.payload.post as Matter).interviews;
        post.remote = (action.payload.post as Matter).remote;
        post.distribution = (action.payload.post as Matter).distribution;
        post.span = (action.payload.post as Matter).span;
        post.note = (action.payload.post as Matter).note;
        post.status = (action.payload.post as Matter).status;
        post.memo = (action.payload.post as Matter).memo;
        post.updateAt = (action.payload.post as Matter).updateAt;
      }

      if (action.payload.index === "resources") {
        const post = state.posts[key].resources.find(
          (post) => post?.objectID === action.payload.post.objectID
        );

        if (!post) {
          continue;
        }

        post.display = (action.payload.post as Resource).display;
        post.roman = (action.payload.post as Resource).roman;
        post.position = (action.payload.post as Resource).position;
        post.sex = (action.payload.post as Resource).sex;
        post.age = Number((action.payload.post as Resource).age);
        post.body = (action.payload.post as Resource).body;
        post.belong = (action.payload.post as Resource).belong;
        post.station = (action.payload.post as Resource).station;
        post.period = {
          year: Number((action.payload.post as Resource).period.year),
          month: Number((action.payload.post as Resource).period.month),
        };
        post.costs = {
          min: Number((action.payload.post as Resource).costs.min),
          max: Number((action.payload.post as Resource).costs.max),
          contract: Number((action.payload.post as Resource).costs.contract),
          display: (action.payload.post as Resource).costs.display,
          type: (action.payload.post as Resource).costs.type,
        };
        post.handles = (action.payload.post as Resource).handles;
        post.tools = (action.payload.post as Resource).tools;
        post.skills = (action.payload.post as Resource).skills;
        post.parallel = (action.payload.post as Resource).parallel;
        post.note = (action.payload.post as Resource).note;
        post.status = (action.payload.post as Resource).status;
        post.memo = (action.payload.post as Resource).memo;
        post.updateAt = (action.payload.post as Resource).updateAt;
      }
    }
  }
};

export const deletePost = (state: State, action: PayloadAction<Post>): void => {
  if ("posts" in state.posts) {
    for (const i in state.posts) {
      const key = i as keyof Posts["company"];

      if (key === "follows" || key === "children") {
        continue;
      }

      if (action.payload.index === "matters") {
        state.posts[key].matters = state.posts[key].matters.filter(
          (post) => post?.objectID !== action.payload.post.objectID
        );
      }

      if (action.payload.index === "resources") {
        state.posts[key].resources = state.posts[key].resources.filter(
          (post) => post?.objectID !== action.payload.post.objectID
        );
      }
    }
  }
};

export const extractPosts = (
  state: State,
  action: PayloadAction<ExtractPosts["data"]>
): void => {
  if ("posts" in state.posts) {
    const type = action.payload.type as keyof Posts["company"];

    if (type === "follows" || type === "children") {
      if (
        action.payload.hit.currentPage !== 0 &&
        action.payload.hit.pages > 1
      ) {
        state.posts[type] = [
          ...state.posts[type],
          ...action.payload.posts,
        ] as Company[];
      } else {
        state.posts[type] = action.payload.posts as Company[];
      }
    } else {
      const index = action.payload.index;
      if (index === "matters") {
        if (
          action.payload.hit.currentPage !== 0 &&
          action.payload.hit.pages > 1
        ) {
          state.posts[type].matters = [
            ...state.posts[type].matters,
            ...(action.payload.posts as Matter[]),
          ];
        } else {
          state.posts[type].matters = action.payload.posts as Matter[];
        }
      }

      if (index === "resources") {
        if (
          action.payload.hit.currentPage !== 0 &&
          action.payload.hit.pages > 1
        ) {
          state.posts[type].resources = [
            ...state.posts[type].resources,
            ...(action.payload.posts as Resource[]),
          ];
        } else {
          state.posts[type].resources = action.payload.posts as Resource[];
        }
      }

      if (index === "persons" && (type === "likes" || type === "entries")) {
        if (
          action.payload.hit.currentPage !== 0 &&
          action.payload.hit.pages > 1
        ) {
          state.posts[type].persons = [
            ...state.posts[type].persons,
            ...(action.payload.posts as Person[]),
          ];
        } else {
          state.posts[type].persons = action.payload.posts as Person[];
        }
      }
    }
  }

  if ("requests" in state.posts) {
    const type = action.payload.type as keyof Posts["person"];

    if (type !== "requests") {
      if (type !== "follows") {
        if (
          action.payload.hit.currentPage !== 0 &&
          action.payload.hit.pages > 1
        ) {
          state.posts[type] = [
            ...state.posts[type],
            ...(action.payload.posts as Matter[]),
          ];
        } else {
          state.posts[type] = action.payload.posts as Matter[];
        }
      } else {
        if (
          action.payload.hit.currentPage !== 0 &&
          action.payload.hit.pages > 1
        ) {
          state.posts.follows = [
            ...state.posts.follows,
            ...(action.payload.posts as Company[]),
          ];
        } else {
          state.posts[type] = action.payload.posts as Company[];
        }
      }
    } else {
      const index = action.payload.index;

      if (index === "enable" || index === "hold" || index === "disable") {
        if (
          action.payload.hit.currentPage !== 0 &&
          action.payload.hit.pages > 1
        ) {
          state.posts.requests[index] = [
            ...state.posts.requests[index],
            ...(action.payload.posts as Company[]),
          ];
        } else {
          state.posts.requests[index] = action.payload.posts as Company[];
        }
      }
    }
  }

  state.hit = {
    posts: action.payload.hit.posts,
    pages: action.payload.hit.pages,
    currentPage: action.payload.hit.currentPage,
  };
};
