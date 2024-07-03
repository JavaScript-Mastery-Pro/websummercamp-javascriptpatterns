const zipCompressionStrategy = (data) => {
  console.log("Compressing using ZIP algorithm");

  return "Compressed using ZIP";
};

const gzipCompressionStrategy = (data) => {
  console.log("Compressing using GZIP algorithm");

  return "Compressed using GZIP";
};

// Context function that sets strategy and compresses data
const compressionContext = (strategy) => {
  const setStrategy = (newStrategy) => {
    strategy = newStrategy;
  };

  const compress = (data) => {
    return strategy(data);
  };

  return { setStrategy, compress };
};

// Example usage
const data = "Lorem ipsum dolor sit amet";

const context = compressionContext(zipCompressionStrategy);
console.log(context.compress(data)); // Output: Compressed using ZIP

context.setStrategy(gzipCompressionStrategy);
console.log(context.compress(data)); // Output: Compressed using GZIP
