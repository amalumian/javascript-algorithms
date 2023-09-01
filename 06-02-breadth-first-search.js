"use strict";

const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

function personIsSeller(name) {
  return name === "thom";
}

function search(name) {
  let search_queue = [];
  search_queue = search_queue.concat(graph[name]);

  const searched = [];

  while (search_queue.length) {
    let person = search_queue.shift();

    if (searched.indexOf(person) === -1) {
      if (personIsSeller(person)) {
        console.log(person + " is a mango seller!");
        return true;
      }

      search_queue = search_queue.concat(graph[person]);

      searched.push(person);
    }
  }

  console.log("Mango seller was not found!");
  return false;
}

console.log("O(V+E)");
search("you");
