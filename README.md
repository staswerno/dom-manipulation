# dom manipulation notes

## what is the dom?

- document object model
- created by browser when page loaded
- graphically looks like a tree of nodes (elements)
- use js to manipulate it

## possible interactions

- change/remove html elements
- change/add css styles to elements
- read & change element attributes (href, src, alt, custom)
- create new html elements and insert them into the dom / page
- attach event listeners to elements

## console

type 'document' to see entire document

## selectors

document.

getElementById('idName')
getElementByClassName('className')
    creates html collection - like an array, but not exactly
    can select items using indexing (eg titles[0])
getElementsByTagName('h1')
    also accessible with indexes

## nodes

can be:

- html/head/body tag
- text
- comment
- attribute

full list of node types here: https://www.w3schools.com/jsref/prop_node_nodetype.asp#:~:text=If%20the%20node%20is%20an,nodeType%20property%20will%20return%208.

## events

full list of click events here: https://www.w3schools.com/jsref/dom_obj_event.asp
