export type DetoxMatcher =
  | ReturnType<typeof by.id>
  | ReturnType<typeof by.text>
  | ReturnType<typeof by.label>
  | ReturnType<typeof by.type>;
