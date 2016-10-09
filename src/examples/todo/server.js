/*
  wget http://ak7.nodejam.com/db.tasks=[]
*/
async function init() {
  await request(`/db.tasks=[]`);

  //Same as
  await $nodejam(db => db.tasks = []);
}

/*
  wget http://ak7.nodejam.com/db.tasks.push({ user: ${item.user}, description: ${item.description} })
*/
async function addTask(item) {
  await request(`/db.tasks.push({ user: ${item.user}, description: ${item.description} })`);

  //Same as
  await $nodejam(db => db.tasks.push(item));
}

/*
  wget http://ak7.nodejam.com/db.tasks
*/
async function showAllTasks() {
  return await request(`/db.tasks`)

  //Same as
  return await $nodejam(db => db.tasks);
}

/*
  wget http://ak7.nodejam.com/db.tasks.filter(t => t.user === "${name}")
*/
async function findTasksByUser(name) {
  return request(`/db.tasks.filter(t => t.user === "${name}")`);

  //Same as
  return await $nodejam(db => db.tasks.filter(t => t.user === name));
}
