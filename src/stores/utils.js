export function ignoreFirst(func) {
  let firstTime = true;
  return (...input) => {
    if (firstTime) {
      firstTime = false;
      return;
    };

    func(...input);
  }
}

export function subSetToStorage(name, store) {
  store.subscribe(ignoreFirst(val => {
    localStorage.setItem(name, JSON.stringify(val));
  }));
}