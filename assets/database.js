
const width = 19
const height = 19
const left = 10
const top = 10

const prop = {
  width, height,
  center : {
    top, left
  },
  grid : {
    columns : function() {
      let s = "";
      for(let i = 0; i < width; i++) {
        s += "1fr ";
      }
      return s;
    },
    rows : function() {
      let s = "";
      for(let i = 0; i < height; i++) {
        s += "1fr ";
      }
      return s;
    }
  }
}

function getPos(x, y) {
  return {
    column : x + prop.center.left,
    row : y + prop.center.top
  }
}

let database = {
  data : [
    { id : 0,
      url: "https://www.youtube.com/embed/4QHFhIjF2L0",
      text : { title : "JavaScript Fundamentals", prerequisite: "Prerequisites : HTML & CSS", description : "Basics of JavaScript"},
      pos : getPos(0, 0),
      requires : []
      },
    { id : 1,
      url: "https://www.youtube.com/embed/ppMlvGMT2qE",
      text : { title : "Hoisting", prerequisite: "Prerequisites : JS Fundamentals", description : "Prerequisite for ES6 Course"},
      pos : getPos(-1, 0),
      requires: [0]
      },
    { id : 2,
      url: "https://www.youtube.com/embed/F3EsDDp4VXg",
      text : { title : "Closures", prerequisite: "Prerequisites : Hoisting & Prototypes", description : "Prerequisite for ES6 Course, content starts at ~7:00"},
      pos : getPos(-1, 1),
      requires: [1, 2]
      },
    { id : 3,
      url: "https://www.youtube.com/embed/4oudziatkLI",
      text : { title : "Prototypes", prerequisite: "Prerequisites : JS Fundamentals", description : "Prerequisite for ES6 Course"},
      pos : getPos(0, 1),
      requires: [0]
      },
    { id : 4,
      url: "https://www.youtube.com/embed/a3X9uqCoxKY",
      text : { title : "Classes", prerequisite: "Prerequisites : Prototypes", description : "Introduction to JS inheritance"},
      pos : getPos(1, 1),
      requires: [3]
      },
    { id : 5,
      url: "https://www.youtube.com/embed/4YfsAz-sNAo",
      text : { title : "ES6- Intro", prerequisite: "Prerequisites : Closures", description : "ES 6 Course"},
      pos : getPos(-1, 2),
      requires: [3]
      },
    { id : 6,
      url: "https://www.youtube.com/embed/0wWUeuoAbLU",
      text : { title : "ES6- Var", prerequisite: "Prerequisites : Previous ES6 videos", description : "ES 6 Course"},
      pos : getPos(-1, 3),
      requires: [3]
      },
    { id : 7,
      url: "https://www.youtube.com/embed/gBNbMKHTDyE",
      text : { title : "ES6- Var (Part 2)", prerequisite: "Prerequisites : Previous ES6 videos", description : "ES 6 Course"},
      pos : getPos(0, 3),
      requires: [3]
      },
    { id : 8,
      url: "https://www.youtube.com/embed/D_ddM5gevVU",
      text : { title : "ES6- Spread", prerequisite: "Prerequisites : Previous ES6 videos", description : "ES 6 Course"},
      pos : getPos(1, 3),
      requires: [3]
      },
    { id : 9,
      url: "https://www.youtube.com/embed/q_fiUhDf6DA",
      text : { title : "ES6- Template strings", prerequisite: "Prerequisites : Previous ES6 videos", description : "ES 6 Course"},
      pos : getPos(2, 3),
      requires: [3]
      },
    { id : 10,
      url: "https://www.youtube.com/embed/x4SFjShP9vA",
      text : { title : "ES6- Parameters", prerequisite: "Prerequisites : Previous ES6 videos", description : "ES 6 Course"},
      pos : getPos(3, 3),
      requires: [3]
      },
    { id : 11,
      url: "https://www.youtube.com/embed/rS2uZpyUNJg",
      text : { title : "ES6- For-of loop", prerequisite: "Prerequisites : Previous ES6 videos", description : "ES 6 Course"},
      pos : getPos(3, 2),
      requires: [3]
      },
    { id : 12,
      url: "https://www.youtube.com/embed/pbAnhW6ENk8",
      text : { title : "ES6- Objects", prerequisite: "Prerequisites : Previous ES6 videos", description : "ES 6 Course"},
      pos : getPos(3, 1),
      requires: [3]
      },
    { id : 13,
      url: "https://www.youtube.com/embed/yBNd-0dO1u8",
      text : { title : "ES6- Classes", prerequisite: "Prerequisites : Previous ES6 videos", description : "ES 6 Course"},
      pos : getPos(2, 1),
      requires: [3]
      },
    { id : 14,
      url: "https://www.youtube.com/embed/e-5obm1G_FY",
      text : { title : "JS as a functional language", prerequisite: "Prerequisites : Closures", description : "Functional approach"},
      pos : getPos(-2, 1),
      requires: [3]
      }
    ],
  props : prop
}

export { database }