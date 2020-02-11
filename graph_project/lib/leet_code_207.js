// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function buildGraph(list){
  let graph = {};
  list.forEach((prereq) => {
    let [ course, pre ] = prereq.map(String);
    if (course in graph) {
      graph[course].push(pre);
    } else {
      graph[course] = [ pre ];
    }
    if (!(pre in graph)){
      graph[pre] = [];
    }
  });
  return graph
}

function canFinish(numCourses, prerequisites) {
  let prereq = buildGraph(prerequisites);
  let totalCourses = Object.keys(prereq).length;
  let completed = new Set();

  let eligibleCourseExists = true;

  while (eligibleCourseExists) {
    eligibleCourseExists = false;

    for (let course in prereq) {
      let everyPreBeenMet = prereq[course].every((pre) => completed.has(pre));
      if (!completed.has(course) && everyPreBeenMet) {
        eligibleCourseExists = true;
        completed.add(course);
      }
    }
  }
  return completed.size === totalCourses;
}
