https://vue-loader.vuejs.org/guide/hot-reload.html#usage

Lesson2
In this lesson, we'll move away from the inline template and use the x-template technique, which is great when you're getting started.

https://vuejs.org/v2/guide/syntax

Lesson3 : plan-picker
https://vuejs.org/v2/guide/components-props
start code = https://pastebin.com/zgms7V4y or https://jsfiddle.net/hootlex/195feduh/

Lesson 4: Nested components

Lesson 5: global vs local components
global components are included in webpack builds and increases volume of javascript downloaded.

lesson 6: communication between components
https://vueschool.io/lessons/communication-between-components
add data and methods to PlanComponent in app.js
@4:43 - this.\$emit("select", this.name) in app.js maps to @select above, @select="selectPlan" connects to selectPlan method in PlanPickerComponent id="plan-picker-template" matches template name in app.js definition of PlanPickerComponent

asdasd
