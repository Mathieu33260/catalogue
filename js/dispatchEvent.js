
export default (eventName, toOpen) => {
    let event = new CustomEvent(eventName, {detail: toOpen});
    window.dispatchEvent(event);
}