const zipCompressionStrategy = (data) => {
  console.log("Compressing using ZIP algorithm");
  // Implementation logic for ZIP compression
  return "Compressed using ZIP";
};

const gzipCompressionStrategy = (data) => {
  console.log("Compressing using GZIP algorithm");
  // Implementation logic for GZIP compression
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
const zipStrategy = zipCompressionStrategy;
const gzipStrategy = gzipCompressionStrategy;

const context = compressionContext(zipStrategy);
console.log(context.compress(data)); // Output: Compressed using ZIP

context.setStrategy(gzipStrategy);
console.log(context.compress(data)); // Output: Compressed using GZIP
