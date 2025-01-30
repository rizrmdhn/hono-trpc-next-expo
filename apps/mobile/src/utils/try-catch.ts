interface TryCatchResult<T> {
  result: T | null;
  error: unknown;
}

async function tryCatch<T>(fn: () => T): Promise<TryCatchResult<T>> {
  try {
    const result = await fn();
    return { result, error: null };
  } catch (error) {
    return { result: null, error };
  }
}

export { tryCatch };
