/**
 * All the possible section of the web app
 *
 */
 export const SectionType = {
  INTRODUCTION: {
    title: "Introduction",
    subTabs: [
      {
        title: "what is react.js",
        content: "A JavaScript library for building user interfaces"
      },
      {
        title: "getting started",
        content: "This page is an overview of the React documentation and related resources."
      }
    ]
  },
  INSTANCE: {
    title: "The Instance",
    subTabs: [
      {
        title: "creating a instance",
        content: "If you’re new to React, you probably only worked with component classes and instances before. For example, you may declare a Button component by creating a class. When the app is running, you may have several instances of this component on screen, each with its own properties and local state. This is the traditional object-oriented UI programming. Why introduce elements?"
      },
      {
        title: "data and methods",
        content: "React is great at displaying your data in a hierarchical component view"
      },      
      {
        title: "instance lifecycle hooks",
        content: "This article will showinstance lifecycle hooks"
      }
    ]
  },
  LIST: {
    title: "List Rendering",
    subTabs: [
      {
        title: "mapping an array to elements",
        content: "This article will show you how to map an array to elements"
      }
    ]
  },
}