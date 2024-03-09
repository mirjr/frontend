type SerializationOptions = {
  formatting?: {
    indent?: number;
    getIndent?: () => number;
  };
};

function serializeJSON(value: any, options?: SerializationOptions) {
  const indentation = options?.formatting?.getIndent?.();
  // const indentation = options?.formatting?.indent;
  return JSON.stringify(value, null, indentation);
}

const user = {
  name: "Marcus Reshford",
  twitter: "marcusreshford",
};

const json = serializeJSON(user, {
  formatting: {
    getIndent: () => 2,
  },
});

console.log(json);
