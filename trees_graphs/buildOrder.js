// You are given a list of projects and a list of dependencies. All of a project's dependencies
// must be built before the project is. Find a build order that will allow the project to be built
// if there is no valid build order return an error

const buildOrder = (projects, dependencies) => {
  let dependenciesHash = buildHash(dependencies);
  let dependenciesNum = configureDependenciesNum(projects, dependencies);
  let q = new Queue();
  let order = [];

  for(let project of findIndependents(dependenciesNum)) {
    q.enqueue(project);
  }

  while (q.length > 0) {
    let current = q.dequeue();
    current.visited = true;
    order.push(current);

    for (let dependent of dependenciesHash[current]) {
      dependenciesNum[dependent]  --;
    }
    delete dependenciesHash[current];

    for(let project of findIndependents(dependenciesNum)) {
      q.enqueue(project);
    }
  }

  if (projects.length === order.length) {
    return order;
  } else {
    new Error('No valid build order')
  }
}

const buildHash = (dependencies) => {
  let hash = {};
  for (var i = 0; i < dependencies.length; i++) {
    let key = dependencies[i][0];
    let dependent = dependencies[i][1];

    if (!hash[key]) {
      hash[key] = [];
    }
    hash[key].push(dependent);
  }

  return hash;
}
