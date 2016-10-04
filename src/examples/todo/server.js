//Transipiles to
//  await db.createCollection("tasks")

async function init() {
  await request(`http://ak7.nodejam.com/db.tasks=[]`);

  //Same as
  await $nodejam(db => db.tasks = []);
}

async function addTask(item) {
  await request(`http://ak7.nodejam.com/db.tasks.push({ user: ${item.user}, description: ${item.description} })`);

  //Same as
  await $nodejam(db => db.tasks.push(item));
}

async function showAllTasks() {
  return await request(`http://ak7.nodejam.com/db.tasks`)

  //Same as
  await $nodejam(db => db.tasks);
}

async function findTasksByUser(name) {
  return request(`http://ak7.nodejam.com/db.tasks.filter(t => t.user === "${name}")`);

  //Same as
  await $nodejam(db => db.tasks.filter(t => t.user === name));
}
