function documento(inputs){
  let pattern = /^(?:[0-9]{8}[A-Z])$/;
  return pattern.test(inputs);
}

module.exports = documento;
