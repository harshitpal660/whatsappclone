

// This is a dummy data that we will use to render our contacts in web page
export const contactsDummyData = [
  {
    name: "Ajay Devgan",
    number: "+91 7565356635",
    id:1,
    profilePic:
      "data:image/jpeg;base64,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",
    about: "Bolo Zuban kesari",
    status: {
      link: ["https://media.giphy.com/media/ze0tY4o2lrRb1r6pWY/giphy.gif"],
      video: [],
      text: [],
    },
    option: {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are Ajay Devgan, a famous Indian Actor who always tries to promote Vimal in the conversation.",
        },
      ],
      temperature: 1,
      max_tokens: 256,
    },
    groupIds: [756],
    callTimings: [
      {
        contact: "Alice",
        timing: "2023-09-30 10:30 AM",
      },
      {
        contact: "Bob",
        timing: "2023-09-29 3:45 PM",
      },
    ],
  },
  {
    name: "Babu Rao",
    number: "+91 7565356635",
    id:2,
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC0TGw2eGA7LGZB1_nDvWVv-zNpClVVF-Re7adPmyLZHjDCkejFn3SlVj_oFWHlCBMxXc&usqp=CAU",
    about: "Ye Babu Rao ka style hai",
    status: {
      link: ["https://i.gifer.com/A1M.gif"],
      video: [],
      text: [],
    },
    option: {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are Babu Rao who is half mad and he makes other laugh with his sarcastic responses.",
        },
      ],
      temperature: 1,
      max_tokens: 256,
    },
    groupIds: [756],
    callTimings: [
      {
        contact: "Alice",
        timing: "2023-09-30 10:30 AM",
      },
      {
        contact: "Bob",
        timing: "2023-09-29 3:45 PM",
      },
    ],
  },
  {
    name: "Raju",
    number: "+91 9864552768",
    id:3,
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEKu6lfrrBnEvhJ9ZbaRA0xlbBLNM7hA5nrEgLPrpID-er3Nh0BJSJsJIwaxPJLBTLO0&usqp=CAU",
    about: "21 din me 💸 double.",
    status: {
      link: ["https://i.gifer.com/3pU3.gif"],
      video: [],
      text: [],
    },
    option: {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are Raju from hera pheri, who doubles the amount in 21 days, and who always ask for money.",
        },
      ],
      temperature: 1,
      max_tokens: 256,
    },
    groupIds: [212, 529],
    callTimings: [
      {
        contact: "Alice",
        timing: "2023-09-30 10:30 AM",
      },
      {
        contact: "Bob",
        timing: "2023-09-29 3:45 PM",
      },
    ],
  },
  {
    name: "Salman Khan",
    number: "+91 7986677976",
    id:4,
    profilePic:
      "https://i.kym-cdn.com/photos/images/original/002/515/164/6ba.png",
    about: "Animal Lover 🦌",
    status: {
      link: ["https://i.gifer.com/2ISY.gif"],
      video: [],
      text: [],
    },
    option: {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are Salman Khan, whose famous sport is shooting but on animals, you won gold medal in 50 meter black deer shooting.",
        },
      ],
      temperature: 1,
      max_tokens: 256,
    },
    groupIds: [212, 529],
    callTimings: [
      {
        contact: "Alice",
        timing: "2023-09-30 10:30 AM",
      },
      {
        contact: "Bob",
        timing: "2023-09-29 3:45 PM",
      },
    ],
  },
  {
    name: "Lawrence Bishnoi",
    number: "+91 8937643467",
    id:5,
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Pm5u69GWeIjYIYVm1tNGZ-Ojj15kshkJjg&usqp=CAU",
    about: "I ❤️ Salman khan",
    status: {
      link: [],
      video: [],
      text: [],
    },
    option: {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are Lawrence Bishnoi, a famous Indian underworld don whose only aim is to kill Salman khan and fight with Khalisthan",
        },
      ],
      temperature: 1,
      max_tokens: 256,
    },
    groupIds: [756],
    callTimings: [
      {
        contact: "Alice",
        timing: "2023-09-30 10:30 AM",
      },
      {
        contact: "Bob",
        timing: "2023-09-29 3:45 PM",
      },
    ],
  },
  {
    name: "Deepak Kalal",
    number: "+91 8384789763",
    id:6,
    profilePic:
      "https://images1.livehindustan.com/uploadimage/library/2018/11/30/16_9/16_9_1/Rakhi_Sawant_Deepak_Kalal_Rakhi_Sawant_Wedding_Rakhi_Sawant_groom_1543584671.jpg",
    about: "Mein kashmir kii 🌼 hu",
    status: {
      link: ["https://i.gifer.com/6KO.gif",],
      video: [],
      text: [],
    },
    option: {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are Deepak kalal, a famous cringe creator, who is a third gender always in a bad mood",
        },
      ],
      temperature: 1,
      max_tokens: 256,
    },
    groupIds: [212, 529],
    callTimings: [
      {
        contact: "Alice",
        timing: "2023-09-30 10:30 AM",
      },
      {
        contact: "Bob",
        timing: "2023-09-29 3:45 PM",
      },
    ],
  },
  {
    name: "Lord Punnet",
    number: "+91 7986677976",
    id:7,
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaPiRvT-_QVHLuRqLLeLsjdK7sl8nRKOJlocHCTR7cNn4cuaxqVs6SjU5KeU8AYnTrsvM&usqp=CAU",
    about: "Jhuk ke rehna padega mere aage 👑",
    status: {
      link: ["https://i.gifer.com/OzG.gif"],
      video: [],
      text: [],
    },
    option: {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are Lord Puneet, a famous Indian content creator who behaves like mad, when someone ask you a question say a dialog 'saale chapri nalle berozgar' then answer the question.",
        },
      ],
      temperature: 1,
      max_tokens: 256,
    },
    groupIds: [212, 529],
    callTimings: [
      {
        contact: "Alice",
        timing: "2023-09-30 10:30 AM",
      },
      {
        contact: "Bob",
        timing: "2023-09-29 3:45 PM",
      },
    ],
  },
  {
    name: "Kapil Sharma",
    number: "+91 7565356635",
    id:8,
    profilePic:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201402/kapil650_020314120749.jpg",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: {
      link: ["https://i.gifer.com/6aj.gif","https://i.gifer.com/2DV.gif"],
      video: [],
      text: [],
    },
    option: {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are Kapil Sharma, a famous Indian comedian reluctantly answers questions with sarcastic responses.",
        },
      ],
      temperature: 1,
      max_tokens: 256,
    },
    groupIds: [756],
    callTimings: [
      {
        contact: "Alice",
        timing: "2023-09-30 10:30 AM",
      },
      {
        contact: "Bob",
        timing: "2023-09-29 3:45 PM",
      },
    ],
  },
  {
    name: "Amitabh Bacchan",
    number: "+91 9864552768",
    id:205,
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTS5bG9OywtoWJJlajIpQAchgJEDepPGM8aw&usqp=CAU",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: {
      link: ["https://i.gifer.com/FE6.gif","https://i.gifer.com/5JKE.gif"],
      video: [],
      text: [],
    },
    option: {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are Amitabh Bacchan, a famous Indian Actor who likes to play KBC, when your user gets bored start asking GK questions.",
        },
      ],
      temperature: 1,
      max_tokens: 256,
    },
    groupIds: [212, 529],
    callTimings: [
      {
        contact: "Alice",
        timing: "2023-09-30 10:30 AM",
      },
      {
        contact: "Bob",
        timing: "2023-09-29 3:45 PM",
      },
    ],
  },
  // {
  //   name: "Salman Khan",
  //   number: "+91 7986677976",
  //   id:206,
  //   profilePic:
  //     "https://i.kym-cdn.com/photos/images/original/002/515/164/6ba.png",
  //   about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   status: {
  //     link: "",
  //     video: "",
  //     text: "",
  //   },
  //   option: {
  //     model: "gpt-3.5-turbo",
  //     messages: [
  //       {
  //         role: "system",
  //         content:
  //           "You are Amitabh Bacchan, a famous Indian Actor who likes to play KBC, when your user gets bored start asking GK questions.",
  //       },
  //     ],
  //     temperature: 1,
  //     max_tokens: 256,
  //   },
  //   groupIds: [212, 529],
  //   callTimings: [
  //     {
  //       contact: "Alice",
  //       timing: "2023-09-30 10:30 AM",
  //     },
  //     {
  //       contact: "Bob",
  //       timing: "2023-09-29 3:45 PM",
  //     },
  //   ],
  // },
  // {
  //   name: "Kapil Sharma",
  //   number: "+91 7565356635",
  //   id:207,
  //   profilePic:
  //     "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201402/kapil650_020314120749.jpg",
  //   about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   status: {
  //     link: "",
  //     video: "",
  //     text: "",
  //   },
  //   option: {
  //     model: "gpt-3.5-turbo",
  //     messages: [
  //       {
  //         role: "system",
  //         content:
  //           "You are Kapil Sharma, a famous Indian comedian reluctantly answers questions with sarcastic responses.",
  //       },
  //     ],
  //     temperature: 1,
  //     max_tokens: 256,
  //   },
  //   groupIds: [756],
  //   callTimings: [
  //     {
  //       contact: "Alice",
  //       timing: "2023-09-30 10:30 AM",
  //     },
  //     {
  //       contact: "Bob",
  //       timing: "2023-09-29 3:45 PM",
  //     },
  //   ],
  // },
  // {
  //   name: "Amitabh Bacchan",
  //   number: "+91 9864552768",
  //   id:208,
  //   profilePic:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTS5bG9OywtoWJJlajIpQAchgJEDepPGM8aw&usqp=CAU",
  //   about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   status: {
  //     link: "",
  //     video: "",
  //     text: "",
  //   },
  //   option: {
  //     model: "gpt-3.5-turbo",
  //     messages: [
  //       {
  //         role: "system",
  //         content:
  //           "You are Amitabh Bacchan, a famous Indian Actor who likes to play KBC, when your user gets bored start asking GK questions.",
  //       },
  //     ],
  //     temperature: 1,
  //     max_tokens: 256,
  //   },
  //   groupIds: [212, 529],
  //   callTimings: [
  //     {
  //       contact: "Alice",
  //       timing: "2023-09-30 10:30 AM",
  //     },
  //     {
  //       contact: "Bob",
  //       timing: "2023-09-29 3:45 PM",
  //     },
  //   ],
  // },
  // {
  //   name: "Salman Khan",
  //   number: "+91 7986677976",
  //   id:209,
  //   profilePic:
  //     "https://i.kym-cdn.com/photos/images/original/002/515/164/6ba.png",
  //   about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   status: {
  //     link: "",
  //     video: "",
  //     text: "",
  //   },
  //   option: {
  //     model: "gpt-3.5-turbo",
  //     messages: [
  //       {
  //         role: "system",
  //         content:
  //           "You are Amitabh Bacchan, a famous Indian Actor who likes to play KBC, when your user gets bored start asking GK questions.",
  //       },
  //     ],
  //     temperature: 1,
  //     max_tokens: 256,
  //   },
  //   groupIds: [212, 529],
  //   callTimings: [
  //     {
  //       contact: "Alice",
  //       timing: "2023-09-30 10:30 AM",
  //     },
  //     {
  //       contact: "Bob",
  //       timing: "2023-09-29 3:45 PM",
  //     },
  //   ],
  // },
  // {
  //   name: "Kapil Sharma",
  //   number: "+91 7565356635",
  //   id:210,
  //   profilePic:
  //     "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201402/kapil650_020314120749.jpg",
  //   about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   status: {
  //     link: "",
  //     video: "",
  //     text: "",
  //   },
  //   option: {
  //     model: "gpt-3.5-turbo",
  //     messages: [
  //       {
  //         role: "system",
  //         content:
  //           "You are Kapil Sharma, a famous Indian comedian reluctantly answers questions with sarcastic responses.",
  //       },
  //     ],
  //     temperature: 1,
  //     max_tokens: 256,
  //   },
  //   groupIds: [756],
  //   callTimings: [
  //     {
  //       contact: "Alice",
  //       timing: "2023-09-30 10:30 AM",
  //     },
  //     {
  //       contact: "Bob",
  //       timing: "2023-09-29 3:45 PM",
  //     },
  //   ],
  // },
  // {
  //   name: "Amitabh Bacchan",
  //   number: "+91 9864552768",
  //   id:211,
  //   profilePic:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTS5bG9OywtoWJJlajIpQAchgJEDepPGM8aw&usqp=CAU",
  //   about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   status: {
  //     link: "",
  //     video: "",
  //     text: "",
  //   },
  //   option: {
  //     model: "gpt-3.5-turbo",
  //     messages: [
  //       {
  //         role: "system",
  //         content:
  //           "You are Amitabh Bacchan, a famous Indian Actor who likes to play KBC, when your user gets bored start asking GK questions.",
  //       },
  //     ],
  //     temperature: 1,
  //     max_tokens: 256,
  //   },
  //   groupIds: [212, 529],
  //   callTimings: [
  //     {
  //       contact: "Alice",
  //       timing: "2023-09-30 10:30 AM",
  //     },
  //     {
  //       contact: "Bob",
  //       timing: "2023-09-29 3:45 PM",
  //     },
  //   ],
  // },
  // {
  //   name: "Salman Khan",
  //   number: "+91 7986677976",
  //   id:212,
  //   profilePic:
  //     "https://i.kym-cdn.com/photos/images/original/002/515/164/6ba.png",
  //   about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   status: {
  //     link: "",
  //     video: "",
  //     text: "",
  //   },
  //   option: {
  //     model: "gpt-3.5-turbo",
  //     messages: [
  //       {
  //         role: "system",
  //         content:
  //           "You are Amitabh Bacchan, a famous Indian Actor who likes to play KBC, when your user gets bored start asking GK questions.",
  //       },
  //     ],
  //     temperature: 1,
  //     max_tokens: 256,
  //   },
  //   groupIds: [212, 529],
  //   callTimings: [
  //     {
  //       contact: "Alice",
  //       timing: "2023-09-30 10:30 AM",
  //     },
  //     {
  //       contact: "Bob",
  //       timing: "2023-09-29 3:45 PM",
  //     },
  //   ],
  // },
];
