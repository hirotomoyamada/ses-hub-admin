import { PayloadAction } from "@reduxjs/toolkit";
import { initialState, State } from "features/post/initialState";
import { functions } from "libs/firebase";
import { httpsCallable, HttpsCallable } from "firebase/functions";
import { Matter, Resource, Company, Person } from "types/posts";
import { FetchPosts } from "./actions";
import { Post } from "features/post/postSlice";
import { User } from "features/user/userSlice";
import { UpdateAccount } from "features/root/actions";

export const fetchPosts = (
  state: State,
  action: PayloadAction<FetchPosts["data"]>
): void => {
  if (action.payload.hit?.currentPage !== 0 && action.payload.hit?.pages > 1) {
    state.posts = Object.assign(state.posts, {
      [action.payload.index]: [
        ...state.posts[action.payload.index],
        ...action.payload.posts,
      ],
    });
  } else {
    state.posts = Object.assign(state.posts, {
      [action.payload.index]: action.payload.posts,
    });
  }

  state.hit = {
    posts: action.payload.hit?.posts,
    pages: action.payload.hit?.pages,
    currentPage: action.payload.hit?.currentPage,
  };
};

export const selectPost = (
  state: State,
  action: PayloadAction<Post["post"]>
): void => {
  state.post = action.payload;
};

export const resetPost = (): State => {
  return initialState;
};

export const editPost = (state: State, action: PayloadAction<Post>): void => {
  if (action.payload.index === "matters") {
    const post = state.posts.matters.find(
      (post) => post?.objectID === action.payload.post.objectID
    );

    if (!post) {
      return;
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
    post.approval = (action.payload.post as Matter).approval;
    post.note = (action.payload.post as Matter).note;
    post.status = (action.payload.post as Matter).status;
    post.memo = (action.payload.post as Matter).memo;
    post.updateAt = (action.payload.post as Matter).updateAt;
  }

  if (action.payload.index === "resources") {
    const post = state.posts.resources.find(
      (post) => post?.objectID === action.payload.post.objectID
    );

    if (!post) {
      return;
    }

    post.display = (action.payload.post as Resource).display;
    post.roman = (action.payload.post as Resource).roman;
    post.position = (action.payload.post as Resource).position;
    post.sex = (action.payload.post as Resource).sex;
    post.age = (action.payload.post as Resource).age;
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

  const editPost: HttpsCallable<
    {
      index: "matters" | "resources";
      post: Matter | Resource;
    },
    unknown
  > = httpsCallable(functions, "admin-editPost");

  void editPost({
    index: action.payload.index,
    post: action.payload.post,
  });
};

export const deletePost = (state: State, action: PayloadAction<Post>): void => {
  if (action.payload.index === "matters") {
    state.posts.matters = state.posts[action.payload.index].filter(
      (post) => post?.objectID !== action.payload.post.objectID
    );
  }

  if (action.payload.index === "resources") {
    state.posts.resources = state.posts[action.payload.index].filter(
      (post) => post?.objectID !== action.payload.post.objectID
    );
  }

  const deletePost: HttpsCallable<
    {
      index: "matters" | "resources";
      post: Matter | Resource;
    },
    unknown
  > = httpsCallable(functions, "admin-deletePost");

  void deletePost({
    index: action.payload.index,
    post: action.payload.post,
  });
};

export const editUser = (state: State, action: PayloadAction<User>): void => {
  if (action.payload.index === "companys") {
    const user = state.posts.companys.find(
      (post) => post?.uid === action.payload.user.uid
    );

    if (!user) {
      return;
    }

    if (
      action.payload.filter === "status:hold" &&
      user.status === "hold" &&
      action.payload.user.status !== "hold"
    ) {
      state.posts.companys = state.posts.companys.filter(
        (post) => post.uid !== action.payload.user.uid
      );

      return;
    }

    if (
      action.payload.filter === "status:disable" &&
      user.status === "disable" &&
      action.payload.user.status !== "disable"
    ) {
      state.posts.companys = state.posts.companys.filter(
        (post) => post.uid !== action.payload.user.uid
      );

      return;
    }

    if (
      action.payload.filter === "application" &&
      user.type === "individual" &&
      (action.payload.user as Company).type !== "individual"
    ) {
      state.posts.companys = state.posts.companys.filter(
        (post) => post.uid !== action.payload.user.uid
      );

      return;
    }

    user.type = (action.payload.user as Company).type;
    user.icon = (action.payload.user as Company).icon;
    user.cover = (action.payload.user as Company).cover;
    user.status = (action.payload.user as Company).status;
    user.updateAt = (action.payload.user as Company).updateAt;
    user.name = (action.payload.user as Company).name;
    user.person = (action.payload.user as Company).person;
    user.body = (action.payload.user as Company).body;
    user.more = (action.payload.user as Company).more;
    user.region = (action.payload.user as Company).region;
    user.postal = (action.payload.user as Company).postal;
    user.address = (action.payload.user as Company).address;
    user.tel = (action.payload.user as Company).tel;
    user.url = (action.payload.user as Company).url;
    user.social = {
      line: (action.payload.user as Company).social.line,
      twitter: (action.payload.user as Company).social.twitter,
      instagram: (action.payload.user as Company).social.instagram,
      linkedIn: (action.payload.user as Company).social.linkedIn,
    };
  }

  if (action.payload.index === "persons") {
    const user = state.posts.persons.find(
      (post) => post?.uid === action.payload.user.uid
    );

    if (!user) {
      return;
    }

    if (
      action.payload.filter === "status:hold" &&
      user.status === "hold" &&
      action.payload.user.status !== "hold"
    ) {
      state.posts.persons = state.posts.persons.filter(
        (post) => post.uid !== action.payload.user.uid
      );

      return;
    }

    if (
      action.payload.filter === "status:disable" &&
      user.status === "disable" &&
      action.payload.user.status !== "disable"
    ) {
      state.posts.persons = state.posts.persons.filter(
        (post) => post.uid !== action.payload.user.uid
      );

      return;
    }

    user.icon = (action.payload.user as Person).icon;
    user.cover = (action.payload.user as Person).cover;
    user.status = (action.payload.user as Person).status;
    user.updateAt = (action.payload.user as Person).updateAt;
    user.state = (action.payload.user as Person).state;
    user.nickName = (action.payload.user as Person).nickName;
    user.name = (action.payload.user as Person).name;
    user.body = (action.payload.user as Person).body;
    user.age = Number((action.payload.user as Person).age);
    user.sex = (action.payload.user as Person).sex;
    user.position = (action.payload.user as Person).position;
    user.location = (action.payload.user as Person).location;
    user.handles = (action.payload.user as Person).handles;
    user.tools = (action.payload.user as Person).tools;
    user.skills = (action.payload.user as Person).skills;
    user.urls = (action.payload.user as Person).urls;
    user.period = {
      year: Number((action.payload.user as Person).period.year),
      month: Number((action.payload.user as Person).period.month),
    };
    user.costs = {
      min: Number((action.payload.user as Person).costs.min),
      max: Number((action.payload.user as Person).costs.max),
      display: (action.payload.user as Person).costs.display,
      type: (action.payload.user as Person).costs.type,
    };
    user.working = Number((action.payload.user as Person).working);
    user.resident = (action.payload.user as Person).resident;
    user.clothes = (action.payload.user as Person).clothes;
  }
};

export const updateAccount = (
  state: State,
  action: PayloadAction<UpdateAccount>
): void => {
  for (const user of action.payload) {
    const target = state.posts.companys.find((post) => post?.uid === user.uid);

    if (target) {
      target.payment.status = user.status;

      if (user.option) {
        target.payment.option = {
          freelanceDirect: user.option === "enable" ? true : false,
        };
      }

      target.payment?.children &&
        updateChildren({
          state: state,
          user: user,
          children: target.payment?.children,
        });
    }
  }
};

const updateChildren = ({
  state,
  user,
  children,
}: {
  state: State;
  user: UpdateAccount[number];
  children: string[];
}): void => {
  for (const child of children) {
    const target = state.posts.companys.find((post) => post?.uid === child);

    if (target) {
      target.payment.status = user.status;

      if (user.option) {
        target.payment.option = {
          freelanceDirect: user.option === "enable" ? true : false,
        };
      }
    }
  }
};
