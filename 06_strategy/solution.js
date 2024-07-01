// Define compression strategy interface
class CompressionStrategy {
  compress(data) {
    throw new Error("compress method must be implemented");
  }
}

// Concrete strategy: ZIP compression
class ZIPCompressionStrategy extends CompressionStrategy {
  compress(data) {
    console.log("Compressing using ZIP algorithm");
    // Implementation logic for ZIP compression
    return "Compressed using ZIP";
  }
}

// Concrete strategy: GZIP compression
class GZIPCompressionStrategy extends CompressionStrategy {
  compress(data) {
    console.log("Compressing using GZIP algorithm");
    // Implementation logic for GZIP compression
    return "Compressed using GZIP";
  }
}

// Context class that uses a compression strategy
class CompressionContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  compress(data) {
    return this.strategy.compress(data);
  }
}

// Example usage
const data = "Lorem ipsum dolor sit amet";
const zipStrategy = new ZIPCompressionStrategy();
const gzipStrategy = new GZIPCompressionStrategy();

const context = new CompressionContext(zipStrategy);
console.log(context.compress(data)); // Output: Compressed using ZIP

context.setStrategy(gzipStrategy);
console.log(context.compress(data)); // Output: Compressed using GZIP
