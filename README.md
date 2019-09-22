# Hooks
## useEffect
* Fetching Data when a Component Mounts **useEffect.js**
* Fetching Data Multiple Times with Synced Effect Hooks
    * Oftentimes we will want to make the same fetch call multiple times during the life of a component, all based on when certain data changes. It can be tempting to write a function outside of the effect hook that calls an API, the call that function from the effect hook during the mounting stage, and then subsequently call it from a handler function later.
* Clean up side effects

