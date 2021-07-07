function eventController(...fns) {
  let timer = null;

  return {
    throttle: () => {
      if (!timer) {
        timer = setInterval(() => {
          timer = null;
          fns.forEach((fn) => fn());
        }, 5000);
      }
    },
  };
}

export default eventController;
