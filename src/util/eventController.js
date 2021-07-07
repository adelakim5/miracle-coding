function eventController(...fns) {
  let timer = null;

  return {
    throttle: () => {
      if (!timer) {
        timer = setInterval(() => {
          timer = null;
          fns.forEach((fn) => fn());
        }, 3000);
      }
    },
  };
}

export default eventController;
