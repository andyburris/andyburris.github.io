import mjukna from 'mjukna';
import {linear} from 'svelte/easing';



const sharedin = mjuknaTransition();
const sharedout = keep;

function mjuknaTransition() {
    return (node, params) => {
        console.log("running mjuknaTransition for " + params["test"]);
        console.log(node)
        console.log(`transition - node key = ${node.getAttribute("transition-key")}`)
        const testQuery = `[transition-key="${node.getAttribute("transition-key")}"]`
        console.log(testQuery);
        const anchor = [...document.querySelectorAll(testQuery)].filter(e => e!=node)[0];
        console.log("elements = ", document.querySelectorAll(testQuery));
        console.log("anchor = ", anchor)
        
        //if the mjukna animation is delayed for some reason, the node shouldn't be visible while it calculates
        node.setAttribute("style", "opacity: 0;");
        mjukna({
            anchor: anchor,
            element: () => node
        })
        node.setAttribute("style", "opacity: 1;");
        console.log("breakpt")
    }
}

// mjukna needs the original element to stay in the DOM to calculate the transition. 
// The easiest way to do this is by putting a blank transition on it, which seems to cause the compiler to keep it
function keep(node) {
    const o = +getComputedStyle(node).opacity;
    return {
        delay: 0,
        duration: 0,
        easing: linear,
        css: t => `opacity: ${t * o}`
    };
}
export { sharedin, sharedout };