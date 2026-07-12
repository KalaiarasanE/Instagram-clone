const img = (id, w = 800, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const currentUser = {
  id: "me",
  username: "you.designer",
  name: "Alex Rivera",
  avatar: img("1633332755192-727a05c4013d", 200, 200),
  verified: true,
  bio: "Designer / coffee first\nBuilding beautiful things\nSan Francisco, CA",
  website: "alexrivera.design",
  followers: 12480,
  following: 342,
  posts: 87,
};

export const users = [
  currentUser,
  {
    id: "u1",
    username: "maya.codes",
    name: "Maya Chen",
    avatar: img("1494790108377-be9c29b29330", 200, 200),
    verified: true,
  },
  {
    id: "u2",
    username: "noah.travels",
    name: "Noah Park",
    avatar: img("1500648767791-00dcc994a43e", 200, 200),
  },
  {
    id: "u3",
    username: "sofia.art",
    name: "Sofia Ruiz",
    avatar: img("1438761681033-6461ffad8d80", 200, 200),
    verified: true,
  },
  {
    id: "u4",
    username: "leo.snaps",
    name: "Leo Wright",
    avatar: img("1507003211169-0a1dd7228f2d", 200, 200),
  },
  {
    id: "u5",
    username: "ava.eats",
    name: "Ava Patel",
    avatar: img("1544005313-94ddf0286df2", 200, 200),
  },
  {
    id: "u6",
    username: "kai.surf",
    name: "Kai Tanaka",
    avatar: img("1506794778202-cad84cf45f1d", 200, 200),
  },
  {
    id: "u7",
    username: "ivy.grows",
    name: "Ivy Bloom",
    avatar: img("1554151228-14d9def656e4", 200, 200),
  },
  {
    id: "u8",
    username: "milo.gym",
    name: "Milo Reyes",
    avatar: img("1492562080023-ab3db95bfbce", 200, 200),
  },
  {
    id: "u9",
    username: "zara.moves",
    name: "Zara Ali",
    avatar: img("1531123897727-8f129e1688ce", 200, 200),
    verified: true,
  },
];

export const stories = users.slice(1).map((user, index) => ({
  id: "s" + index,
  user,
  time: `${index + 1}h`,
  viewed: index > 5,
  images: [
    img("1519681393784-d120267933ba", 720, 1280),
    img("1470071459604-3b5ec3a7fe05", 720, 1280),
    img("1500534314209-a25ddb2bd429", 720, 1280),
  ],
}));

export const posts = [
  {
    id: "p1",
    user: users[1],
    images: [
      img("1682687220742-aba13b6e50ba", 900, 900),
      img("1682687221038-404670f01d05", 900, 900),
    ],
    caption: "Golden hour hits different in Lisbon",
    hashtags: ["#travel", "#lisbon", "#goldenhour"],
    location: "Lisbon, Portugal",
    likes: 12482,
    comments: 234,
    time: "2 hours ago",
  },
  {
    id: "p2",
    user: users[3],
    images: [img("1682687220198-88e9bdea9931", 900, 900)],
    caption: "Studio day, new series coming soon",
    hashtags: ["#art", "#studio", "#painting"],
    location: "Brooklyn, NY",
    likes: 5620,
    comments: 89,
    time: "5 hours ago",
    liked: true,
  },
  {
    id: "p3",
    user: {
      id: "brand",
      username: "kindcoffee.co",
      name: "Kind Coffee",
      avatar: img("1509042239860-f550ce710b93", 200, 200),
    },
    images: [img("1509042239860-f550ce710b93", 900, 900)],
    caption: "Small batch, big flavor. Free shipping this weekend",
    hashtags: ["#coffee", "#specialty"],
    likes: 894,
    comments: 42,
    time: "6 hours ago",
    sponsored: true,
  },
  {
    id: "p4",
    user: users[5],
    images: [
      img("1502680390469-be75c86b636f", 900, 900),
      img("1502680390469-be75c86b636f", 900, 900),
      img("1502680390469-be75c86b636f", 900, 900),
    ],
    caption: "Morning sets. Nothing beats the first wave.",
    hashtags: ["#surf", "#ocean", "#sunrise"],
    location: "Malibu, CA",
    likes: 8320,
    comments: 156,
    time: "8 hours ago",
  },
  {
    id: "p5",
    user: users[7],
    images: [img("1416879595882-3373a0480b5b", 900, 900)],
    caption: "New plants, new energy",
    hashtags: ["#plants", "#urbanjungle"],
    likes: 2140,
    comments: 61,
    time: "1 day ago",
  },
];

export const explorePhotos = [
  "1682687220742-aba13b6e50ba",
  "1502680390469-be75c86b636f",
  "1416879595882-3373a0480b5b",
  "1470071459604-3b5ec3a7fe05",
  "1500534314209-a25ddb2bd429",
  "1519681393784-d120267933ba",
  "1682687220198-88e9bdea9931",
  "1509042239860-f550ce710b93",
  "1494790108377-be9c29b29330",
  "1438761681033-6461ffad8d80",
  "1500648767791-00dcc994a43e",
  "1554151228-14d9def656e4",
  "1531123897727-8f129e1688ce",
  "1544005313-94ddf0286df2",
  "1506794778202-cad84cf45f1d",
  "1507003211169-0a1dd7228f2d",
  "1492562080023-ab3db95bfbce",
  "1633332755192-727a05c4013d",
].map((id) => img(id, 600, 600));

export const reels = [
  {
    id: "r1",
    user: users[9],
    video: img("1518604666860-9ed391f76460", 720, 1280),
    caption: "New choreo drop #dance",
    music: "Original Sound / zara.moves",
    likes: 42800,
    comments: 320,
    shares: 210,
  },
  {
    id: "r2",
    user: users[6],
    video: img("1502680390469-be75c86b636f", 720, 1280),
    caption: "Best waves of the week",
    music: "Ocean Vibes / Kai T.",
    likes: 18400,
    comments: 210,
    shares: 90,
  },
  {
    id: "r3",
    user: users[8],
    video: img("1517836357463-d25dfeac3438", 720, 1280),
    caption: "3 exercises to fix posture",
    music: "Focus Beats / Milo R.",
    likes: 9820,
    comments: 120,
    shares: 55,
  },
];

export const conversations = [
  {
    id: "c1",
    user: users[1],
    preview: "See you at 8",
    online: true,
    unread: true,
    messages: [
      { id: "m1", fromMe: false, text: "Hey! Are we still on for tonight?", time: "7:12 PM" },
      { id: "m2", fromMe: true, text: "Yes! Same place?", time: "7:13 PM" },
      { id: "m3", fromMe: false, text: "See you at 8", time: "7:14 PM" },
    ],
  },
  {
    id: "c2",
    user: users[3],
    preview: "That painting is unreal",
    online: false,
    messages: [{ id: "m1", fromMe: false, text: "That painting is unreal", time: "3:02 PM" }],
  },
  {
    id: "c3",
    user: users[6],
    preview: "Sending you the clip now",
    online: true,
    messages: [{ id: "m1", fromMe: false, text: "Sending you the clip now", time: "1:22 PM" }],
  },
  {
    id: "c4",
    user: users[7],
    preview: "Which pot did you get?",
    online: false,
    messages: [{ id: "m1", fromMe: false, text: "Which pot did you get?", time: "Yesterday" }],
  },
  {
    id: "c5",
    user: users[9],
    preview: "Love this",
    online: false,
    messages: [{ id: "m1", fromMe: false, text: "Love this", time: "Mon" }],
  },
];

export const notifications = [
  {
    id: "n1",
    type: "like",
    user: users[1],
    text: "liked your photo.",
    time: "2m",
    thumb: explorePhotos[0],
  },
  {
    id: "n2",
    type: "follow",
    user: users[3],
    text: "started following you.",
    time: "1h",
    followed: false,
  },
  {
    id: "n3",
    type: "comment",
    user: users[5],
    text: "commented: fire shot",
    time: "3h",
    thumb: explorePhotos[1],
  },
  {
    id: "n4",
    type: "mention",
    user: users[7],
    text: "mentioned you in a comment.",
    time: "5h",
    thumb: explorePhotos[2],
  },
  {
    id: "n5",
    type: "tag",
    user: users[9],
    text: "tagged you in a post.",
    time: "1d",
    thumb: explorePhotos[3],
  },
  { id: "n6", type: "story", user: users[2], text: "replied to your story.", time: "2d" },
  {
    id: "n7",
    type: "follow",
    user: users[4],
    text: "started following you.",
    time: "3d",
    followed: true,
  },
];

export const suggestions = users.slice(4, 9);

export const highlights = [
  { id: "h1", name: "Travel", cover: img("1470071459604-3b5ec3a7fe05", 200, 200) },
  { id: "h2", name: "Studio", cover: img("1682687220198-88e9bdea9931", 200, 200) },
  { id: "h3", name: "Food", cover: img("1544005313-94ddf0286df2", 200, 200) },
  { id: "h4", name: "Friends", cover: img("1500648767791-00dcc994a43e", 200, 200) },
  { id: "h5", name: "Plants", cover: img("1416879595882-3373a0480b5b", 200, 200) },
];

export const exploreCategories = [
  "For you",
  "Travel",
  "Architecture",
  "Nature",
  "Art",
  "Food",
  "Style",
  "Music",
  "Sports",
  "Animals",
];
