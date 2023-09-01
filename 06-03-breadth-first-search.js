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

function search(name, graph) {
  graph = graph || {};

  function inner(waited, visited) {
    waited = waited || [];

    if (waited.length === 0) return false;

    const person = waited[0];
    const waitedCloned = waited.slice(1);

    if (visited.indexOf(person) !== -1) return inner(waitedCloned, visited);

    if (personIsSeller(person)) {
      console.log(person + " is a mango seller!");
      return true;
    }

    return inner(waitedCloned.concat(graph[person]), visited.concat(person));
  }

  return inner(graph[name], []);
}

search("you", graph);
